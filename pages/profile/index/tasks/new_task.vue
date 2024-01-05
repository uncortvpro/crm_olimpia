<script setup lang="ts">
const inputs = ref<InputsCreateTask>({
  headline: "",
  responsible: "",
  deadline: "",
  description: "",
  status: "",
});
const error = ref("");
const message = ref("");

const createTask = () => {
  useAuthFetch(`${useApiUrl()}/add_task`, {
    body: {
      headline: inputs.value.headline,
      responsible: inputs.value.responsible,
      deadline: inputs.value.deadline,
      description: inputs.value.description,
      status: inputs.value.status,
    },
  }).then((res) => {
    if (res.message) {
      message.value = "Завдання успішно створено!";
    } else {
      error.value = "Помилка! Спробуйте ще раз!";
    }
  });
};


</script>

<template>
  <LayoutTask
    label="Додати задачу"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="createTask"
  ></LayoutTask>
</template>

<style scoped></style>
