<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '@/components/UI/TopBar.vue'
import SideBarMenu from '@/components/UI/SideBarMenu.vue'
</script>

<template>
  <TopBar />
  <SideBarMenu />
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
