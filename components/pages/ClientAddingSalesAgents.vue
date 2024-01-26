<script setup lang="ts">
const props = defineProps<{
  salesAgents: Supervisor["sales_agents"];
}>();

const emits = defineEmits(["update:salesAgents"]);

const updateModelValue = (payload: Supervisor["sales_agents"]) => {
  emits("update:salesAgents", payload);
};

const addSupervisors = () => {
  const newSupervisors: Supervisor["sales_agents"] = [
    ...props.salesAgents,
    {
      name: "",
      addresses: "",
    },
  ];

  updateModelValue(newSupervisors);
};

const deleteSupervisor = (index: number) => {
  const newSupervisors: Supervisor["sales_agents"] = props.salesAgents.filter(
    (el, ind) => ind !== index
  );

  updateModelValue(newSupervisors);
};
</script>

<template>
  <template v-for="(salesAgent, index) in salesAgents" :key="index">
    <UiLabel label="Назва торгової точки:" class="xl:max-w-[465px]">
      <UiInputPrimaryDelete
        v-model="salesAgent.name"
        placeholder="Введіть назву торгової точки"
        @deleteAction="deleteSupervisor(index)"
      ></UiInputPrimaryDelete>
    </UiLabel>
    <UiLabel
      label="Адреса торгової точки:"
      :class="
        cn(' border-[#727272] pb-[15px] md:pb-[20px] xl:max-w-[465px]', {
          'border-b': salesAgents.length > 1,
        })
      "
    >
      <div class="flex flex-col gap-[10px]">
        <UiInputPrimary
          v-model="salesAgent.addresses"
          class="w-full xl:flex-grow xl:flex-shrink-0"
          placeholder="Введіть адресу торгової точки"
        ></UiInputPrimary>
      </div>
    </UiLabel>
  </template>
  <UiButtonTextAdding @click="addSupervisors"
    >Додати торгову точку</UiButtonTextAdding
  >
</template>

<style scoped></style>
