<script setup lang="ts">
const route = useRoute();
const contractId = ref(route.params.contract_id);

const inputs = ref<InputsCreateContract>({
  date: "",
  number: "",
  counterpartie: "",
  category: "",
  deadline: "",
  subject: "",
  status: "",
  scans_links: [],
  delete_links: [],
  scans: [],
});
const error = ref("");
const message = ref("");

const formData = () => {
  const data = new FormData();
  const token = localStorage.getItem("token");

  data.append("access_token", `${token}`);
  data.append("contract_id", String(contractId.value));

  data.append("date", inputs.value.date);
  data.append("number", inputs.value.number);
  data.append("counterpartie", inputs.value.counterpartie);
  data.append("category", inputs.value.category);
  data.append("deadline", inputs.value.deadline);
  data.append("subject", inputs.value.subject);
  data.append("status", inputs.value.status);

  inputs.value.delete_links.forEach((scansLink, index, array) => {
    const fieldName = `delete_scans`;
    data.append(fieldName, scansLink);
  });

  const deleteLinkInScans = inputs.value.scans.filter(el => typeof el !== 'string');

  deleteLinkInScans.forEach((scan, index) => {
    const fieldName = `scans`;
    data.append(fieldName, scan);
  });

  return data;
};

const createContract = () => {
  message.value = "";
  error.value = "";
  useApiFetch(`${useApiUrl()}/update_contract`, {
    method: "POST",
    body: formData(),
  }).then((res) => {
    if (res.message) {
      message.value = "Контракт успішно відредаговано!";
    } else {
      error.value = "Помилка! Спробуйте ще раз!";
    }
  });
};

const fetchContract = () => {
  useAuthFetch(`${useApiUrl()}/contract_info`, {
    body: {
      contract_id: contractId.value,
    },
  }).then((res) => {
    inputs.value.category = res.category;
    inputs.value.counterpartie = res.counterpartie;
    inputs.value.date = res.date;
    inputs.value.deadline = res.deadline;
    inputs.value.number = res.number;
    inputs.value.scans = res?.scans_links || [];
    inputs.value.status = res.status.status;
    inputs.value.subject = res.subject;
  });
};

watchDeep(inputs, () => {
  console.log(inputs.value);
});

fetchContract();
</script>

<template>
  <LayoutContract
    label="Редагувати контракт"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="createContract"
  ></LayoutContract>
</template>

<style scoped></style>
