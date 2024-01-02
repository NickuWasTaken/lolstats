<script setup>
import SearchBar from '@/components/interactables/SearchBar.vue'
</script>

<template>
  <header class="topbar">
    <div class="logo">
      <router-link to="/"> <img src="@/assets/images/logo.png" alt="" /> </router-link>
    </div>
    <div class="topSearch"><SearchBar /></div>
    <div class="login">Log in</div>
  </header>
</template>

<style lang="scss" scoped>
.topbar {
  padding: 0 20px;
  background-color: #1e1e1e;
  height: 70px;
  width: 100%;
  position: fixed;
  display: flex;
  z-index: 200;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 50%;
  height: 35px;
  display: flex;
  align-items: center;

  img {
    margin-top: 5px;
    height: 100%;
    width: 200px;
    display: block;
  }
}

.topSearch {
  height: 35px;
  width: 35%;
  max-width: 575px;
  background-color: rgba(255, 255, 255, 0.9);
  display: block;
  border-radius: 6px;
}

.login {
  height: 38px;
  width: 100px;
  border-radius: 5px;
  background-color: #d2b600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16pt;
  font-family: 'Raleway';
  font-weight: 600;
  color: #fff;
}
</style>
