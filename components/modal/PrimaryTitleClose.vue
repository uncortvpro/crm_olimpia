<script setup lang="ts">
defineProps<{
  isOpen?: boolean;
  ui?: any;
  label: string;
}>();

const emits = defineEmits(["closeModal"]);

const closeModal = () => {
  emits("closeModal");
};
</script>

<template>
  <ModalPrimary
    :ui="{
      base: 'overflow-visible p-[20px] md:p-[30px]',
      ...ui,
    }"
  >
    <UCard
      :ui="{
        background: 'bg-transparent',
        base: 'overflow-visible',
        ring: 'ring-0',
        shadow: 'shadow-none',
        divide: 'divide-none',
        body: { base: 'hidden' },
        header: {
          padding: '!p-0',
        },
      }"
    >
      <template #header>
        <div class="flex items-center justify-center">
          <UiTitlePrimarySmall class="text-center">{{
            label
          }}</UiTitlePrimarySmall>
          <UiButtonOpacityClose
            class="absolute focus:outline-none right-[20px] top-[20px]"
            @click="closeModal"
          ></UiButtonOpacityClose>
        </div>
      </template>
    </UCard>
    <slot />
  </ModalPrimary>
</template>

<style scoped></style>
