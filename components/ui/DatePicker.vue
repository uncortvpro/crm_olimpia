<script setup lang="ts">
import "@vuepic/vue-datepicker/dist/main.css";
import VueDatePicker from "@vuepic/vue-datepicker";

const props = defineProps<{
  modelValue: any;
  placeholder?: string;
}>();
const formatDate = ref("");
const valueDate = ref("");
const isOpen = ref(false);

const emits = defineEmits(["update:modelValue"]);

const updateValue = () => {
  emits("update:modelValue", useFormatDate(valueDate.value));
};

const getStartValue = () => {
  valueDate.value = props.modelValue;
};

const format = (date: any) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  formatDate.value = `${day}-${month}-${year}`;
  return formatDate.value;
};

const openMenu = () => {
  isOpen.value = true;
};

const closeMenu = () => {
  isOpen.value = false;
};

watchDeep(
  () => props.modelValue,
  () => {
    getStartValue();
  }
);
watchDeep(valueDate, () => {
  updateValue();
});

getStartValue();
</script>

<template>
  <VueDatePicker
    v-model="valueDate"
    :class="
      cn('date_picker input_primary_style !h-auto', {
        'rounded-b-[0px] rounded-t-[25px]': isOpen,
      })
    "
    locale="uk"
    :enable-time-picker="false"
    @open="openMenu"
    @closed="closeMenu"
    auto-apply
    :format="format"
  >
    <template #dp-input="{ value }">
      <UiButtonOpacity
        class="flex w-full items-center input_primary_height text-white justify-between"
      >
        <span :class="{ 'text-placeholder': !value }">{{
          value || placeholder
        }}</span>
        <SvgoCalendar class="text-white" v-if="!modelValue" />
      </UiButtonOpacity>
    </template>
  </VueDatePicker>
</template>

<style>
.date_picker {
  font-weight: 500;
}
.date_picker .dp--arrow-btn-nav {
  order: 3;
  justify-self: flex-end;
}

.date_picker .dp__theme_light .dp__arrow_top {
  display: none;
}

.date_picker .dp__month_year_row {
  display: grid;
  grid-template-columns: 100px auto 25px;
}
.date_picker .dp__overlay {
  @apply rounded-[25px];
}

.date_picker .dp__month_year_wrap {
  @apply rounded-[25px];
  width: auto;
}

.date_picker .dp__menu {
  border: none;
  box-shadow: none;
}

.date_picker .dp__calendar_row {
  column-gap: 0px;
}

.date_picker .dp__outer_menu_wrap {
  @apply w-full !top-auto !left-0;
}

.date_picker .dp__calendar_header_separator {
  display: none;
}

.date_picker .dp__clear_icon {
  @apply !right-[-10px];
}

.date_picker .dp__active_date {
  @apply bg-primary-color border-none;
}

.date_picker .dp__theme_light,
.date_picker .dp__theme_dark {
  @apply font-Primary rounded-b-[25px] !rounded-t-[0px] bg-dark-100;
  --dp-background-color: #383838;
  --dp-font-size: 12px;
  --dp-primary-color: #c8c8c8;
  --dp-primary-text-color: #ffffff;
  --dp-cell-border-radius: 50%;
  --dp-text-color: #ffffff;
}

@media screen and (min-width: 400px) {
  .date_picker .dp__calendar_row {
    column-gap: 10px;
  }
}
</style>
