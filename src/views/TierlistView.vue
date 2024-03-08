<script setup>
import { nunubot } from '@/stores/nunubot'
import { ref, reactive } from 'vue'
import ChampionTierlist from '@/components/elements/ChampionTierlist.vue'
import ChampionTierlistStats from '@/components/elements/ChampionTierlistStats.vue'

const lolstats = nunubot()
let activeTab = ref('1')
let SelectedGameMode = ref('CLASSIC')
reactive(lolstats)

const changeTab = async (tabNr, gameMode) => {
  activeTab.value = tabNr
  SelectedGameMode.value = gameMode
  await lolstats.createTierList(SelectedGameMode.value)
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

      <ChampionTierlist :champions="lolstats.tierlistData" v-if="activeTab < 4" />

      <ChampionTierlistStats :champions="lolstats.tierlistData" v-if="activeTab == 5" />
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
</style>
