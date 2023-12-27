import { defineStore } from "pinia";

export const useContractsStore = defineStore("contractsStore", () => {
  const contracts = ref<Contract[]>([]);
  const page = ref<number>(1);
  const totalPages = ref(1);


  function setPage(newPage: number) {
    if (newPage === 0) return false;
    page.value = newPage;

    fetchContracts();
  }

  function deleteContract(idArray: string[]) {
    useAuthFetch(`${useApiUrl()}/delete_contract`, {
      body: {
        contract_ids: idArray,
      },
    }).then(res => {
      if (res.message === true) {
        fetchContracts();
      }
    });
  }

  function fetchContracts() {
    useAuthFetch(`${useApiUrl()}/contracts`, {
      body: {
        page: page.value,
        per_page: 10,
      },
    }).then((res) => {
      contracts.value = res.contracts;
      totalPages.value = res.total_pages;
    }).catch(res => {
      console.error(res);
    });
  };

  return {
    fetchContracts,
    deleteContract,
    setPage,
    contracts,
    totalPages,
    page,
  }
})