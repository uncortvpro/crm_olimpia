<script setup lang="ts">
const props = defineProps<{
  required?: boolean;
  name?: string;
  ui?: any;
  modelValue: boolean;
}>();
const value = ref(false);

const emits = defineEmits(["update:modelValue"]);

const updateValue = (value: boolean) => {
  emits("update:modelValue", value);
};

watch(value, () => {
  updateValue(value.value);
});

const getStartValue = () => {
  value.value = props.modelValue;
};

watchDeep(
  () => props.modelValue,
  () => {
    getStartValue();
  }
);

getStartValue();
</script>

<template>
  <div
    :class="
      cn(
        'w-[13px] block h-[13px] md:w-[14px] md:h-[14px] border-white border rounded-[2px] relative',
        {
          'bg-primary-color border-primary-color': value,
        }
      )
    "
  >
    <SvgoCheckMark
      v-if="value"
      color="transparent"
      class="stroke-black absolute !w-[90%] !h-[90%] top-0 left-0 right-0 bottom-0 m-auto"
    ></SvgoCheckMark>
    <input
      v-model="value"
      type="checkbox"
      class="w-full h-full relative z-10 opacity-0 inline-block"
      :name="name"
    />
  </div>
</template>

<style scoped></style>
