<script setup lang="ts">
defineProps<{
  isActive: boolean | undefined;
}>();
</script>
<template>
  <div
    class="items-center hidden relative z-[-1] lg:z-0 justify-between w-full lg:flex lg:w-auto lg:order-1"
    :class="{ '!block': isActive }"
  >
    <Transition name="custom-flip">
      <div
        v-if="isActive"
        class="fixed w-full h-full lg:hidden bg-dark-transparent z-10 left-0"
      ></div>
    </Transition>

    <Transition name="mobile-show">
      <div v-if="isActive" class="lg:hidden fixed z-[40] top-0 left-0 w-full">
        <slot name="mobile"></slot>
      </div>
    </Transition>
    <div class="hidden lg:block">
      <slot name="desktop"></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-flip-enter-active,
.custom-flip-leave-active {
  transition: all 0.4s;
}
.custom-flip-enter-from,
.custom-flip-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.mobile-show-enter-active,
.mobile-show-leave-active {
  transition: all 0.4s;
}
.mobile-show-enter-from,
.mobile-show-leave-to {
  top: -110%;
}
</style>
