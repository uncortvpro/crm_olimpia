<script setup lang="ts"></script>

<template>
  <div class="flex-1 flex justify-center items-center">
    <div
      class="bg_blur_dark max-w-[500px] xl:max-w-[640px] mx-[25px] w-full py-[20px] px-[15px] xl:py-[40px] rounded-[20px] xl:rounded-[30px] md:px-[30px] md:py-[25px] xl:px-[55px]"
    >
      <form action="#">
        <div class="flex flex-col">
          <UiTitlePrimary class="text-center">Авторизація</UiTitlePrimary>
          <div
            class="flex flex-col mt-[15px] md:nt-[20px] gap-[10px] md:gap-[15px] xl:gap-[25px]"
          >
            <UiLabel label="Email:">
              <UiInputPrimary></UiInputPrimary>
            </UiLabel>
            <UiLabel label="Пароль:" type="password">
              <UiInputPrimary></UiInputPrimary>
            </UiLabel>
          </div>
          <UiButtonPrimary
            class="mt-[20px] self-center md:mt-[30px] xl:mt-[40px]"
            >Увійти</UiButtonPrimary
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
