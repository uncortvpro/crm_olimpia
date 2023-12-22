import { defineStore } from "pinia";

export const useObjectivesStore = defineStore("objectivesStore", () => {
//     const objectives = ref<Objective[]>([]);
//     const page = ref<number>(1);
//     const keyWord = ref("");
//     const endPage = ref(1);

//     const sorting = ref<SortingObjective>("");
//     const reverseSorting = ref<boolean>(false);

//     const setSorting = (value: SortingObjective) => {
//         useSorting(value, reverseSorting, sorting, fetchObjectives);
//     }


//     function searchObjectives(value: string) {
//         keyWord.value = value;
//         fetchObjectives();
//     }

//     function setPage(newPage: number) {
//         if(newPage === 0) return false;
//         page.value = newPage;

//         fetchObjectives();
//     }

//     function deleteObjectives(id: string) {

//         useAuthFetch(`${useApiUrl()}/delete_task`, {
//             body: {
//                 task_id: id,
//             },
//         }).then(res => {
//             if (res.message === true) {
//                 fetchObjectives();
//             }
//         });
//     }

//     function fetchObjectives() {
//         useAuthFetch(`${useApiUrl()}/tasks`, {
//             body: {
//                 page: page.value,
//                 per_page: 10,
//                 keyword: keyWord.value,
//                 sort_by: sorting.value,
//                 reverse_sort: reverseSorting.value,
//             },
//         }).then((res) => {
//             objectives.value = res.tasks;
//             endPage.value = res.total_pages;
//         }).catch(res => {
//             console.error(res);
//         });
//     };

// return {
//     fetchObjectives,
//     searchObjectives,
//     deleteObjectives,
//     setPage,
//     objectives,
//     endPage,
//     keyWord,
//     page,
//     setSorting,
//     sorting,
//     reverseSorting
// }
})