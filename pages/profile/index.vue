<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="relative items-start flex">
    <div
      class="hidden col-span-3 bg_blur_dark basis-[353px] xl:col-span-3 4xl:col-span-2 lg:block sticky top-0 rounded-r-[40px] overflow-x-hidden scroll_bar px-[30px] pb-[155px] pt-[50px] 4xl:pt-[44px] bg-beige"
    >
      <CommonMenuProfileList
        class="flex flex-col gap-[32px]"
      ></CommonMenuProfileList>
    </div>
    <div
      class="lg:px-[30px] basis-full lg:basis-full self-stretch flex flex-col flex-1 col-span-9 xl:col-span-9 4xl:col-span-6 lg:py-[30px] 4xl:px-[44px] 4xl:py-[44px]"
    >
      <div class="container flex flex-col flex-1 relative lg:container-reset">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
