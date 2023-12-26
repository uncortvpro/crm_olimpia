<script setup lang="ts">
const router = useRouter();
const isMobileMenu = ref<boolean>(false);

const switchMenu = (value: boolean) => {
  isMobileMenu.value = value;
};

provide("switchMenu", switchMenu);
</script>

<template>
  <LayoutHeader class="">
    <template #header-items>
      <div v-if="isLoggedIn()" class="flex items-center gap-[20px]">
        <UiButtonOpacitySettings />
        <UiButtonOpacityNotifications :countNotification="55" />
        <CommonDropdownUser class=""> </CommonDropdownUser>
      </div>
      <CommonButtonBurger
        class="self-center lg:hidden ml-[15px]"
        :isActive="isMobileMenu"
        @click="switchMenu(!isMobileMenu)"
      />
    </template>
    <template #header-menu-list>
      <CommonMenuList :isActive="isMobileMenu">
        <template #mobile>
          <CommonMenuProfileList
            class="flex rounded-b-[40px] bg_blur_dark flex-col pt-[67px] lg:pt-0 px-[15px] gap-[26px] relative z-[15] pb-[32px] lg:py-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          ></CommonMenuProfileList>
        </template>
      </CommonMenuList>
    </template>
  </LayoutHeader>
</template>

<style scoped></style>
