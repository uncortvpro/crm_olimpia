<script setup lang="ts">
const props = defineProps<{
  modelValue: any[];
}>();

const emits = defineEmits(["update:modelValue"]);

const handleChangePhoto = (photo: any) => {
  emits("update:modelValue", [...props.modelValue, photo]);
};

const updateInput = async (file: File) => {
  if (file) {
    const base64 = await readFileAsBase64(file);
    handleChangePhoto(base64);
  }
};

const readFileAsBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        const base64 = reader.result.split(",")[1];
        resolve(base64);
      } else {
        reject(new Error("Failed to read file as base64."));
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

const deleteImage = (element: any) => {
  console.log("qwdqwdw");
  console.log(element);

  const updateArray = props.modelValue.filter((el) => el !== element);
  emits("update:modelValue", updateArray);
};
</script>

<template>
  <div
    class="grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-4"
  >
    <CommonButtonInputFile
      v-if="props.modelValue.length < 10"
      accept="image/*"
      @updateInput="updateInput"
    ></CommonButtonInputFile>
    <div
      v-for="image in props.modelValue"
      :key="image"
      class="relative w-full basis-[25%]"
    >
      <div
        class="group relative h-0 overflow-hidden rounded-[5px] pt-[120%] xl:rounded-[10px]"
      >
        <div
          class="absolute left-0 top-0 z-20 h-full w-full bg-dark-transparent"
        ></div>
        <div class="absolute left-0 top-0 z-10 h-full w-full">
          <img
            :src="useBase64(image)"
            class="block h-full w-full object-cover"
            alt=""
          />
        </div>
        <UiButtonOpacity
          type="button"
          @click="deleteImage(image)"
          class="absolute right-[10%] w-[15px] h-[15px] top-[10%] z-30 flex items-start justify-end"
        >
          <SvgoClose class="stroke-black !h-full !w-full" />
        </UiButtonOpacity>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
