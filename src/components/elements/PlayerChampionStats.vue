<script setup>
const props = defineProps({
  champions: {}
})

function checkChampionName(championName) {
  if (championName == 'AurelionSol') {
    championName = 'A. Sol'
  }
  return championName
}
</script>

<template>
  <div class="championStatWrapper">
    <div class="leftTab leftTab--championStats">
      <div>
        <hr />
        <p>Champion Stats</p>
      </div>
    </div>
    <div class="leftTab leftTab--champion" v-for="champion in props.champions">
      <img
        :src="`src/assets/GameAssets/champion/${champion.championName}.png`"
        alt=""
        class="championThumb"
      />
      <div class="textwrap">
        <p class="championName">{{ checkChampionName(champion.championName) }}</p>
        <p class="lpGain">
          {{
            (champion.championStats.teamWin -
              (champion.championStats.gamePlayed - champion.championStats.teamWin)) *
              25 +
            ' LP'
          }}
        </p>
      </div>
      <div class="textwrap">
        <p class="KDA">
          {{
            Math.round(
              ((champion.championStats.kills + champion.championStats.assists) /
                champion.championStats.deaths) *
                10
            ) / 10
          }}
          KDA
        </p>
        <p class="fullKDA">
          {{
            Math.round((champion.championStats.kills / champion.championStats.gamePlayed) * 10) / 10
          }}
          /
          {{
            Math.round((champion.championStats.deaths / champion.championStats.gamePlayed) * 10) /
            10
          }}
          /
          {{
            Math.round((champion.championStats.assists / champion.championStats.gamePlayed) * 10) /
            10
          }}
        </p>
      </div>
      <div class="textwrap">
        <p class="winRateText">
          {{
            Math.floor((champion.championStats.teamWin / champion.championStats.gamePlayed) * 100)
          }}
          %
        </p>
        <p class="totalPlayed">{{ champion.championStats.gamePlayed }} Games</p>
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
    background-color: rgba($color: white, $alpha: 0.14);
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
    padding: 10px 5px 10px 5px;

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

    .championName {
      width: 65px;
      margin-right: 0;
    }

    .fullKDA {
      width: 85px;
      text-align: center !important;
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
