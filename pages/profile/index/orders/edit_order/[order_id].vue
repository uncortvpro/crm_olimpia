<script setup lang="ts">
const route = useRoute();

const inputs = ref<InputsCreateOrder>({
  sales_agent: "",
  distributor: "",
  shop: "",
  products: [],
  status: "",
  photos: [],
});
const error = ref("");
const message = ref("");
const orderId = ref(route.params.order_id);

const getOrder = () => {
  useAuthFetch(`${useApiUrl()}/order_info`, {
    body: {
      order_id: orderId.value,
    },
  }).then((res: Order) => {
    console.log(res);
    inputs.value.distributor = res.distributor;
    inputs.value.products = res.products;
    inputs.value.photos = res.photos;
    inputs.value.sales_agent = res.sales_agent;
    inputs.value.shop = res.shop;
    inputs.value.status = res.status.name;
  });
};

const editClient = () => {
  message.value = "";
  error.value = "";
  useAuthFetch(`${useApiUrl()}/update_order`, {
    method: "POST",
    body: {
      order_id: orderId.value,
      sales_agent: inputs.value.sales_agent,
      distributor: inputs.value.distributor,
      shop: inputs.value.shop,
      products: inputs.value.products,
      status: inputs.value.status,
      photos: inputs.value.photos
    },
  }).then((res) => {
    if (res.message) {
      navigateTo("/profile/orders");
    } else {
      error.value = "Помилка! Спробуйте ще раз!";
    }
  });
};

watchDeep(inputs, () => {
  console.log(inputs.value);
});

getOrder();
</script>

<template>
  <LayoutOrder
    label="Редагувати замовлення"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="editClient"
  ></LayoutOrder>
</template>

<style scoped></style>
