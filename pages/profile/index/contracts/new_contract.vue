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

  inputs.value.scans_links.forEach((certificate, index) => {
    const fieldName = `scans_links[${index + 1}]`;
    data.append(fieldName, certificate);
  });

  inputs.value.scans.forEach((certificate, index) => {
    const fieldName = `scans[${index + 1}]`;
    data.append(fieldName, certificate);
  });

  return data;
};

const createContract = () => {
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

watchDeep(inputs, () => {
  console.log(inputs.value);
});
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
