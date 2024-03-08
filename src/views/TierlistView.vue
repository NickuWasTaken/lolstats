<script setup>
import { nunubot } from '@/stores/nunubot'
import { ref, reactive } from 'vue'

const lolstats = nunubot()
let activeTab = ref('1')
let SelectedGameMode = ref('ARAM')
reactive(lolstats)

const getTopCounters = (lostToChampionsCount) => {
  return lostToChampionsCount.slice(0, 5)
}

const changeTab = async (tabNr, gameMode) => {
  activeTab.value = tabNr
  SelectedGameMode.value = gameMode
  await lolstats.createTierList(SelectedGameMode.value)
  console.log(activeTab.value, SelectedGameMode.value)
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

await lolstats.createTierList(SelectedGameMode.value)
</script>

<template>
  <div>
    <div class="contentwrapper">
      <div class="wrapper">
        <header class="pagetitle">
          <h3>LoL Tier List for All Roles, Solo Queue</h3>
          <h4>
            {{ SelectedGameMode }} / Last Updated: 40 seconds ago / Games Analyzed:
            {{ lolstats.tierlistData.allGames }}
          </h4>
        </header>
        <ul class="listMenu" :key="activeTab">
          <li :class="{ active: activeTab === '1' }" @click="changeTab('1', 'CLASSIC')">
            5v5 Tierlist <br />
            <div class="underlined" />
          </li>
          <li :class="{ active: activeTab == 2 }" @click="changeTab('2', 'ARAM')">
            ARAM Tierlist <br />
            <div class="underlined" />
          </li>
          <li :class="{ active: activeTab == 3 }" @click="changeTab('3', 'CLASSIC')">
            DUO Tierlist <br />
            <div class="underlined" />
          </li>
          <li :class="{ active: activeTab == 4 }" @click="changeTab('4', 'CLASSIC')">
            Pro Tierlist <br />
            <div class="underlined" />
          </li>
          <li :class="{ active: activeTab == 5 }" @click="changeTab('5', 'CLASSIC')">
            Combat Stats <br />
            <div class="underlined" />
          </li>
        </ul>
        <header class="overviewFilters">
          <div class="laneFilters">
            <div class="filterIconWrapper">
              <img src="@/assets/icons/filter-right.png" alt="" class="filterIcon" />
              <p>Filters:</p>
            </div>
            <ul class="filterWidget">
              <li class="active"><img src="@/assets/icons/laneIco/NONE.png" alt="" /></li>
              <li><img src="@/assets/icons/laneIco/TOP.png" alt="" /></li>
              <li><img src="@/assets/icons/laneIco/JUNGLE.png" alt="" /></li>
              <li><img src="@/assets/icons/laneIco/MIDDLE.png" alt="" /></li>
              <li><img src="@/assets/icons/laneIco/BOTTOM.png" alt="" /></li>
              <li><img src="@/assets/icons/laneIco/UTILITY.png" alt="" /></li>
            </ul>
            <div class="filterTab fc">
              <p>All Ranks</p>
            </div>
            <div class="filterTab fc">
              <p>Season 13</p>
            </div>
            <div class="filterTab fc">
              <p>Solo/Duo</p>
            </div>
            <div class="filterTab fc">
              <p>World</p>
            </div>
          </div>
        </header>
      </div>

      <section class="tierlistWrapper" v-if="activeTab < 5">
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
          <div class="tierEntry" v-for="(champion, index) in lolstats.tierlistData" :key="index">
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
              {{
                Math.floor((champion.gamesPlayed / lolstats.tierlistData.allGames) * 100 * 10) / 10
              }}
              %
            </p>
            <p class="ban">3,1 %</p>
            <div class="counter">
              <div v-for="counter in getTopCounters(champion.lostToChampionsCount)">
                {{ console.log(counter.name) }}
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
      </section>

      <section class="tierlistWrapper" v-if="activeTab == 5">
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
          <div class="tierEntry" v-for="(champion, index) in lolstats.tierlistData" :key="index">
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
                  ((champion.physicalDamageDealtToChampions +
                    champion.magicDamageDealtToChampions) /
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  z-index: 2;
  width: 1280px;
  margin: auto;
  padding-top: 100px;
}

.pagetitle {
  color: white;
  h3 {
    line-height: 1.2;
    font-size: 40px;
    font-weight: 600;
  }
  h4 {
    line-height: 1.2;
    font-size: 20px;
    font-weight: 600;
  }
}

.laneFilters {
  margin: 20px 40px;
  height: 42px;
  display: flex;
  align-items: center;

  .filterIconWrapper {
    width: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 25px;
      height: 15px;
    }

    p {
      font-weight: 600;
      color: white;
      font-family: 'segoe UI';
      font-size: 14px;
    }
  }
}
.laneFilters > * {
  margin-right: 20px;
}

.filterWidget {
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  border: solid #707070 1px;
  border-radius: 5px;
  justify-content: center;
  padding-left: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;

    img {
      width: 22px;
      height: 22px;
    }
  }
  .active {
    background-color: rgba(255, 255, 255, 0.075);
  }
}

.filterTab {
  height: 42px;
  padding: 10px 25px;
  border: 1px solid #707070;
  border-radius: 5px;

  p {
    font-weight: bold;
    font-size: 15px;
    line-height: 1.3;
    color: white;
  }
}

.filterTab--search {
  background-color: black;
  padding-left: 15px;
  color: #707070;
  font-weight: 600;
  font-size: 15px;
}
.filterTab--search::placeholder {
  color: #707070;
}

.listMenu {
  margin-top: 40px;
  margin-bottom: 20px;
  list-style-type: none;
  display: flex;

  li {
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    line-height: 1.6;
    font-family: 'segoe UI';
    color: white;
    margin-right: 20px;

    .underlined {
      display: block;
      width: 85%;
      margin: auto;
      border-radius: 5px;
      height: 3px;
    }
  }
  .active {
    .underlined {
      display: block;
      width: 85%;
      margin: auto;
      border-radius: 5px;
      height: 3px;
      background-color: #bca300;
    }
  }
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
