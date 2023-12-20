<script setup lang="ts">
defineProps<{
  ui?: object;
}>();

const emits = defineEmits(["closeModal", "confirm"]);

const closeModal = () => {
  emits("closeModal");
};

const confirm = () => {
  emits("confirm");
};
</script>

<template>
  <UiModal :ui="{ ...ui, width: '!max-w-[414px]' }">
    <div class="flex flex-col items-center">
      <div
        class="border-primary-color border w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-primary-color text-[15px] flex items-center justify-center rounded-[50%]"
      >
        <span>!</span>
      </div>
      <p
        class="font-medium mt-[15px] text-white md:mt-[15px] text-center text-[15px] md:text-[20px]"
      >
        <slot />
      </p>
      <div class="flex self-stretch gap-[20px] justify-center mt-[20px]">
        <UiButtonOutline
          @click="confirm"
          class="border-gray-1 w-full !px-0 max-w-[115px] !border-white hover:!border-primary-color text-gray-1"
          >Так</UiButtonOutline
        >
        <UiButtonPrimary
          @click="closeModal"
          class="bg-black w-full max-w-[115px] !px-0 text-white hover:bg-transparent hover:!opacity-100"
          >Ні
        </UiButtonPrimary>
      </div>
    </div>
  </UiModal>
</template>

<style scoped></style>
