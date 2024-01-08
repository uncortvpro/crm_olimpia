<script setup lang="ts">
const reportsSalesAgentsStore = useReportsSalesAgentsStore();
const isModalRemove = ref(false);
const deletionReports = ref<string[]>([]);

const reports = computed(() => reportsSalesAgentsStore.reports);
const totalPages = computed(() => reportsSalesAgentsStore.totalPages);
const setPage = (page: number) => reportsSalesAgentsStore.setPage(page);
const searchReports = (keyWord: string) =>
  reportsSalesAgentsStore.searchReports(keyWord);

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const deleteRequest = () => [
  reportsSalesAgentsStore.deleteReports(deletionReports.value),
];

const fetchReports = () => {
  reportsSalesAgentsStore.fetchReports();
};

fetchReports();
</script>

<template>
  <LayoutModulePage title="Звіти торгових агентів">
    <template #header>
      <div class="flex items-center gap-[20px] md:gap-[25px] xl:gap-[30px]">
        <!-- <UiButtonPrimary to="/profile/tasks/new_task"
          >Додати задачу</UiButtonPrimary
        > -->
        <!-- <UiButtonOpacityDelete
          :disabled="deletionReports.length < 1"
          @click="switchModalRemove(true)"
        ></UiButtonOpacityDelete> -->
      </div>
    </template>
    <template #content>
      <CommonSearchOutline
        @search="searchReports"
        class="w-fit"
      ></CommonSearchOutline>
      <ModalPrimaryWarning
        v-model="isModalRemove"
        @confirm="deleteRequest"
        @closeModal="switchModalRemove(false)"
        >Ви впевнені, що хочете видалити задачу?</ModalPrimaryWarning
      >
      <UiTable :totalPages="totalPages" @setPage="setPage">
        <template #headers>
          <UiTableCellHeader>Торгова точка</UiTableCellHeader>
          <UiTableCellHeader>Назва товару</UiTableCellHeader>
          <UiTableCellHeader>Кількість товару</UiTableCellHeader>
          <UiTableCellHeader>Кількість акційного</UiTableCellHeader>
          <UiTableCellHeader>Фото</UiTableCellHeader>
        </template>
        <template #items>
          <PagesReportTableItem
            v-for="report in reports"
            :key="report._id"
            :report="report"
            v-model:selectDeletion="deletionReports"
            @deleteAction="switchModalRemove(true)"
          ></PagesReportTableItem>
        </template>
      </UiTable>
    </template>
  </LayoutModulePage>
</template>

<style scoped></style>
