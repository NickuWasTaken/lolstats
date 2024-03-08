<template>
  <div class="champLeaderboard">
    <header>
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
        <div class="rankWrapper">
          <img src="@/assets/GameAssets/ranks/5.png" class="rankThumb" />
          <p>Platinum +</p>
        </div>
      </div>
    </header>
    <aside>
      <div class="topTitles">
        <p>Rank</p>
        <p>Role</p>
        <p>Champion</p>
        <p>Tier</p>
        <p>Winrate</p>
      </div>
      <div class="champion" v-for="index in 5" :key="index">
        <div>
          <p>{{ index }}</p>
        </div>
        <div class="championRole">
          <img src="@/assets/icons/laneIco/MIDDLE.png" alt="" class="laneThumb" />
        </div>
        <div class="championName">
          <img src="@/assets/GameAssets/champion/Cassiopeia.png" class="championThumb" alt="" />
          <p>Cassiopeia</p>
        </div>
        <div><p>S</p></div>
        <div><p>57.7%</p></div>
      </div>
    </aside>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.champLeaderboard {
  height: 280px;
  margin-top: 15px;
  background-color: #ffffff10;
  border-radius: 7px 7px 0 0;

  header {
    height: 40px;
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: #ffffff20;
    border-radius: 7px 7px 0 0;
  }

  aside {
    height: 240px;

    .topTitles {
      height: 34px;
      display: flex;
      align-items: center;
    }

    .topTitles,
    .champion {
      padding-top: 5px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 5px;
    }
    .topTitles p,
    .champion p {
      font-weight: 600;
      width: 75px;
      text-align: center;
    }
    .topTitles p:nth-child(3),
    .champion div:nth-child(3) {
      width: 120px;
    }

    .champion div {
      margin: 3px 0 3px 0;
      height: 35px;
      display: flex;
      align-items: center;
    }

    .championName {
      display: flex;
      align-items: center;
      height: 32px;
    }

    .championThumb {
      height: 30px;
      margin-right: 10px;
    }
    .championRole {
      display: flex;
      align-items: center;
      height: 32px;
      width: 75px;
      justify-content: center;
    }
    .laneThumb {
      height: 20px;
      align-items: center;
    }
    .champion:nth-child(even) {
      background-color: #ffffff07;
    }
  }
}

.laneFilters {
  margin-left: 15px;
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 1px;

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

.filterWidget {
  display: flex;
  align-items: center;
  height: 100%;
  width: 215px;
  list-style: none;
  border: solid #707070 1px;
  border-radius: 5px;
  justify-content: center;
  padding-left: 0;
  margin-left: 15px;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 32px;

    img {
      width: 16px;
      height: 16px;
    }
  }
  .active {
    background-color: rgba(255, 255, 255, 0.075);
  }
}

.rankWrapper {
  display: flex;
  align-items: center;
  margin-left: 20px;

  img {
    margin-top: 2px;
    height: 32px;
    margin-right: 5px;
  }

  p {
    font-weight: 600;
    color: #fff;
  }
}
</style>
