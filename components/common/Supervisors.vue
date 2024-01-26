<script setup lang="ts">
const props = defineProps<{
  supervisors: Supervisor[];
}>();

const emits = defineEmits(["update:supervisors"]);

const updateModelValue = (payload: Supervisor[]) => {
  emits("update:supervisors", payload);
};

const addSupervisors = () => {
  const newSupervisors: Supervisor[] = [
    ...props.supervisors,
    {
      name: "",
      sales_agents: [],
    },
  ];

  updateModelValue(newSupervisors);
};

const deleteSupervisor = (index: number) => {
  const newSupervisors: Supervisor[] = props.supervisors.filter(
    (el, ind) => ind !== index
  );

  updateModelValue(newSupervisors);
};
</script>

<template>
  <template v-for="(supervisor, index) in supervisors" :key="index">
    <h5
      class="text-[10px] md:text-[13px] text-primary-color font-medium xl:text-[16px]"
    >
      Супервайзер {{ index + 1 }}
    </h5>
    <UiLabel label="Назва супервайзера:" class="xl:max-w-[465px]">
      <div class="flex flex-row items-center gap-[10px]">
        <UiInputPrimary
          v-model="supervisor.name"
          class="flex-1"
          placeholder="Введіть назву супервайзера"
        ></UiInputPrimary>
        <UiButtonOpacity
          @click="deleteSupervisor(index)"
          class="bg-primary-color w-[25px] h-[25px] md:w-[32px] md:h-[32px] xl:w-[36px] xl:h-[36px] flex justify-center items-center rounded-[50%]"
        >
          <SvgoDelete class="!w-[60%] text-[#3B3B3B] !h-[50%]"></SvgoDelete>
        </UiButtonOpacity>
      </div>
    </UiLabel>
    <PagesClientAddingSalesAgents
      v-model:salesAgents="supervisor.sales_agents"
    ></PagesClientAddingSalesAgents>
  </template>
  <div class="xl:max-w-[465px] flex flex-col">
    <UiButtonOutlineAddItem @click="addSupervisors" class="self-center"
      >Додати супервайзера</UiButtonOutlineAddItem
    >
  </div>
</template>

<style scoped></style>
