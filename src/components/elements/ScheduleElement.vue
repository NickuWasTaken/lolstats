<template>
  <div class="matchCard" v-for="n in 3">
    <div id="team1" class="team">
      <img src="@/assets/images/Astralis.png" alt="" class="team__logo" />
      <p class="team__name">Astralis</p>
    </div>
    <div class="gameday">
      <p class="date">02 / 05</p>
      <hr />
      <p class="time">12 : 35</p>
    </div>
    <div id="team2" class="team">
      <img src="@/assets/images/BDS.png" alt="" class="team__logo" />
      <p class="team__name">Team BDS</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.matchCard {
  width: 100%;
  display: flex;
  background-color: #ffffff10;
  justify-content: space-between;
  height: 75px;
  padding: 0 50px;
  margin-bottom: 8px;

  .gameday {
    width: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
      color: #d2b6009a;
      font-weight: 600;
    }

    hr {
      color: #ccc;
      border: 0;
      border-bottom: #aaa 1px solid;
      margin: 3px 0px 1px 0;
    }
  }

  .team {
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__logo {
      height: 40px;
      width: 40px;
    }
  }
}
</style>
