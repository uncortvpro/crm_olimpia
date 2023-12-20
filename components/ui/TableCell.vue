<script setup lang="ts">
const props = defineProps<{
  vIf: boolean;
}>();
</script>

<template>
  <Transition name="mobile-show">
    <td
      v-if="vIf"
      class="grid padding_table_cell grid-cols-2 3xl:table-cell 3xl: col-span-2"
    >
      <UiTableText class="3xl:hidden"><slot name="title" /></UiTableText>
      <UiTableText><slot name="value" /></UiTableText>
    </td>
  </Transition>
</template>

<style scoped>
.mobile-show-enter-active,
.mobile-show-leave-active {
  transition: all 0.2s;
}
.mobile-show-enter-from,
.mobile-show-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
