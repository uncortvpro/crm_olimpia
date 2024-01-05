<script setup lang="ts">
const emits = defineEmits(["search"]);
const valueSearch = ref("");

const search = () => {
  emits("search", valueSearch.value);
};
</script>

<template>
  <form action="#" @submit.prevent="search">
    <div
      :class="
        cn(
          'border-[2px] relative w-full flex border-white items-center justify-between  rounded-[50px]'
        )
      "
    >
      <input
        v-model="valueSearch"
        type="text"
        :class="
          cn(
            'text-[11px] focus:border-none placeholder:text-white text-white focus:outline-none py-[8px] px-[16px] xl:py-[12px] xl:px-[24px] !pl-[65px] bg-transparent xl:text-[15px] w-full font-medium '
          )
        "
        placeholder="Пошук"
      />
      <button
        class="mr-[10px] left-[30px] top-0 bottom-0 m-auto absolute xl:mr-[12px]"
      >
        <SvgoSearch
          :class="
            cn('!w-[12px] !h-[12px] text-white xl:!w-[18px] xl:!h-[18px]')
          "
        ></SvgoSearch>
      </button>
    </div>
  </form>
</template>

<style scoped></style>
