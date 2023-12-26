<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <textarea
    :name="name"
    class="input_primary_style resize-none rounded-[20px] py-[15px]"
  ></textarea>
</template>

<style scoped></style>
