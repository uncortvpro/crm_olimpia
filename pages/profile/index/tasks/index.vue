<script setup lang="ts">
const tasksStore = useTasksStore();
const tasks = computed(() => tasksStore.tasks);

const isModalCreate = ref<boolean>(false);
const changeModalCreate = (value: boolean) => {
  isModalCreate.value = value;
};

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
        <UiButtonOpacityDelete></UiButtonOpacityDelete>
      </div>
    </template>
    <template #content>
      <UiTable>
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
          ></PagesTasksTableItem>
        </template>
      </UiTable>
    </template>
  </LayoutModulePage>
</template>

<style scoped></style>
