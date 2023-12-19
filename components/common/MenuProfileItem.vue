<script setup lang="ts">
defineProps<{
  to: string;
}>();
const route = useRoute();
</script>

<template>
  <div class="flex items-center justify-between min-h-[26px]">
    <CommonMenuLink class="!normal-case flex items-center gap-[13px] lg:!text-[15px] xl:!text-[15px]" :to="to">
      <span class="w-[21px] lg:w-[21px]">
        <slot name="logo"></slot>
      </span>
      <span>
        <slot name="title"></slot>
      </span>
    </CommonMenuLink>
    <span v-if="route.path === to" class="w-[3px] h-[26px] bg-black rounded-[2px]"></span>
  </div>
</template>

<style scoped></style>
