<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
  modelValue: string;
}>();
const emits = defineEmits(["update:modelValue"]);
const updateModelValue = (value: string) => {
  emits("update:modelValue", value);
};
const valueInput = ref("");
const items = [
  [
    {
      label: "or",
      slot: "or",
      disabled: true,
    },
  ],
  [
    {
      label: "select",
      slot: "select",
    },
  ],
];
const participants = ref<User[]>([]);

const selectParticipant = (participant: User) => {
  valueInput.value = `${participant.name}(${participant.email})`;
};

const getStartValue = () => {
  valueInput.value = props.modelValue;
};

const handleInput = () => {
  updateModelValue(valueInput.value);
};

watchDeep(
  () => props.modelValue,
  () => {
    getStartValue();
  }
);

watchDeep(valueInput, () => {
  updateModelValue(valueInput.value);
});

const fetchParticipants = () => {
  useAuthFetch(`${useApiUrl()}/users`).then((res) => {
    participants.value = res.users;
  });
};

fetchParticipants();
getStartValue();
</script>

<template>
  <div>
    <UDropdown
      :items="items"
      class="w-full"
      :ui="{
        width: 'w-full',
        container: '!absolute !top-[100%] !translate-x-0',
        rounded: 'rounded-b-[15px] md:rounded-b-[25px] rounded-t-[0px]',
        background: 'bg-dark',
        ring: '',
        divide: '',
        item: {
          base: 'duration-hover',
          disabled: 'cursor-default opacity-100',
          active: 'opacity-hover bg-transparent',
        },
      }"
      :popper="{ placement: 'bottom-start' }"
    >
      <template #default="{ open }">
        <div
          :class="
            cn('input_primary_style relative flex items-center w-full px-0', {
              'rounded-b-[0px] rounded-t-[15px] md:rounded-t-[25px] ': open,
            })
          "
        >
          <UiButton
            class="flex items-center input_primary_p_x justify-between w-full"
          >
            <input
              type="text"
              :placeholder="placeholder"
              v-model="valueInput"
              class="flex-1 input_primary_text bg-transparent focus:outline-none"
            />
            <div
              class="w-[22px] mr-[-5px] h-[22px] md:w-[23px] md:h-[23px] relative xl:w-[29px] xl:h-[29px] bg-primary-color rounded-[50%]"
            >
              <span
                class="w-[60%] h-[1px] bg-dark block absolute top-0 left-0 right-0 bottom-0 m-auto"
              ></span>
              <span
                class="w-[60%] h-[1px] bg-dark block absolute top-0 left-0 right-0 bottom-0 m-auto rotate-90"
              ></span>
            </div>
          </UiButton>
        </div>
      </template>
      <template #or>
        <p
          class="text-white font-medium text-[10px] md:text-[12px] xl:text-[14px]"
        >
          або оберіть доступних учасників:
        </p>
      </template>
      <template #select>
        <CommonParticipantAddingItem
          v-for="participant in participants"
          class="w-full"
          :name="participant.name"
          @click="selectParticipant(participant)"
          :email="participant.email"
          :checked="true"
        ></CommonParticipantAddingItem>
      </template>
    </UDropdown>
  </div>
</template>

<style scoped></style>
