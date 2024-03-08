<template>
  <div>
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
          <p>All Ranked</p>
        </div>
        <div class="filterTab fc">
          <p>Season 13</p>
        </div>
        <form action="">
          <input type="text" class="filterTab filterTab--search" placeholder="Search Champion..." />
        </form>
        <form action="">
          <input type="text" class="filterTab filterTab--search" placeholder="Search Players..." />
        </form>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
</style>
