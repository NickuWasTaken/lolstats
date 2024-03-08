<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from '@/components/UI/TopBar.vue'
import SideBarMenu from '@/components/UI/SideBarMenu.vue'
import { ref } from 'vue'

const forceRerender = ref(0)

const forceRender = () => {
  forceRerender.value += 1
}
</script>

<template>
  <TopBar @re-render="forceRender()" />
  <SideBarMenu />
  <Suspense>
    <RouterView :key="forceRerender" />
  </Suspense>
</template>

<style scoped></style>
