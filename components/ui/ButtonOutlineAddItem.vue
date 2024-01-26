<script setup lang="ts"></script>

<template>
  <UiButtonOutline class="flex items-center group justify-center gap-[10px]">
    <SvgoCross
      class="!w-[10px] !h-[10px] mt-[2px] stroke-white group-hover:stroke-black"
    ></SvgoCross>
    <span
      class="text-white group-hover:text-black font-medium text-[11px] xl:text-[15px]"
      ><slot
    /></span>
  </UiButtonOutline>
</template>

<style scoped></style>
