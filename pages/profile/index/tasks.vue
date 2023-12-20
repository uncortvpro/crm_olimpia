<script setup lang="ts">
const isModal = ref(true);
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
      <ModalPrimaryTitleClose
        v-model="isModal"
        label="Додати задачу"
      ></ModalPrimaryTitleClose>
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
          <PagesTasksTableItem v-for="item in 10"></PagesTasksTableItem>
        </template>
      </UiTable>
    </template>
  </LayoutModulePage>
</template>

<style scoped></style>
