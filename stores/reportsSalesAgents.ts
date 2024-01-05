import { defineStore } from "pinia";

export const useReportsSalesAgentsStore = defineStore("reportsSalesAgentsStore", () => {
  const reports = ref<ReportSalesAgents[]>([]);
  const page = ref<number>(1);
  const totalPages = ref(1);
  const keyWord = ref("");

  function searchReports(value: string) {
    keyWord.value = value;
    fetchReports();
  }

  function setPage(newPage: number) {
    if (newPage === 0) return false;
    page.value = newPage;

    fetchReports();
  }

  function deleteReports(idArray: string[]) {
    useAuthFetch(`${useApiUrl()}/delete_contract`, {
      body: {
        contract_ids: idArray,
      },
    }).then(res => {
      if (res.message === true) {
        fetchReports();
      }
    });
  }

  function fetchReports() {
    useAuthFetch(`${useApiUrl()}/merchants_reports`, {
      body: {
        page: page.value,
        per_page: 10,
        keyword: keyWord.value,
      },
    }).then((res) => {
      reports.value = res.reports;
      totalPages.value = res.total_pages;
    }).catch(res => {
      console.error(res);
    });
  };

  return {
    fetchReports,
    deleteReports,
    searchReports,
    setPage,
    reports,
    totalPages,
    page,
  }
})