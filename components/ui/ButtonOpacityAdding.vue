<script setup lang="ts"></script>

<template>
  <UiButtonOpacity class="flex items-center text-white gap-[10px] text-[7px] md:text-[10px] xl:text-[14px]">
    <span>
      <SvgoCross color="transparent" class="stroke-white" />
    </span>
    <span>
      <slot />
    </span>
  </UiButtonOpacity>
</template>

<style scoped></style>
