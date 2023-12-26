<script setup lang="ts">
const props = defineProps<{
  name?: string;
  hover?: boolean;
  output?: string;
}>();

const getBackground = computed(() => {
  if (!props.name) return false;
  const firstLetter: string = props.name.charAt(0).toUpperCase();

  const colorMap: Record<string, string> = {
    А: "#FF5733",
    Б: "#33FF57",
    В: "#5733FF",
    Г: "#FF3357",
    Д: "#57FF33",
    Е: "#3357FF",
    Є: "#FF5733",
    Ж: "#33FF57",
    З: "#5733FF",
    И: "#FF3357",
    І: "#57FF33",
    Ї: "#3357FF",
    Й: "#FF5733",
    К: "#33FF57",
    Л: "#5733FF",
    М: "#FF3357",
    Н: "#57FF33",
    О: "#3357FF",
    П: "#FF5733",
    Р: "#33FF57",
    С: "#5733FF",
    Т: "#FF3357",
    У: "#57FF33",
    Ф: "#3357FF",
    Х: "#FF5733",
    Ц: "#33FF57",
    Ч: "#5733FF",
    Ш: "#FF3357",
    Щ: "#57FF33",
    Ь: "#3357FF",
    Ю: "#FF5733",
    Я: "#33FF57",
  };

  return colorMap[firstLetter] || "#CCCCCC";
});
</script>

<template>
  <button
    type="button"
    :style="`background: ${getBackground}`"
    :class="
      cn(
        'w-[20px] h-[20px] overflow-hidden relative md:w-[29px] group md:h-[29px] rounded-[50%] flex justify-center items-center text-white text-[10px] md:text-[14px] font-semibold uppercase',
        { 'hover:!bg-transparent': hover }
      )
    "
  >
    <span v-if="name && !output">{{ name[0] }}</span>
    <span v-if="output" class="text-black font-normal"> {{ output }} </span>
    <slot name="icon"></slot>
    <span
      v-if="hover"
      :class="
        cn(
          'absolute top-0 left-0 bg-beige w-full z-10 duration-hover group-hover:hover:opacity-100  opacity-0 h-full flex items-center justify-center'
        )
      "
    >
      <SvgoDelete class="text-beige-2 !w-[9px] !h-[10px]"></SvgoDelete>
    </span>
  </button>
</template>

<style scoped></style>
