<script setup lang="ts">
const router = useRouter();
const auth = useAuthStore();
definePageMeta({
  middleware: ["guest"],
});
const successAuth = (token: string) => auth.successAuth(token);
const credentials = reactive<LoginCredentials>({
  login: "",
  password: "",
});
const error = ref("");

const changeCredentials = (type: keyof LoginCredentials, value: string) => {
  credentials[type] = value;
};

const login = () => {
  auth
    .login(credentials)
    .then(async (res: any) => {
      if (!res.access_token) {
        error.value = "Користувач не існує";
      }
      await successAuth(res.access_token);
    })
    .catch((err) => {
      error.value = "Користувач не існує";
    });
};
</script>

<template>
  <div class="flex-1 flex justify-center items-center">
    <div
      class="bg_blur_dark max-w-[500px] xl:max-w-[640px] mx-[25px] w-full py-[20px] px-[15px] xl:py-[40px] rounded-[20px] xl:rounded-[30px] md:px-[30px] md:py-[25px] xl:px-[55px]"
    >
      <form action="#" @submit.prevent="login">
        <div class="flex flex-col">
          <UiTitlePrimary class="text-center">Авторизація</UiTitlePrimary>
          <div
            class="flex flex-col mt-[15px] md:nt-[20px] gap-[10px] md:gap-[15px] xl:gap-[25px]"
          >
            <UiLabel label="Email:">
              <UiInputPrimary v-model="credentials.login"></UiInputPrimary>
            </UiLabel>
            <!-- <UiLabel label="Пароль:" type="password"> -->
            <!-- <UiInputPrimary
              type="password"
              v-model="credentials.password"
            ></UiInputPrimary> -->
            <input class="all:unset;"  v-model="credentials.password" type="password" name="" id="">
            <!-- </UiLabel>. -->
          </div>
          <UiAlertDanger class="!text-red-600 mt-[15px]" v-if="error">{{
            error
          }}</UiAlertDanger>
          <UiButtonPrimary
            type="submit"
            class="mt-[20px] self-center md:mt-[30px] xl:mt-[40px]"
            >Увійти</UiButtonPrimary
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
input{
  font-family: sans-serif;
}
</style>
