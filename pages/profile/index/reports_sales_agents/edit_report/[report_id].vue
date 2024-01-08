<script setup lang="ts">
const route = useRoute();
const reportId = ref(route.params.report_id);

const inputs = ref<InputsCreateReport>({
  shop_name: "",
  product_name: "",
  product_amount: "",
  sale_amount: "",
  photo: [],
});
const error = ref("");
const message = ref("");

const fetchReport = () => {
  useAuthFetch(`${useApiUrl()}/merchant_report_info`, {
    body: {
      report_id: reportId.value,
    },
  }).then((res) => {
    inputs.value.shop_name = res.shop_name;
    inputs.value.product_name = res.product_name;
    inputs.value.product_amount = res.product_amount;
    inputs.value.sale_amount = res.sale_amount;
    inputs.value.photo = res.photo;
  });
};

const updateReport = () => {
  useAuthFetch(`${useApiUrl()}/merchants_reports_update`, {
    body: {
      report_id: reportId.value,
      shop_name: inputs.value.shop_name,
      product_name: inputs.value.product_name,
      product_amount: inputs.value.product_amount,
      sale_amount: inputs.value.sale_amount,
      photo: inputs.value.photo,
    },
  }).then((res) => {
    if (res.message) {
      message.value = "Звіт успішно відредаговано!";
    } else {
      error.value = "Помилка! Спробуйте ще раз!";
    }
  });
};

watchDeep(inputs, () => {
  console.log(inputs.value);
});

fetchReport();
</script>

<template>
  <LayoutReport
    label="Редагувати звіт"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="updateReport"
  ></LayoutReport>
</template>

<style scoped></style>
