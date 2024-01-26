<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";

const props = defineProps<{
  client: Client;
  selectDeletion: string[];
}>();
const selectDelete = ref(false);
const emits = defineEmits(["update:selectDeletion", "deleteAction"]);

const selectDeletion = () => {
  let newArray: string[] = [];
  if (!selectDelete.value) {
    newArray = props.selectDeletion.filter((el) => el !== props.client._id);
  }
  if (selectDelete.value) {
    newArray = [...props.selectDeletion, props.client._id];
  }
  emits("update:selectDeletion", newArray);
};

const deleteOne = () => {
  emits("update:selectDeletion", [props.client._id]);
  emits("deleteAction");
};

const salesAgentsCount = computed(() =>
  props.client.supervisors.reduce((count, el) => {
    count += el.sales_agents.length;
    return count;
  }, 0)
);

const showContracts = computed(() => props.client.contracts_links.slice(0, 4));

watch(selectDelete, () => {
  selectDeletion();
});
</script>

<template>
  <UiTableItem>
    <template #header>
      <UiCheckbox
        v-model="selectDelete"
        @click.stop=""
        class="inline-block align-middle"
      ></UiCheckbox>
      <span class="ml-[13px]"> {{ client?.name }} </span>
    </template>
    <template #elements="{ active }">
      <UiTableCell class="hidden 3xl:table-cell" :vIf="active">
        <template #title></template>
        <template #value>
          <UiCheckbox v-model="selectDelete"></UiCheckbox>
        </template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Назва</template>
        <template #value>{{ client?.name }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Реквізити</template>
        <template #value>{{ client?.account_number }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Адреса</template>
        <template #value>{{ client?.address_jur }}</template>
      </UiTableCell>
      <UiTableCell v-if="client.supervisors" :vIf="active">
        <template #title>Супервайзери</template>
        <template #value>{{ client.supervisors.length }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Торгові точки </template>
        <template #value>{{ salesAgentsCount }}</template>
      </UiTableCell>
      <UiTableCell :vIf="active">
        <template #title>Договір</template>
        <template #value>
          <div class="flex gap-[7px]" v-if="client.contracts_links">
            <a
              v-for="contract in showContracts"
              :href="contract"
              class="rounded-[5px] w-[22px] h-[28px] object-cover"
            >
              <vue-pdf-embed
                class="block h-full w-full object-cover"
                :source="contract"
              />
            </a>
          </div>
        </template>
      </UiTableCell>
    </template>
    <template #additional-buttons>
      <div class="flex items-center 3xl:justify-end gap-[15px] md:gap-[25px]">
        <UiButtonOutline
          class="!px-[20px] !text-[11px] md:!text-[12px] xl:!text-[14px] !py-[8px]"
          @click.stop="navigateTo(`/profile/clients/edit_client/${client._id}`)"
          >Редагувати</UiButtonOutline
        >
        <UiButtonOpacityDelete class="flex-shrink-0" @click.stop="deleteOne" />
      </div>
    </template>
  </UiTableItem>
</template>

<style scoped></style>
