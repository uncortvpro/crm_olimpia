<script setup lang="ts">
defineProps<{
  task: Task;
}>();
</script>

<template>
  <UiTableItem>
    <template #header>
      <UiCheckbox @click.stop="" class="inline-block align-middle"></UiCheckbox>
      <span class="ml-[13px]"> {{ task?.headline }} </span>
    </template>
    <template #elements="{ active }">
      <UiTableCell class="hidden 3xl:table-cell" :vIf="active">
        <template #title></template>
        <template #value>
          <UiCheckbox></UiCheckbox>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Дата</template>
        <template #value>{{ useDate(task?.date) }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Задача</template>
        <template #value>{{ task?.headline }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Відповідальний</template>
        <template #value>{{ task?.responsible }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="task?.status?.colour">{{
            task?.status?.status
          }}</CommonStatusOutput>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Термін</template>
        <template #value>{{ useDate(task.deadline) }}</template>
      </UiTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center 3xl:justify-end gap-[15px] md:gap-[25px]">
        <UiButtonOutline
          class="!px-[20px] !text-[11px] md:!text-[12px] xl:!text-[14px] !py-[8px]"
          @click.stop=""
          >Редагувати</UiButtonOutline
        >
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
