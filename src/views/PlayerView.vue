<script setup>
import { nunubot } from '@/stores/nunubot'
import { reactive } from 'vue'
import PlayerMatchList from '@/components/elements/PlayerMatchList.vue'
import PlayerFilters from '@/components/interactables/Playerfilters.vue'
import PlayerChampionBanner from '@/components/elements/PlayerChampionBanner.vue'
import PlayerLeftSidebar from '@/components/UI/PlayerLeftSidebar.vue'
import PlayerRightSidebar from '@/components/UI/PlayerRightSidebar.vue'

const lolstats = nunubot()
await lolstats.fetchSummonerByName(lolstats.summonerRegion, lolstats.summonerName)
await lolstats.fetchSummonerLeagueByEncId()
await lolstats.fetchSummonerMatchListById(lolstats.summonerRegion, lolstats.profileData.puuid)
await lolstats.findChampionStats()
await lolstats.FindRecentlyPlayedWith()
reactive(lolstats.matchData)
console.log(lolstats.matchData)
console.log(lolstats.matchHistory.length)

let soloRankStats = lolstats.soloRankStats
let flexRankStats = lolstats.flexRankStats
</script>

<template>
  <div class="wrapper">
    <PlayerChampionBanner
      :profile-data="lolstats.profileData"
      :bannerImg="lolstats.championStats[0].championName"
    />

    <PlayerFilters />

    <section class="contentWrapper">
      <PlayerLeftSidebar
        :soloRankStats="soloRankStats"
        :flexRankStats="flexRankStats"
        :championStats="lolstats.championStats.slice(0, 5)"
        :recentlyPlayedWith="lolstats.recentlyPlayedWith"
      />

      <div class="contentWrapperMid">
        <PlayerMatchList
          v-for="matches in lolstats.matchInfo"
          :match="matches"
          :matchData="lolstats.matchData"
          :key="matches.id"
        />
      </div>

      <aside class="contentWrapperRight">
        <PlayerRightSidebar :soloRankStats="soloRankStats" />
      </aside>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contentWrapperLeft {
  width: 310px;

  > * {
    background-color: #000;
    padding: 15px;
    border-radius: 8px;
    border: solid 1px rgba($color: #707070, $alpha: 0.5);
    margin-bottom: 7px;
  }
}

.contentWrapperMid {
  width: 515px;
  > * {
    background-color: #000;
    padding: 15px;
    border-radius: 8px;
    border: solid 1px rgba($color: #707070, $alpha: 0.5);
    margin-bottom: 7px;
  }
}

.contentWrapperRight {
  width: 375px;
}

.wrapper {
  z-index: 2;
  width: 1280px;
  margin: auto;
  padding-top: 80px;
}

.contentWrapper {
  width: 1280px;
  margin: auto;
  background-color: #282828;
  padding: 15px 25px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
@/stores/nunu.js
