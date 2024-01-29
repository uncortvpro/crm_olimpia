<script setup lang="ts">
const props = defineProps<{
  products: Product[];
}>();

const emits = defineEmits(["update:products"]);

const updateModelValue = (payload: Product[]) => {
  emits("update:products", payload);
};

const addSupervisors = () => {
  const newSupervisors: Product[] = [
    ...props.products,
    {
      name: "",
      amount: "",
      price: "",
      discount: "",
    },
  ];

  updateModelValue(newSupervisors);
};

const deleteSupervisor = (index: number) => {
  const newSupervisors: Product[] = props.products.filter(
    (el, ind) => ind !== index
  );

  updateModelValue(newSupervisors);
};
</script>

<template>
  <template v-for="(product, index) in products" :key="index">
    <UiLabel label="Назва товару:" class="xl:max-w-[465px]">
      <div class="flex flex-row items-center gap-[10px]">
        <UiInputPrimary
          v-model="product.name"
          class="flex-1"
          placeholder="Введіть назву товару"
        ></UiInputPrimary>
        <UiButtonOpacity
          @click="deleteSupervisor(index)"
          class="bg-primary-color w-[25px] h-[25px] md:w-[32px] md:h-[32px] xl:w-[36px] xl:h-[36px] flex justify-center items-center rounded-[50%]"
        >
          <SvgoDelete class="!w-[60%] text-[#3B3B3B] !h-[50%]"></SvgoDelete>
        </UiButtonOpacity>
      </div>
    </UiLabel>
    <UiLabel label="Кількість:" class="xl:max-w-[465px]">
      <UiInputPrimary
        v-model="product.amount"
        placeholder="Введіть кількість товару"
      ></UiInputPrimary>
    </UiLabel>
    <div
      :class="
        cn(
          ' xl:max-w-[465px] border-[#727272] pb-[15px] md:pb-[20px] gap-[15px] flex items-center',
          {
            'border-b': products.length > 1,
          }
        )
      "
    >
      <UiLabel label="Ціна:" class="flex-1">
        <UiInputPrimary
          v-model="product.price"
          class="w-full"
          placeholder="Введіть ціну"
        ></UiInputPrimary>
      </UiLabel>
      <UiLabel label="Акційна ціна:" class="flex-1">
        <UiInputPrimary
          v-model="product.discount"
          class="w-full"
          placeholder="Введіть акційну ціну"
        ></UiInputPrimary>
      </UiLabel>
    </div>
  </template>
  <div class="xl:max-w-[465px] flex flex-col">
    <UiButtonTextAdding @click="addSupervisors"
      >Додати товар</UiButtonTextAdding
    >
  </div>
</template>

<style scoped></style>
