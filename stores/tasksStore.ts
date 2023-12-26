import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasksStore", () => {
  const tasks = ref<Task[]>([]);
  const page = ref<number>(1);
  const totalPages = ref(1);


  function setPage(newPage: number) {
    if (newPage === 0) return false;
    page.value = newPage;

    fetchTasks();
  }

  function deleteTask(idArray: string[]) {
    useAuthFetch(`${useApiUrl()}/delete_task`, {
      body: {
        task_ids: idArray,
      },
    }).then(res => {
      if (res.message === true) {
        fetchTasks();
      }
    });
  }

  function fetchTasks() {
    useAuthFetch(`${useApiUrl()}/tasks`, {
      body: {
        page: page.value,
        per_page: 10,
      },
    }).then((res) => {
      tasks.value = res.tasks;
      totalPages.value = res.total_pages;
    }).catch(res => {
      console.error(res);
    });
  };

  return {
    fetchTasks,
    deleteTask,
    setPage,
    tasks,
    totalPages,
    page,
  }
})