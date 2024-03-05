<script setup>
import PlayerTotalGames from '@/components/elements/PlayerTotalGames.vue'
import PlayerAccolades from '@/components/elements/PlayerAccolades.vue'

const props = defineProps({
  soloRankStats: {}
})
</script>

<template>
  <section><PlayerTotalGames :soloRankStats="props.soloRankStats" /></section>

  <PlayerAccolades />
</template>

<style lang="scss" scoped>
section {
  background-color: #000;
  padding: 15px;
  border: solid 1px rgba($color: #707070, $alpha: 0.5);
  margin-bottom: 7px;
}
</style>
