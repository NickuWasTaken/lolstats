<script setup>
import { nunubot } from '@/stores/nunubot'
import router from '@/router'
import { ref } from 'vue'
const findSummonerRegion = ref('EUW1')
const lolstats = nunubot()

const findSummonerByName = (findSummoner, findSummonerRegion) => {
  if (findSummonerRegion == undefined) findSummonerRegion = 'EUW1'
  lolstats.$patch({
    summonerName: findSummoner,
    summonerRegion: findSummonerRegion
  })
  router.push('/playerOverview')
}
</script>

<template>
  <input
    class="search__input"
    v-model="findSummoner"
    type="text"
    placeholder="Search a champion or summoner..."
    v-on:keyup.enter="
      findSummonerByName(this.findSummoner, this.findSummonerRegion), $emit('reRender')
    "
  />
  <select class="search__region" v-model="findSummonerRegion">
    <option value="EUW1">EUW</option>
    <option value="EUN1">EUNE</option>
    <option value="NA1">NA</option>
    <option value="OC1">OCE</option>
  </select>
  <button
    type="submit"
    class="search__submit--glass"
    @click="findSummonerByName(this.findSummoner, this.findSummonerRegion)"
  />
</template>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;

  &__input {
    height: 100%;
    width: 100%;
    border: white;
    position: relative;
    border-radius: 7px;
    padding-left: 15px;
    z-index: 1;
  }

  &__region {
    position: absolute;
    margin-top: 5px;
    margin-left: -85px;
    background-color: #d2b600;
    color: white;
    width: 50px;
    padding: 5px 0;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    text-align: center;
    font-weight: 600;
    border: white;
    cursor: pointer;
    z-index: 2;

    option {
      background-color: #000;
      width: 50px;
      height: 30px;
      padding: 5px 0;
    }
  }

  &__submit--glass {
    position: absolute;
    padding: 5px 5px;
    margin-left: -32px;
    width: 30px;
    height: 35px;
    border: 0;
    background: url('@/assets/icons/search.png') no-repeat center;
    background-size: 18px 18px;
    box-shadow: none;
    border-radius: 0px;
    cursor: pointer;
    z-index: 2;
  }
}
</style>
