<script setup lang="ts">
const { BREAKPOINTS_LG } = useVariables();
const { width } = useWindowSize();

const route = useRoute();

defineProps<{
  items: {
    title: string;
    link: string;
  }[];
}>();

const switchMenu: any = inject("switchMenu");

const closeMenu = () => {
  if (width.value >= BREAKPOINTS_LG) return false;
  switchMenu(false);
};
</script>

<template>
  <ul class="py-2 space-y-2 flex flex-col gap-[10px]">
    <li v-for="item in items">
      <UiButtonOpacity
        @click="closeMenu"
        :to="item.link"
        :class="
          cn(
            'flex items-center w-full text-white text-[14px] md:text-[15px] xl:text-[17px] font-medium',
            {
              '!text-primary-color': route.path === item.link,
            }
          )
        "
        >{{ item.title }}</UiButtonOpacity
      >
    </li>
  </ul>
</template>

<style scoped></style>
