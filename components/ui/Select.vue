<script setup lang="ts">
defineProps<{
  currentValue: any;
  uiMenu?: any;
  placeholder?: string;
}>();
</script>

<template>
  <USelectMenu
    v-slot="{ open }"
    class="input_primary_style w-full !p-0"
    :uiMenu="{
      trigger: 'inline-flex w-full',
      background: '',
      container:
        '!top-[-1px] rounded-[15px] bg-primary-gray !right-0 !m-auto md:rounded-[25px] shadow-lg w-[100%] overflow-hidden !left-[0px] !transform-none pt-[5px] md:pt-[10px] !pt-[33px] md:!pt-[47px]',
      rounded: '',
      padding: 'p-0',
      base: '!ring-0',
      shadow: '',
      option: {
        base: 'input_primary_text',
        padding: 'px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]',
        active: 'opacity-hover bg-dark rounded-none',
        selectedIcon: {
          base: 'hidden',
        },
      },
      ...uiMenu,
    }"
  >
    <UiButtonTextOpeningArrow
      style="text-transform: inherit"
      :class="
        cn(
          'input_primary_height w-full input_primary_text hover:!opacity-100 !duration-0 items-center flex relative z-40 w-full justify-between !px-[9px] input_primary_text normal-case md:!px-[14px] xl:!px-[19px]',
          {
            '!text-placeholder': !currentValue,
            'border-placeholder border-b-[1px]': open,
            '!justify-end': !currentValue && !placeholder,
          }
        )
      "
      :label="currentValue || placeholder"
      :open="open"
    />
  </USelectMenu>
</template>

<style scoped></style>
