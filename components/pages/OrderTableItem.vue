<script setup lang="ts">
const props = defineProps<{
  order: Order;
  selectDeletion: string[];
}>();

const selectDelete = ref(false);
const emits = defineEmits(["update:selectDeletion", "deleteAction"]);

const showPhotos = computed(() => props.order.photos.slice(0, 4));

const selectDeletion = () => {
  let newArray: string[] = [];
  if (!selectDelete.value) {
    newArray = props.selectDeletion.filter((el) => el !== props.order._id);
  }
  if (selectDelete.value) {
    newArray = [...props.selectDeletion, props.order._id];
  }
  emits("update:selectDeletion", newArray);
};

const deleteOne = () => {
  emits("update:selectDeletion", [props.order._id]);
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
      <span class="ml-[13px]"> {{ order?.sales_agent }} </span>
    </template>
    <template #elements="{ active }">
      <UiTableCell class="hidden 3xl:table-cell" :vIf="active">
        <template #title></template>
        <template #value>
          <UiCheckbox v-model="selectDelete"></UiCheckbox>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Торговий агент</template>
        <template #value>{{ order?.sales_agent }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Дистрибʼютор</template>
        <template #value>{{ order?.distributor }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Торгова точка</template>
        <template #value>{{ order?.shop }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>К-сть товару</template>
        <template #value>{{ order?.total_amount }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>К-сть акційного</template>
        <template #value>{{ order?.total_amount_discount }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Статус</template>
        <template #value>
          <CommonStatusOutput :color="order?.status?.colour">{{
            order?.status?.name
          }}</CommonStatusOutput>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Фото</template>
        <template #value>
          <div class="flex gap-[7px]" v-if="order.photos">
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
          @click.stop="navigateTo(`/profile/orders/edit_order/${order._id}`)"
          >Редагувати</UiButtonOutline
        >
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="deleteOne" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
