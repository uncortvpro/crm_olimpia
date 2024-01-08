<script setup lang="ts">
const route = useRoute();
const taskId = ref(route.params.task_id);

const inputs = ref<InputsCreateTask>({
  headline: "",
  responsible: "",
  deadline: "",
  description: "",
  status: "",
});
const error = ref("");
const message = ref("");

const fetchTask = () => {
  useAuthFetch(`${useApiUrl()}/task_info`, {
    body: {
      task_id: taskId.value,
    },
  }).then((res) => {
    inputs.value.deadline = res.deadline;
    inputs.value.description = res.description;
    inputs.value.headline = res.headline;
    inputs.value.responsible = res.responsible;
    inputs.value.status = res.status.status;
  });
};

const updateTask = () => {
  message.value = "";
  error.value = "";
  useAuthFetch(`${useApiUrl()}/update_task`, {
    body: {
      task_id: taskId.value,
      headline: inputs.value.headline,
      responsible: inputs.value.responsible,
      deadline: inputs.value.deadline,
      description: inputs.value.description,
      status: inputs.value.status,
    },
  }).then((res) => {
    if (res.message) {
      message.value = "Завдання успішно відредаговано!";
    } else {
      error.value = "Помилка! Спробуйте ще раз!";
    }
  });
};

watchDeep(inputs, () => {
  console.log(inputs.value);
});

fetchTask();
</script>

<template>
  <LayoutTask
    label="Редагувати задачу"
    :inputs="inputs"
    :message="message"
    :errorResponse="error"
    @sendForm="updateTask"
  ></LayoutTask>
</template>

<style scoped></style>
