<script setup lang="ts">
const clientStore = useClientStore();
const isModalRemove = ref(false);
const deletionClient = ref<string[]>([]);

const clients = computed(() => clientStore.clients);
const totalPages = computed(() => clientStore.totalPages);
const setPage = (page: number) => clientStore.setPage(page);
const search = (keyWord: string) => clientStore.search(keyWord);

const switchModalRemove = (value: boolean) => {
  isModalRemove.value = value;
};

const deleteRequest = () => [clientStore.deleteClient(deletionClient.value)];

const fetchClients = () => {
  clientStore.fetchClients();
};

fetchClients();
</script>

<template>
  <LayoutModulePage title="Клієнти">
    <template #header>
      <div class="flex items-center gap-[20px] md:gap-[25px] xl:gap-[30px]">
        <UiButtonPrimary to="/profile/clients/new_client"
          >Додати клієнта</UiButtonPrimary
        >
        <UiButtonOpacityDelete
          :disabled="deletionClient.length < 1"
          @click="switchModalRemove(true)"
        ></UiButtonOpacityDelete>
      </div>
    </template>
    <template #content>
      <CommonSearchOutline @search="search" class="w-fit"></CommonSearchOutline>
      <ModalPrimaryWarning
        v-model="isModalRemove"
        @confirm="deleteRequest"
        @closeModal="switchModalRemove(false)"
        >Ви впевнені, що хочете видалити контракт?</ModalPrimaryWarning
      >
      <UiTable :totalPages="totalPages" @setPage="setPage">
        <template #headers>
          <UiTableCellHeader></UiTableCellHeader>
          <UiTableCellHeader>Назва</UiTableCellHeader>
          <UiTableCellHeader>Реквізити</UiTableCellHeader>
          <UiTableCellHeader>Адреса</UiTableCellHeader>
          <UiTableCellHeader>Супервайзери</UiTableCellHeader>
          <UiTableCellHeader>Торгові точки</UiTableCellHeader>
          <UiTableCellHeader>Договір</UiTableCellHeader>
        </template>
        <template #items>
          <PagesClientTableItem
            v-for="client in clients"
            :key="client._id"
            :client="client"
            v-model:selectDeletion="deletionClient"
            @deleteAction="switchModalRemove(true)"
          ></PagesClientTableItem>
        </template>
      </UiTable>
    </template>
  </LayoutModulePage>
</template>

<style scoped></style>
