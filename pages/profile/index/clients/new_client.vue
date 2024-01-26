<script setup lang="ts">
const inputs = ref<InputsCreateClient>({
  name: "",
  edrpou: "",
  ipn: "",
  bank: "",
  account_number: "",
  address_jur: "",
  address_phiz: "",
  address_sklad: "",
  pib_kerivnyka: "",
  pib_kontaktna: "",
  number: "",
  email: "",
  supervisors: [],
  payment_terms_and_conditions: "",
  contracts: [],
  delete_contracts: [],
  contracts_links: [],
});
const error = ref("");
const message = ref("");

const formData = () => {
  const data = new FormData();
  const token = localStorage.getItem("token");
  data.append("access_token", `${token}`);

  data.append("name", inputs.value.name);
  data.append("edrpou", inputs.value.edrpou);
  data.append("ipn", inputs.value.ipn);
  data.append("bank", inputs.value.bank);
  data.append("account_number", inputs.value.account_number);
  data.append("address_jur", inputs.value.address_jur);
  data.append("address_phiz", inputs.value.address_phiz);
  data.append("address_sklad", inputs.value.address_sklad);
  data.append("pib_kerivnyka", inputs.value.pib_kerivnyka);
  data.append("pib_kontaktna", inputs.value.pib_kontaktna);
  data.append("number", inputs.value.number);
  data.append("email", inputs.value.email);
  data.append(
    "payment_terms_and_conditions",
    inputs.value.payment_terms_and_conditions
  );

  data.append("supervisors", JSON.stringify(inputs.value.supervisors));

  inputs.value.contracts.forEach((contract, index) => {
    const fieldName = `contracts`;
    data.append(fieldName, contract);
  });

  return data;
};

const createClient = () => {
  message.value = "";
  error.value = "";
  useApiFetch(`${useApiUrl()}/add_client`, {
    method: "POST",
    body: formData(),
  }).then((res) => {
    if (res.message) {
      message.value = "Контракт успішно створено!";
    } else {
      error.value = "Помилка! Спробуйте ще раз!";
    }
  });
};
</script>

<template>
  <LayoutClient
    label="Додати клієнта"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="createClient"
  ></LayoutClient>
</template>

<style scoped></style>
