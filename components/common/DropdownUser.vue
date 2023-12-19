<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <UiButtonOpacity
    @click="router.push('/profile')"
    class="flex lg:w items-center gap-[15px]"
  >
    <span
      class="overflow-hidden rounded-[50%] inline-block w-[20px] h-[20px] lg:w-[45px] lg:h-[45px]"
    >
      <img class="w-full h-full" src="@img/user.png" alt="" />
    </span>
  </UiButtonOpacity>
</template>

<style scoped></style>
