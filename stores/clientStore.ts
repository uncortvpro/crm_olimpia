import { defineStore } from "pinia";

export const useClientStore = defineStore("clientStore", () => {
  const clients = ref<Client[]>([]);
  const page = ref<number>(1);
  const totalPages = ref(1);
  const keyWord = ref("");


  function search(value: string) {
    keyWord.value = value;
    fetchClients();
  }

  function setPage(newPage: number) {
    if (newPage === 0) return false;
    page.value = newPage;

    fetchClients();
  }

  function deleteClient(idArray: string[]) {
    console.log(idArray);

    useAuthFetch(`${useApiUrl()}/delete_client`, {
      body: {
        clients_ids: idArray,
      },
    }).then(res => {
      if (res.message === true) {
        fetchClients();
      }
    });
  }

  function fetchClients() {
    useAuthFetch(`${useApiUrl()}/clients`, {
      body: {
        page: page.value,
        per_page: 10,
        keyword: keyWord.value
      },
    }).then((res) => {
      clients.value = res.clients;
      totalPages.value = res.total_pages;
    }).catch(res => {
      console.error(res);
    });
  };

  return {
    fetchClients,
    deleteClient,
    setPage,
    clients,
    totalPages,
    page,
    search
  }
})