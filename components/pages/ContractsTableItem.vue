<script setup lang="ts">
const props = defineProps<{
  contract: Contract;
  selectDeletion: string[];
}>();
const selectDelete = ref(false);
const emits = defineEmits(["update:selectDeletion", "deleteAction"]);

const selectDeletion = () => {
  let newArray: string[] = [];
  if (!selectDelete.value) {
    newArray = props.selectDeletion.filter((el) => el !== props.contract._id);
  }
  if (selectDelete.value) {
    newArray = [...props.selectDeletion, props.contract._id];
  }
  emits("update:selectDeletion", newArray);
};

const deleteOne = () => {
  emits("update:selectDeletion", [props.contract._id]);
  emits("deleteAction");
};

watch(selectDelete, () => {
  selectDeletion();
});
</script>

<template>
  <UiTableItem>
    <template #header>
      <UiCheckbox
        v-model="selectDelete"
        @click.stop=""
        class="inline-block align-middle"
      ></UiCheckbox>
      <span class="ml-[13px]"> {{ contract?.number }} </span>
    </template>
    <template #elements="{ active }">
      <UiTableCell class="hidden 3xl:table-cell" :vIf="active">
        <template #title></template>
        <template #value>
          <UiCheckbox v-model="selectDelete"></UiCheckbox>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>№ договору</template>
        <template #value>{{ contract?.number }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Контрагент</template>
        <template #value>{{ contract?.counterpartie }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Дата договору</template>
        <template #value>{{ useDate(contract?.date) }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Дата завершення</template>
        <template #value>{{ useDate(contract?.deadline) }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Предмет</template>
        <template #value>{{ contract?.subject }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="contract?.status?.colour">{{
            contract?.status?.status
          }}</CommonStatusOutput>
        </template>
      </UiTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center 3xl:justify-end gap-[15px] md:gap-[25px]">
        <UiButtonOutline
          class="!px-[20px] !text-[11px] md:!text-[12px] xl:!text-[14px] !py-[8px]"
          @click.stop="navigateTo(`/profile/tasks/edit_task/${contract._id}`)"
          >Редагувати</UiButtonOutline
        >
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="deleteOne" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
