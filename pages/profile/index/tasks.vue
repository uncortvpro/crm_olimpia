<script setup lang="ts">
const isModal = ref(false);

const tasksStore = useTasksStore();
const tasks = computed(() => tasksStore.tasks);

const fetchTasks = () => {
  tasksStore.fetchTasks();
};

fetchTasks();
</script>

<template>
  <LayoutModulePage title="Задачі">
    <template #header>
      <div class="flex items-center gap-[20px] md:gap-[25px] xl:gap-[30px]">
        <UiButtonPrimary>Додати задачу</UiButtonPrimary>
        <UiButtonOpacityDelete></UiButtonOpacityDelete>
      </div>
    </template>
    <template #content>
      <ModalCreateTask
        v-model="isModal"
        label="Додати задачу"
      ></ModalCreateTask>
      <!-- <ModalPrimaryWarning v-model="isModal"
        >Ви впевнені, що хочете видалити задачу?</ModalPrimaryWarning
      > -->
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
