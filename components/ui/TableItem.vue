<script setup lang="ts">
const { BREAKPOINTS_3XL } = useVariables();

defineProps({
  isMobileClose: {
    default: true,
    type: Boolean,
    required: false,
  },
});
const activeItem = ref(false);
const { width, height } = useWindowSize();
const router = useRouter();

const active = computed(() => {
  if (width.value >= BREAKPOINTS_3XL) {
    return true;
  }
  if (activeItem.value) {
    return true;
  }
  return false;
});

const switchItem = (value: boolean) => {
  activeItem.value = value;
};
</script>

<template>
  <tr
    class="grid relative grid-cols-auto-3 sm:grid-cols-auto-3 3xl:table-row border-b 3xl:border-none py-[5px] pb-[15px] 3xl:pb-0 border-primary-gray"
  >
    <td
      v-if="$slots.header"
      @click="switchItem(!activeItem)"
      class="col-span-1 max-w-[200px] w-full text-white truncate padding_table_cell sm:col-span-2 3xl:hidden cursor-pointer font-medium -order-2"
    >
      <slot name="header"></slot>
    </td>
    <slot name="elements" :active="active"></slot>
    <td
      @click="switchItem(!activeItem)"
      class="relative 3xl:hidden padding_table_cell items-center justify-end flex cursor-pointer z-10 -order-1 col-span-2 sm:col-span-1"
      v-if="$slots.header || isMobileClose"
    >
      <div class="flex justify-end items-center gap-1">
        <UiButtonOpacity
          v-if="isMobileClose"
          @click.stop="switchItem(!activeItem)"
          class="3xl:hidden"
        >
          <SvgoArrowTop
            color="transparent"
            class="!w-[14px] !stroke-white rotate-180 duration-300 ml-[25px] !h-[7px]"
            :class="{ '!rotate-0': activeItem }"
          ></SvgoArrowTop>
        </UiButtonOpacity>
      </div>
    </td>
    <td class="col-span-3 pt-[15px] relative z-10 3xl:pt-0">
      <slot name="additional-buttons" />
    </td>
    <button
      v-if="!activeItem && isMobileClose"
      @click="switchItem(!activeItem)"
      class="3xl:hidden absolute w-full h-full top-0 left-0"
    ></button>
  </tr>
</template>

<style scoped></style>
