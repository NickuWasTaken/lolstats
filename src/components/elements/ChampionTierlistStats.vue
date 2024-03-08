<script setup>
const props = defineProps({
  champions: {}
})
</script>

<template>
  <section class="tierlistWrapper">
    <div class="tierlistTitles df jfsb">
      <p class="rank">Rank</p>
      <p class="role">Role</p>
      <p class="champion">Champion</p>
      <p class="winrate">Winrate%</p>
      <p class="kills">Kills</p>
      <p class="deaths">Deaths</p>
      <p class="assists">Assists</p>
      <p class="damage">Damage</p>
      <p class="damMiti">Damage Mitigate</p>
      <p class="heals">Heals</p>
      <p class="games">Games</p>
    </div>
    <div class="tierlistContent">
      <div class="tierEntry" v-for="(champion, index) in props.champions" :key="index">
        <p class="rank">{{ champion.rank }}</p>
        <p class="role">
          <img
            :src="`src/assets/icons/laneIco/${champion.teamPosition}.png`"
            alt=""
            class="thumb"
          />
        </p>
        <div class="champion">
          <img
            :src="`src/assets/GameAssets/champion/${champion.championName}.png`"
            alt=""
            class="champThumb"
          />
          <p>{{ champion.championName }}</p>
        </div>
        <p class="winrate">
          {{ Math.round((champion.wins / champion.gamesPlayed) * 100 * 10) / 10 }} %
        </p>
        <p class="kills">{{ Math.round((champion.kills / champion.gamesPlayed) * 10) / 10 }}</p>
        <p class="deaths">
          {{ Math.round((champion.deaths / champion.gamesPlayed) * 10) / 10 }}
        </p>
        <p class="assists">
          {{ Math.round((champion.assists / champion.gamesPlayed) * 10) / 10 }}
        </p>
        <p class="damage">
          {{
            Math.round(
              ((champion.physicalDamageDealtToChampions + champion.magicDamageDealtToChampions) /
                champion.gamesPlayed) *
                10
            ) / 10
          }}
        </p>
        <p class="damMiti">
          {{ Math.round((champion.damageSelfMitigated / champion.gamesPlayed) * 10) / 10 }}
        </p>
        <p class="heals">
          {{ Math.round((champion.totalHeal / champion.gamesPlayed) * 10) / 10 }}
        </p>

        <p class="games">
          {{ champion.gamesPlayed }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tierlistWrapper {
  width: 1280px;
  padding: 0 30px;
  margin: auto;
  margin-top: 30px;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 5px 5px 0 0;
  padding-bottom: 20px;

  .rank,
  .role,
  .tier {
    width: 50px;
  }
  .champion,
  .counter {
    width: 170px;
  }
  .winrate,
  .popularity,
  .games {
    width: 85px;
  }
  .pick,
  .ban {
    width: 65px;
  }

  .kills,
  .deaths,
  .assists {
    width: 50px;
  }

  .damMiti {
    width: 123px;
  }

  .damage {
    width: 60px;
  }

  .heals {
    width: 65px;
  }

  .rank,
  .role,
  .tier,
  .champion,
  .counter,
  .winrate,
  .popularity,
  .games,
  .pick,
  .ban {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tierlistTitles {
    justify-content: space-between;
    padding: 7px 0;

    p {
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      padding: 8px 0;
      color: white;
    }
  }

  .tierEntry {
    display: flex;
    justify-content: space-between;
    padding: 7px 0;

    p {
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      padding: 8px 0;
      color: white;
    }

    .champion {
      justify-content: space-between;
      p {
        width: 145px;
        text-align: center;
        text-transform: capitalize;
      }

      .champThumb {
        width: 34px;
      }
    }

    .champThumb--small {
      width: 25px;
      height: 25px;
      margin-left: 7px;
      display: block;
    }
  }

  .tierEntry:nth-child(odd) {
    background-color: #1c1c1c;
  }
  .tierEntry:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.07);
  }
}
</style>
