<script setup lang="ts">
defineProps<{
  max: number;
  total: number;
  pageCount: number;
}>();
const emits = defineEmits(["setPage"]);

const setPage = (page: number) => {
  emits("setPage", page);
};
const page = ref(1);

watchDeep(page, () => {
  setPage(page.value);
});

setPage(page.value);
</script>

<template>
  <UPagination
    :ui="{
      wrapper: 'gap-[10px]',
      rounded: 'rounded-[50%]',
      base: ' text-[13px] bg-transparent xl:text-[15px]  !border-none ring-0  text-white !p-0 w-[22px] h-[22px] md:w-[24px] md:h-[24px] xl:w-[26px] xl:h-[26px] text-center justify-center hover:bg-primary-color duration-hover',
    }"
    :activeButton="{
      class: '!bg-primary-color',
    }"
    v-model="page"
    :page-count="pageCount"
    :total="total"
    :max="max"
  >
    <template #prev="{ onClick }">
      <UiButtonOpacity
        class="rotate-180 p-[7.5px] relative md:p-2.5 lg:p-[12.5px]"
        @click="onClick"
      >
        <SvgoArrowRight
          class="h-[5px] w-[18px] text-white md:h-[6px] md:w-[22px] lg:h-[8px] lg:w-[25px]"
        />
      </UiButtonOpacity>
    </template>

    <template #next="{ onClick }">
      <UiButtonOpacity
        class="p-[7.5px] relative md:p-2.5 lg:p-[12.5px]"
        @click="onClick"
      >
        <SvgoArrowRight
          class="h-[5px] w-[18px] md:h-[6px] text-white md:w-[22px] lg:h-[8px] lg:w-[25px]"
        />
      </UiButtonOpacity>
    </template>
  </UPagination>
</template>

<style scoped>
.pagination_item_active {
  @apply !text-primary-color;
}
</style>
