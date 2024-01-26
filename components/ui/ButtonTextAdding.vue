<script setup lang="ts"></script>

<template>
  <UiButtonOpacity
    class="text-[12px] md:text-[14px] xl:text-[16px] flex items-center text-white gap-[5px]"
  >
    <SvgoCross class="!w-[10px] !h-[10px] mt-[2px] stroke-white"></SvgoCross>
    <span><slot /></span>
  </UiButtonOpacity>
</template>

<style scoped></style>
