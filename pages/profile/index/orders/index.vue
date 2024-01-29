<script setup lang="ts">
const reportsSalesAgentsStore = useOrdersStore();
const isModalRemove = ref(false);
const deletionOrders = ref<string[]>([]);

const orders = computed(() => reportsSalesAgentsStore.orders);
const totalPages = computed(() => reportsSalesAgentsStore.totalPages);
const setPage = (page: number) => reportsSalesAgentsStore.setPage(page);
const searchReports = (keyWord: string) =>
  reportsSalesAgentsStore.searchOrders(keyWord);

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const deleteRequest = () => [
  reportsSalesAgentsStore.deleteOrder(deletionOrders.value),
];

const fetchReports = () => {
  reportsSalesAgentsStore.fetchOrders();
};

fetchReports();
</script>

<template>
  <LayoutModulePage title="Звіти торгових агентів">
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
          <UiTableCellHeader></UiTableCellHeader>
          <UiTableCellHeader>Торговий агент</UiTableCellHeader>
          <UiTableCellHeader>Дистрибʼютор</UiTableCellHeader>
          <UiTableCellHeader>Торгова точка</UiTableCellHeader>
          <UiTableCellHeader>К-сть товару</UiTableCellHeader>
          <UiTableCellHeader>К-сть акційного</UiTableCellHeader>
          <UiTableCellHeader>Статус</UiTableCellHeader>
          <UiTableCellHeader>Фото</UiTableCellHeader>
        </template>
        <template #items>
          <PagesOrderTableItem
            v-for="order in orders"
            :key="order._id"
            :order="order"
            v-model:selectDeletion="deletionOrders"
            @deleteAction="switchModalRemove(true)"
          ></PagesOrderTableItem>
        </template>
      </UiTable>
    </template>
  </LayoutModulePage>
</template>

<style scoped></style>
