<script setup lang="ts">
const value = ref("");
const valueDate = ref("");

watchDeep(value, () => {
  console.log(value.value);
});    
</script>

<template>
  <LayoutModulePage title="Додати задачу">
    <template #content>
      <div
        class="grid max-w-[1000px] pt-[10px] md:pt-[30px] gap-[10px] sm:grid-cols-2 xl:gap-[20px]"
      >
        <UiLabel label="Задача:" class="col-span-2 md:col-span-1">
          <UiInputPrimary placeholder="Введіть задачу"></UiInputPrimary>
        </UiLabel>
        <UiLabel
          class="md:row-span-2 col-span-2 md:col-span-1"
          label="Опис задачі:"
        >
          <UiTextarea
            class="min-h-[130px] xl:min-h-[147px]"
            placeholder="Опишіть задачу"
          ></UiTextarea>
        </UiLabel>
        <UiLabel
          for=""
          class="col-span-2 md:col-span-1"
          label="Відповідальний:"
        >
          <PagesCreateTaskSelectResponsible
            placeholder="Введіть імʼя"
          ></PagesCreateTaskSelectResponsible>
        </UiLabel>
        <UiLabel class="col-span-2 sm:col-span-1" label="Термін:">
          <UiDatePicker
            v-model="valueDate"
            placeholder="Визначте термін"
          ></UiDatePicker>
        </UiLabel>
        <UiLabel for="" class="col-span-2 sm:col-span-1" label="Статус:">
          <CommonSelectVariant
            v-model="value"
            :valueSelect="value"
            :typeVariant="'tasks'"
            placeholder="Оберіть статус задачі"
          ></CommonSelectVariant>
        </UiLabel>

        <div
          class="md:col-span-2 text-center mt-[10px] md:mt-[20px] xl:mt-[30px]"
        >
          <UiButtonPrimary>Додати задачу</UiButtonPrimary>
        </div>
      </div>
    </template>
  </LayoutModulePage>
</template>
<style scoped></style>
