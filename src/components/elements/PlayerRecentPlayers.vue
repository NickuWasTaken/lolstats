<script setup>
const props = defineProps({
  recentlyPlayedWith: {}
})

console.log(props.recentlyPlayedWith)
</script>

<template>
  <div>
    <div class="premadeWrapper">
      <div class="leftTab leftTab--premades">
        <div>
          <hr />
          <p>Recently Played with</p>
        </div>
      </div>
      <div class="leftTab leftTab--premadeTitle">
        <p class="premadePlayer">Summoner</p>
        <p class="premadeGames">Games</p>
        <p class="premadeWL">W - L</p>
        <p class="premadeRatio">Win ratio</p>
      </div>

      <div class="leftTab leftTab--premade" v-for="premade in props.recentlyPlayedWith">
        <div class="premadePlayer summonerWrapper">
          <img src="@/assets/images/profileIcon.png" alt="" class="summonerThumb" />
          <div class="textwrap">
            <p class="premadeName">Static Name</p>
            <p class="premadeRank">Silver VI</p>
          </div>
        </div>
        <p class="premadeGames">14</p>
        <p class="premadeWL">7 - 7</p>
        <p class="premadeRatio">50%</p>
      </div>
    </div>
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
</style>
