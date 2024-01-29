<script setup lang="ts">
const route = useRoute();

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
const clientId = ref(route.params.client_id);

const formData = () => {
  const data = new FormData();
  const token = localStorage.getItem("token");
  data.append("access_token", `${token}`);
  data.append("client_id", String(clientId.value));

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

const getClient = () => {
  useAuthFetch(`${useApiUrl()}/client_info`, {
    body: {
      client_id: clientId.value,
    },
  }).then((res: Client) => {
    console.log(res);
    inputs.value.account_number = res.account_number;
    inputs.value.address_jur = res.address_jur;
    inputs.value.address_phiz = res.address_phiz;
    inputs.value.address_sklad = res.address_sklad;
    inputs.value.bank = res.bank;
    inputs.value.edrpou = res.edrpou;
    inputs.value.email = res.email;
    inputs.value.ipn = res.ipn;
    inputs.value.name = res.name;
    inputs.value.number = res.number;
    inputs.value.payment_terms_and_conditions =
      res.payment_terms_and_conditions;
    inputs.value.pib_kerivnyka = res.pib_kerivnyka;
    inputs.value.pib_kontaktna = res.pib_kontaktna;
    inputs.value.supervisors = res.supervisors;
    inputs.value.contracts = res.contracts_links || [];
  });
};

const editClient = () => {
  message.value = "";
  error.value = "";
  useApiFetch(`${useApiUrl()}/update_client`, {
    method: "POST",
    body: formData(),
  }).then((res) => {
    if (res.message) {
      navigateTo('/profile/clients')
    } else {
      error.value = "Помилка! Спробуйте ще раз!";
    }
  });
};


getClient();
</script>

<template>
  <LayoutClient
    label="Редагувати клієнта"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="editClient"
  ></LayoutClient>
</template>

<style scoped></style>
