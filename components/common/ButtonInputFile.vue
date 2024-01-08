<script setup lang="ts">
defineProps<{
  accept?: string;
}>();

const emits = defineEmits(["updateInput"]);

const updateInput = (value: any) => {
  emits("updateInput", value);
};
</script>

<template>
  <div
    class="relative overflow-hidden h-0 rounded-[3px] bg-dark pt-[120%] md:rounded-[5px] xl:rounded-[10px]"
  >
    <label class="absolute left-0 top-0 z-50 h-full w-full cursor-pointer">
      <UiInputFile
        :accept="accept"
        class="invisible h-full w-full"
        @updateInput="updateInput"
      />
    </label>

    <div
      class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"
    >
      <span
        class="relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-white after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-white md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
