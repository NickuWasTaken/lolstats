<script setup>
const props = defineProps({
  champions: {},
  activeRole: String,
  championKey: String
})

const getTopCounters = (lostToChampionsCount) => {
  return lostToChampionsCount.slice(0, 5)
}

const filteredChampions = () => {
  // If searchQuery is empty, return the full list
  if (!props.championKey.trim()) {
    return props.champions
  }

  // Filter champions based on the search query
  return props.champions.filter((champion) =>
    champion.championName.toLowerCase().includes(props.championKey.toLowerCase())
  )
}

const isOdd = (index) => {
  return index % 2 === 0 // Remember, arrays are zero-indexed but :nth-child is 1-indexed
}

const getTier = (wins, games) => {
  let tier
  if ((wins / games) * 100 > 56) {
    tier = 'S+'
  } else if ((wins / games) * 100 > 54) {
    tier = 'S'
  } else if ((wins / games) * 100 > 52) {
    tier = 'A'
  } else if ((wins / games) * 100 > 50) {
    tier = 'B'
  } else if ((wins / games) * 100 > 48) {
    tier = 'C'
  } else if ((wins / games) * 100 > 46) {
    tier = 'D'
  } else if ((wins / games) * 100 < 46) {
    tier = 'F'
  }
  return tier
}
</script>

<template>
  <section class="tierlistWrapper">
    <div class="tierlistTitles df jfsb">
      <p class="rank">Rank</p>
      <p class="role">Role</p>
      <p class="champion">Champion</p>
      <p class="tier">Tier</p>
      <p class="winrate">Winrate%</p>
      <p class="popularity">Popularity</p>
      <p class="pick">Pick %</p>
      <p class="ban">Ban %</p>
      <p class="counter">Counter picks</p>
      <p class="games">Games</p>
    </div>
    <div class="tierlistContent">
      <div v-for="(champion, index) in filteredChampions()" :key="index">
        <div
          class="tierEntry"
          :class="{ oddRows: isOdd(index) }"
          v-if="champion.teamPosition == props.activeRole || props.activeRole == 'NONE'"
        >
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
          <p class="tier">{{ getTier(champion.wins, champion.gamesPlayed) }}</p>
          <p class="winrate">
            {{ Math.round((champion.wins / champion.gamesPlayed) * 100 * 10) / 10 }} %
          </p>
          <p class="popularity">5,1%</p>
          <p class="pick">
            {{ Math.floor((champion.gamesPlayed / props.champions.allGames) * 100 * 10) / 10 }}
            %
          </p>
          <p class="ban">3,1 %</p>
          <div class="counter">
            <div v-for="counter in getTopCounters(champion.lostToChampionsCount)">
              <img
                :src="`src/assets/GameAssets/champion/${counter.name}.png`"
                alt=""
                class="champThumb--small"
              />
            </div>
          </div>
          <p class="games">
            {{ champion.gamesPlayed }}
          </p>
        </div>
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

  .tableColourer:nth-of-type(odd) {
    background-color: #1c1c1c;
  }
  .oddRows {
    background-color: rgba(255, 255, 255, 0.07);
  }
}
</style>
