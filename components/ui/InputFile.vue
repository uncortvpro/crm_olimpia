<script setup lang="ts">
  const props = defineProps<{
    typeInput?: string;
    multiple?: boolean;
  }>();

  const emits = defineEmits(['updateInput']);

  const fileUpload = ref<any>(null);

  const handleFileUpload = () => {
    const file = fileUpload.value.files[0];
    file.value = file;

    emits('updateInput', file.value, props?.typeInput);
    fileUpload.value.value = '';
  };
</script>

<template>
  <input
    ref="fileUpload"
    type="file"
    @change="handleFileUpload()"
  />
</template>

<style scoped></style>
