<script setup lang="ts"></script>

<template>
  <UiTableItem>
    <template #header>
      <span>Lorem ipsum dolor sit amet </span>
    </template>
    <template #elements="{ active }">
      <UiTableCell :vIf="active">
        <template #title></template>
        <template #value>
          <UiCheckbox></UiCheckbox>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Клієнт</template>
        <template #value>Клієнт</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Задача</template>
        <template #value>Задача</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Відповідальний</template>
        <template #value>Відповідальний</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput color="#FF6928">qdqwq</CommonStatusOutput>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Термін</template>
        <template #value>Термін</template>
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
