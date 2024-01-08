<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";

type Props = {
  value: any[];
  buttonAdding?: boolean;
};
const props = defineProps<Props>();

const emits = defineEmits(["updateModelValue", "updateDeleteLinks"]);
const addedCertificate = ref<any[]>([]);

function convertToBase64(file: any, callback: Function) {
  const reader = new FileReader();

  reader.onload = function () {
    const result = reader?.result as string;
    const base64String = result?.split(",")[1];
    callback(base64String);
  };

  reader.readAsDataURL(file);
}

const renderPdf = async () => {
  const promises = props.value.map((el) => {
    if (typeof el === "string") {
      return el;
    }

    return new Promise((resolve) => {
      convertToBase64(el, (base64: string) => {
        const src = `data:application/pdf;base64,${base64}`;
        resolve(src);
      });
    });
  });

  addedCertificate.value = await Promise.all(promises);
};

const updateModelValue = (value: any) => {
  emits("updateModelValue", value);
};

const updateDeleteLinks = (value: any) => {
  emits("updateDeleteLinks", value);
};

const deleteCertificate = (index: number, item: any) => {
  if (typeof item === "string") {
    console.log(item);

    updateDeleteLinks(item);
  }
  const newFilsArray: any[] = props.value.filter(
    (el: any, ind: number) => ind !== index
  );
  updateModelValue(newFilsArray);
};

watchDeep(
  () => props.value,
  () => {
    renderPdf();
  }
);

renderPdf();
</script>

<template>
  <div class="">
    <div
      ref="test"
      class="relative grid w-full grid-cols-4 gap-[5px] sm:grid-cols-6 md:grid-cols-8 md:gap-[10px]"
    >
      <div
        v-for="(item, index) in addedCertificate"
        :key="index"
        class="group relative h-0 overflow-hidden rounded-[5px] pt-[120%] xl:rounded-[10px]"
      >
        <a :href="item" class="absolute block left-0 top-0 z-10 h-full w-full">
          <vue-pdf-embed
            class="block h-full w-full object-cover"
            :source="item"
          />
        </a>
        <UiButtonOpacity
          type="button"
          class="absolute right-[10%] w-[15px] h-[15px] top-[10%] z-10 flex items-start justify-end"
          @click="deleteCertificate(index, item)"
        >
          <SvgoClose class="stroke-black !h-full !w-full" />
        </UiButtonOpacity>
      </div>

      <!-- <CommonButtonInputFile
        v-if="props.buttonAdding"
        class="non_draggable"
        accept="application/pdf"
        @updateInput="updateInput"
        ></CommonButtonInputFile
      > -->
    </div>
  </div>
</template>

<style scoped></style>
