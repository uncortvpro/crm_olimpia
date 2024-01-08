<script setup lang="ts">
const props = defineProps<{
  to: string;
  isDropdown?: boolean;
}>();
const route = useRoute();
const open = ref(false);

const onClickProfileItem = (e: Event) => {
  if (props.isDropdown) {
    e.preventDefault();
    open.value = !open.value;
  }
};
</script>

<template>
  <div class="flex flex-col relative pl-[40px] min-h-[26px]">
    <CommonMenuLink
      class="!normal-case flex items-center justify-between"
      @click="onClickProfileItem"
      :to="!isDropdown ? to : ''"
    >
      <span
        :class="
          cn('w-[21px] absolute top-0 left-0 bottom-0 m-auto lg:w-[21px]', {
            'text-primary-color': route.path === to,
          })
        "
      >
        <slot name="logo"></slot>
      </span>
      <span
        :class="
          cn('', {
            'text-primary-color': route.path === to,
          })
        "
      >
        <slot name="title"></slot>
      </span>
      <SvgoArrowTop
        v-if="isDropdown"
        :class="
          cn('text-transparent rotate-[180deg] stroke-white', {
            'rotate-0': open,
          })
        "
      ></SvgoArrowTop>
    </CommonMenuLink>
  </div>
  <div
    v-if="isDropdown"
    :class="
      cn('col-span-1 duration-200 h-0 overflow-hidden pt-0 lg:pl-[40px]', {
        '!pt-[12px] h-auto xl:!pt-[20px]': open,
      })
    "
  >
    <slot name="dropdown"></slot>
  </div>
</template>

<style scoped></style>
