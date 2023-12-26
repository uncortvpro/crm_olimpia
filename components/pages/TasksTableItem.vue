<script setup lang="ts">
const props = defineProps<{
  task: Task;
  selectDeletion: string[];
}>();
const selectDelete = ref(false);
const emits = defineEmits(["update:selectDeletion", "deleteAction"]);

const selectDeletion = () => {
  let newArray: string[] = [];
  if (!selectDelete.value) {
    newArray = props.selectDeletion.filter((el) => el !== props.task._id);
  }
  if (selectDelete.value) {
    newArray = [...props.selectDeletion, props.task._id];
  }
  emits("update:selectDeletion", newArray);
};

const deleteOne = () => {
  emits("update:selectDeletion", [props.task._id]);
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
      <span class="ml-[13px]"> {{ task?.headline }} </span>
    </template>
    <template #elements="{ active }">
      <UiTableCell class="hidden 3xl:table-cell" :vIf="active">
        <template #title></template>
        <template #value>
          <UiCheckbox v-model="selectDelete"></UiCheckbox>
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
          @click.stop="navigateTo(`/profile/tasks/edit_task/${task._id}`)"
          >Редагувати</UiButtonOutline
        >
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="deleteOne" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
