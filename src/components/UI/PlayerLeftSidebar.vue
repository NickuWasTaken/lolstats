<script setup>
import PlayerRanks from '@/components/elements/PlayerRanks.vue'
import PlayerChampionStats from '@/components/elements/PlayerChampionStats.vue'
import PlayerRecentPlayers from '@/components/elements/PlayerRecentPlayers.vue'

const props = defineProps({
  soloRankStats: {},
  flexRankStats: {},
  championStats: {},
  recentlyPlayedWith: {}
})
</script>

<template>
  <div class="contentWrapperLeft">
    <PlayerRanks :soloRankStats="props.soloRankStats" :flexRankStats="props.flexRankStats" />

    <div>
      <PlayerChampionStats :champions="props.championStats" />
    </div>

    <div><PlayerRecentPlayers :recentlyPlayedWith="props.recentlyPlayedWith" /></div>
  </div>
</template>

<style lang="scss" scoped>
.leftTab {
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    > hr {
      width: 3px;
      height: 100%;
      background-color: #bca300;
      border: none;
      border-radius: 5px 0 0 5px;
    }

    > * {
      margin-right: 8px;
      color: white;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.4;
      align-items: center;
      display: flex;
    }
  }

  .queueType {
    border-left: #bca300 solid 3px;
    border-radius: 8px;
  }

  &--championStats,
  &--premades {
    border-radius: 8px 8px 0 0;
    padding: 15px 15px 15px 15px;
    border-bottom: 1px solid #333;
  }

  &--champion:nth-child(odd),
  &--premade:nth-child(odd) {
    background-color: rgba($color: white, $alpha: 0.1);
  }

  &--champion:nth-child(0) {
    padding-top: 5px;
  }

  &--champion,
  &--premade,
  &--premadeTitle {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 15px;

    > * {
      margin: 0;
    }
  }

  &--premade,
  &--premadeTitle {
    display: flex;
    padding: unset;
    padding: 7px 10px 7px 15px;

    .summonerThumb {
      width: 25px;
    }
  }

  .championThumb {
    height: 35px;
    width: 35px;
    margin-right: 0px;
  }

  .textwrap {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    padding: 0;
    line-height: 1;

    .championName,
    .KDA,
    .winRateText,
    .premadeName {
      display: inline;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      color: white;
      margin-top: -3px;
    }

    .lpGain,
    .fullKDA,
    .totalPlayed,
    .premadeRank {
      display: inline;
      text-align: left;
      font-size: 13px;
      color: #707070;
      font-weight: 600;
      line-height: 0.8;
    }

    .premadeName {
      font-size: 11px;
    }
    .premadeRank {
      font-size: 10px;
    }
    .KDA {
      text-align: center;
      width: 100%;
      font-size: 14px;
    }

    .totalPlayed {
      font-style: italic;
    }

    .winRateText,
    .totalPlayed {
      text-align: right;
      width: 100%;
    }
  }

  .premadePlayer,
  .premadeWL,
  .premadeGames,
  .premadeRatio {
    font-size: 11px;
    font-weight: 600;
    color: white;
    text-align: center;
  }
  .premadePlayer {
    width: 120px;
    text-align: left;
  }

  .premadeGames,
  .premadeWL {
    width: 40px;
  }

  .premadeRatio {
    width: 50px;
  }
}

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
</style>
