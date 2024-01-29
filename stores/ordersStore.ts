import { defineStore } from "pinia";

export const useOrdersStore = defineStore("ordersStore", () => {
  const orders = ref<Order[]>([]);
  const page = ref<number>(1);
  const totalPages = ref(1);
  const keyWord = ref("");

  function searchOrders(value: string) {
    keyWord.value = value;
    fetchOrders();
  }

  function setPage(newPage: number) {
    if (newPage === 0) return false;
    page.value = newPage;

    fetchOrders();
  }

  function deleteOrder(idArray: string[]) {
    useAuthFetch(`${useApiUrl()}/merchants_reports_delete`, {
      body: {
        orders_ids: idArray,
      },
    }).then(res => {
      if (res.message === true) {
        fetchOrders();
      }
    });
  }

  function fetchOrders() {
    useAuthFetch(`${useApiUrl()}/orders`, {
      body: {
        page: page.value,
        per_page: 10,
        keyword: keyWord.value,
      },
    }).then((res) => {
      orders.value = res.orders;
      totalPages.value = res.total_pages;
    }).catch(res => {
      console.error(res);
    });
  };

  return {
    fetchOrders,
    deleteOrder,
    searchOrders,
    setPage,
    orders,
    totalPages,
    page,
  }
})