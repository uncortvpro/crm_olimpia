<script setup lang="ts">
const { width } = useWindowSize();
defineProps<{
  to: string;
}>();

const switchMenu: any = inject("switchMenu");
</script>

<template>
  <NuxtLink
    v-if="width < 992"
    @click="switchMenu(false)"
    class="font-medium text-white hover:opacity-[60%] cursor-pointer text-[11px] duration-200 md:text-[15px] lg:text-[17px] xl:text-[20px] uppercase"
    :to="to"
    ><slot
  /></NuxtLink>
  <NuxtLink
    v-else
    class="font-medium text-white hover:opacity-[60%] cursor-pointer text-[11px] duration-200 md:text-[15px] lg:text-[17px] xl:text-[20px] uppercase"
    :to="to"
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
