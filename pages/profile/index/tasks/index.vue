<script setup lang="ts">
const tasksStore = useTasksStore();
const isModalRemove = ref(false);
const deletionTasks = ref<string[]>([]);

const tasks = computed(() => tasksStore.tasks);
const totalPages = computed(() => tasksStore.totalPages);
const setPage = (page: number) => tasksStore.setPage(page);

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const deleteRequest = () => [tasksStore.deleteTask(deletionTasks.value)];

const fetchTasks = () => {
  tasksStore.fetchTasks();
};

fetchTasks();
</script>

<template>
  <LayoutModulePage title="Задачі">
    <template #header>
      <div class="flex items-center gap-[20px] md:gap-[25px] xl:gap-[30px]">
        <UiButtonPrimary to="/profile/tasks/new_task"
          >Додати задачу</UiButtonPrimary
        >
        <UiButtonOpacityDelete
          :disabled="deletionTasks.length < 1"
          @click="switchModalRemove(true)"
        ></UiButtonOpacityDelete>
      </div>
    </template>
    <template #content>
      <ModalPrimaryWarning
        v-model="isModalRemove"
        @confirm="deleteRequest"
        @closeModal="switchModalRemove(false)"
        >Ви впевнені, що хочете видалити задачу?</ModalPrimaryWarning
      >
      <UiTable :totalPages="totalPages" @setPage="setPage">
        <template #headers>
          <UiTableCellHeader></UiTableCellHeader>
          <UiTableCellHeader>Дата</UiTableCellHeader>
          <UiTableCellHeader>Задача</UiTableCellHeader>
          <UiTableCellHeader>Відповідальний</UiTableCellHeader>
          <UiTableCellHeader>Статус</UiTableCellHeader>
          <UiTableCellHeader>Термін</UiTableCellHeader>
        </template>
        <template #items>
          <PagesTasksTableItem
            v-for="task in tasks"
            :key="task._id"
            :task="task"
            v-model:selectDeletion="deletionTasks"
            @deleteAction="switchModalRemove(true)"
          ></PagesTasksTableItem>
        </template>
      </UiTable>
    </template>
  </LayoutModulePage>
</template>

<style scoped></style>
