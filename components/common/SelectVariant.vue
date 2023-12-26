<script setup lang="ts">
const props = defineProps<{
  // typeSelect?: string;
  placeholder: string;
  typeVariant: VariantType;
  modelValue: string;
}>();

const value = ref("");
const addVariantOption = "+ Додати інший варіант";

const emits = defineEmits(["update:modelValue"]);

const updateValue = (value: string) => {
  emits("update:modelValue", value);
};

const onChangeSelect = (value: string) => {
  if (value === addVariantOption) {
    switchModal(true);
    return false;
  }

  updateValue(value);
};

const isAddVariant = ref(false);
const switchModal = (value: boolean) => {
  isAddVariant.value = value;
};

const options = ref<string[]>([]);

const fullOptions = computed(() => [...options.value, addVariantOption]);

const getOptions = () => {
  useAuthFetch(`${useApiUrl()}/get_statuses`, {
    body: {
      type: props.typeVariant,
    },
  }).then((res) => {
    const response = res.statuses as Status[];

    options.value = response.map((status) => status.status);
  });
};

getOptions();
</script>

<template>
  <div>
    <UiSelect
      v-model="value"
      :currentValue="value"
      :options="fullOptions"
      :placeholder="placeholder"
      @change="onChangeSelect"
    >
    </UiSelect>

    <CommonModalAddStatus
      v-model="isAddVariant"
      :type="props.typeVariant"
      @actionSuccess="
        () => {
          getOptions();
          switchModal(false);
        }
      "
    />
  </div>
</template>

<style scoped></style>
