<script setup lang="ts">
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
  data.append("date", inputs.value.date);
  data.append("number", inputs.value.number);
  data.append("counterpartie", inputs.value.counterpartie);
  data.append("category", inputs.value.category);
  data.append("deadline", inputs.value.deadline);
  data.append("subject", inputs.value.subject);
  data.append("status", inputs.value.status);

  inputs.value.scans_links.forEach((scansLink, index) => {
    const fieldName = `scans_links`;
    data.append(fieldName, scansLink);
  });

  // data.append("scans", inputs.value.scans[0]);
  inputs.value.scans.forEach((scan, index) => {
    const fieldName = `scans`;
    data.append(fieldName, scan);
  });

  return data;
};

const createContract = () => {
  message.value = "";
  error.value = "";
  useApiFetch(`${useApiUrl()}/add_contract`, {
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
  <LayoutContract
    label="Додати контракт"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="createContract"
  ></LayoutContract>
</template>

<style scoped></style>
