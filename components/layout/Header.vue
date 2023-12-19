<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 z-30 bg-transparent">
    <nav class="container  w-full z-20">
      <div class="flex flex-wrap items-center justify-between mx-auto py-4">
        <CommonLogo
          href="https://flowbite.com/"
          class="flex relative z-20 items-center"
        ></CommonLogo>
        <div class="flex relative z-0 lg:order-2">
          <slot name="header-items"></slot>
        </div>
        <slot name="header-menu-list"></slot>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
