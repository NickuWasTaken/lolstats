<script setup>
import Schedule from '@/components/elements/ScheduleElement.vue'
import ChampTop5 from '@/components/elements/ChampTop5.vue'
import Stream from '@/components/elements/Stream.vue'
</script>

<template>
  <main>
    <div class="bannerWrapper">
      <img src="@/assets/images/banner.png" alt="" />
    </div>
    <div class="wrapper">
      <div class="leftWrapper">
        <Stream />
      </div>
      <div class="rightWrapper">
        <Schedule />
        <ChampTop5 />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.bannerWrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.wrapper {
  padding-top: 60px;
  margin: auto;
  width: 1280px;
  display: flex;
  justify-content: space-between;
}

.leftWrapper {
  width: 760px;
}
.rightWrapper {
  width: 500px;
}
</style>
