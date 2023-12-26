<script setup lang="ts">
const props = defineProps({
  pagination: {
    default: true,
    type: Boolean,
  },
  totalPages: {
    type: Number,
    default: 0,
    required: false,
  },
  noMobile: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const emits = defineEmits(["setPage"]);

const setPage = (page: number) => {
  emits("setPage", page);
};
</script>

<template>
  <div
    class="p-[20px] 2xl:p-[30px] mt-[29px] 2xl:mt-[35px] rounded-[10px] 2xl:rounded-[20px] bg_blur_dark"
  >
    <slot name="additional_elements"></slot>
    <table class="table-auto w-full">
      <thead>
        <tr
          :class="
            cn('hidden 3xl:table-row', {
              '!table-row': noMobile,
            })
          "
        >
          <slot name="headers"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="items"></slot>
      </tbody>
    </table>
    <div class="flex justify-center mt-[35px] xl:mt-[30px]">
      <UiPagination
        v-if="pagination"
        :max="5"
        :page-count="1"
        :total="totalPages"
        @setPage="setPage"
      />
    </div>
  </div>
</template>

<style scoped></style>
