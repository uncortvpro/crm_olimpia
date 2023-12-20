<script setup lang="ts">
defineProps<{
  to: string;
}>();
const route = useRoute();
</script>

<template>
  <div class="flex items-center justify-between min-h-[26px]">
    <CommonMenuLink
      class="!normal-case flex items-center gap-[13px] lg:!text-[15px] xl:!text-[15px]"
      :to="to"
    >
      <span
        :class="
          cn('w-[21px] lg:w-[21px]', {
            'text-primary-color': route.path === to,
          })
        "
      >
        <slot name="logo"></slot>
      </span>
      <span
        :class="
          cn('', {
            'text-primary-color': route.path === to,
          })
        "
      >
        <slot name="title"></slot>
      </span>
    </CommonMenuLink>
  </div>
</template>

<style scoped></style>
