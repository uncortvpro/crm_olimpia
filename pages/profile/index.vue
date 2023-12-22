<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="lg:grid relative grid-cols-12 items-start 3xl:grid-cols-8">
    <div
      class="hidden col-span-3 bg_blur_dark 2xl:col-span-2 3xl:col-span-1 lg:block sticky top-0 rounded-r-[40px] overflow-x-scroll scroll_bar px-[30px] pb-[155px] pt-[50px] 4xl:pt-[44px] bg-beige"
    >
      <CommonMenuProfileList
        class="flex flex-col gap-[32px]"
      ></CommonMenuProfileList>
    </div>
    <div
      class="lg:px-[30px] flex flex-col col-span-9 2xl:col-span-10 3xl:col-span-7 lg:py-[30px] 4xl:px-[44px] 4xl:py-[44px]"
    >
      <div class="container flex flex-col flex-1 relative lg:container-reset">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
