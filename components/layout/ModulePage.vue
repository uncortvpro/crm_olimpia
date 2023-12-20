<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="mb-[15px] mt-[15px] md:mt-[20px] lg:mt-[0px] xl:mb-[25px]">
    <div
      class="flex items-center justify-between mb-[20px] md:mb-[30px] xl:mb-[35px]"
    >
      <UiTitlePrimarySmall>{{ title }}</UiTitlePrimarySmall>
      <slot name="header" />
    </div>
    <slot name="content" />
  </div>
</template>

<style scoped></style>
