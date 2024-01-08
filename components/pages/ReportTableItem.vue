<script setup lang="ts">
const props = defineProps<{
  report: ReportSalesAgents;
  selectDeletion: string[];
}>();
const selectDelete = ref(false);
const emits = defineEmits(["update:selectDeletion", "deleteAction"]);

const showPhotos = computed(() => props.report.photo.slice(0, 4));

const selectDeletion = () => {
  let newArray: string[] = [];
  if (!selectDelete.value) {
    newArray = props.selectDeletion.filter((el) => el !== props.report._id);
  }
  if (selectDelete.value) {
    newArray = [...props.selectDeletion, props.report._id];
  }
  emits("update:selectDeletion", newArray);
};

const deleteOne = () => {
  emits("update:selectDeletion", [props.report._id]);
  emits("deleteAction");
};

watch(selectDelete, () => {
  selectDeletion();
});
</script>

<template>
  <UiTableItem>
    <template #header>
      <span class="ml-[13px]"> {{ report?.product_name }} </span>
    </template>
    <template #elements="{ active }">
      <UiTableCell :vIf="active">
        <template #title>Торгова точка</template>
        <template #value>{{ report?.shop_name }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Назва товару</template>
        <template #value>{{ report?.product_name }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Кількість товару</template>
        <template #value>{{ report?.product_amount }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Кількість акційного</template>
        <template #value>{{ report?.sale_amount }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Фото</template>
        <template #value>
          <div class="flex gap-[7px]" v-if="report.photo">
            <img
              v-for="photo in showPhotos"
              class="rounded-[5px] w-[22px] h-[28px] object-cover"
              :src="useBase64(photo)"
              alt=""
            />
          </div>
        </template>
      </UiTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center 3xl:justify-end gap-[15px] md:gap-[25px]">
        <UiButtonOutline
          class="!px-[20px] !text-[11px] md:!text-[12px] xl:!text-[14px] !py-[8px]"
          @click.stop="
            navigateTo(
              `/profile/reports_sales_agents/edit_report/${report._id}`
            )
          "
          >Редагувати</UiButtonOutline
        >
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="deleteOne" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
