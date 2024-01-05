<script setup lang="ts">
const { width } = useWindowSize();
const { BREAKPOINTS_LG } = useVariables();
const props = defineProps<{
  to?: string;
}>();

const switchMenu: any = inject("switchMenu");

const handleClick = () => {
  if (!props.to) return false;
  switchMenu(false);
};
</script>

<template>
  <NuxtLink
    v-if="width < BREAKPOINTS_LG"
    @click="handleClick"
    class="font-semibold text-white hover:opacity-[60%] cursor-pointer text-[16px] duration-200 lg:text-[17px] xl:text-[20px] uppercase"
    :to="to"
    ><slot
  /></NuxtLink>
  <NuxtLink
    v-else
    class="font-semibold text-white hover:opacity-[60%] cursor-pointer text-[16px] duration-200 lg:text-[17px] xl:text-[20px] uppercase"
    :to="to"
    ><slot
  /></NuxtLink>
</template>

<style scoped></style>
