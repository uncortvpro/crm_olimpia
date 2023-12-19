<script setup lang="ts">
defineProps<{
  countNotification?: number;
}>();
</script>

<template>
  <UiButtonOpacity class="relative w-[20px] h-[20px] lg:w-[32px] lg:h-[32px]">
    <div
      v-if="countNotification"
      class="absolute right-0 top-0 rounded-[50%] bg-black flex justify-center items-center w-[9px] h-[9px] lg:w-[14px] lg:h-[14px]"
    >
      <span class="text-[4px] text-white font-medium lg:text-[8px]">{{
        countNotification
      }}</span>
    </div>
    <SvgoNotifications
      class="!w-full !h-full text-white "
    ></SvgoNotifications>
  </UiButtonOpacity>
</template>

<style scoped></style>
