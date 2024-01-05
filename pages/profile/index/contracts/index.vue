<script setup lang="ts">
const contractsStore = useContractsStore();
const isModalRemove = ref(false);
const deletionTasks = ref<string[]>([]);

const contracts = computed(() => contractsStore.contracts);
const totalPages = computed(() => contractsStore.totalPages);
const setPage = (page: number) => contractsStore.setPage(page);
const searchContracts = (keyWord: string) =>
  contractsStore.searchContracts(keyWord);

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const deleteRequest = () => [
  contractsStore.deleteContract(deletionTasks.value),
];

const fetchTasks = () => {
  contractsStore.fetchContracts();
};

fetchTasks();
</script>

<template>
  <LayoutModulePage title="Контракти">
    <template #header>
      <div class="flex items-center gap-[20px] md:gap-[25px] xl:gap-[30px]">
        <UiButtonPrimary to="/profile/contracts/new_contract"
          >Додати контракт</UiButtonPrimary
        >
        <UiButtonOpacityDelete
          :disabled="deletionTasks.length < 1"
          @click="switchModalRemove(true)"
        ></UiButtonOpacityDelete>
      </div>
    </template>
    <template #content>
      <CommonSearchOutline
        @search="searchContracts"
        class="w-fit"
      ></CommonSearchOutline>
      <ModalPrimaryWarning
        v-model="isModalRemove"
        @confirm="deleteRequest"
        @closeModal="switchModalRemove(false)"
        >Ви впевнені, що хочете видалити контракт?</ModalPrimaryWarning
      >
      <UiTable :totalPages="totalPages" @setPage="setPage">
        <template #headers>
          <UiTableCellHeader></UiTableCellHeader>
          <UiTableCellHeader>№ договору</UiTableCellHeader>
          <UiTableCellHeader>Категорія</UiTableCellHeader>
          <UiTableCellHeader>Дата договору</UiTableCellHeader>
          <UiTableCellHeader>Дата завершення</UiTableCellHeader>
          <UiTableCellHeader>Предмет</UiTableCellHeader>
          <UiTableCellHeader>Статус</UiTableCellHeader>
        </template>
        <template #items>
          <PagesContractsTableItem
            v-for="contract in contracts"
            :key="contract._id"
            :contract="contract"
            v-model:selectDeletion="deletionTasks"
            @deleteAction="switchModalRemove(true)"
          ></PagesContractsTableItem>
        </template>
      </UiTable>
    </template>
  </LayoutModulePage>
</template>

<style scoped></style>
