<script setup>
const props = defineProps({
  profileData: {},
  bannerImg: String
})
</script>

<template>
  <div>
    <section class="championBanner">
      <div
        class="splashOverlay"
        :style="`background: url(src/assets/GameAssets/Splashes/${bannerImg}_0.jpg) no-repeat; background-size: cover`"
      ></div>
      <div class="profileBanner">
        <div class="playerIcon">
          <img
            :src="`src/assets/GameAssets/profileicon/${props.profileData.profileIconId}.png`"
            alt=""
            class="profileIcon"
          />
          <p>{{ props.profileData.summonerLevel }}</p>
        </div>
        <div class="playerName">
          <h3>{{ props.profileData.name }}</h3>
          <div class="updateWrap">
            <button class="button button--update">Update</button>
            <p class="updatedLast">Last updated:</p>
          </div>
        </div>
      </div>
      <ul class="playerMenu">
        <li>
          Overview <br />
          <div class="underlined" />
        </li>
        <li>
          Champion Stats <br />
          <div class="underlined--disabled" />
        </li>
        <li>
          Achievements <br />
          <div class="underlined--disabled" />
        </li>
        <li>
          Live Game <br />
          <div class="underlined--disabled" />
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.championBanner {
  width: 100%;
  height: 300px;
  display: block;
  position: relative;

  .splashOverlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('@/assets/images/singedSplashBanner.png') no-repeat;
    background-size: cover;
    filter: opacity(0.2);
  }

  .profileBanner {
    background-color: rgb(0, 0, 0, 0.4);
    height: 110px;
    width: 1200px;
    margin: 0 40px;
    padding: 15px 40px;
    border-radius: 10px;
    display: flex;
    position: absolute;
    top: 100px;

    .playerIcon {
      position: relative;
      width: 80px;
      margin-right: 20px;
      img {
        position: absolute;
        border: solid white 2px;
        border-radius: 8px;
        width: 80px;
        height: 80px;
      }
      p {
        top: 73px;
        left: 24px;
        position: absolute;
        width: 30px;
        height: 13px;
        background-color: #000;
        border: solid 1px white;
        border-radius: 5px;
        font-family: 'Segoe UI';
        font-weight: bold;
        font-size: 10px;
        text-align: center;
        line-height: 1;
        color: white;
      }
    }

    .playerName {
      h3 {
        font-family: 'Segoe UI';
        font-size: 28px;
        font-weight: bold;
        line-height: 1.2;
        color: white;
        margin-top: 8px;
      }
      .updateWrap {
        margin-top: 7px;
        display: flex;
        align-items: center;

        .updatedLast {
          color: #707070;
          font-size: 14px;
          font-family: 'Segoe UI';
        }
      }
    }
  }
}

.playerMenu {
  list-style-type: none;
  position: absolute;
  bottom: 10px;
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
      background-color: #bca300;
    }

    .underlined--disabled {
      display: block;
      width: 85%;
      margin: auto;
      border-radius: 5px;
      height: 3px;
    }
  }
}

.button--update {
  background-color: #1b9762;
  border: 0;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  width: 66px;
  height: 30px;
  font-size: 15px;
  margin-right: 10px;
}

.button--update:hover {
  background-color: #09a762;
  transition: all 0.2s;
  cursor: pointer;
}
</style>
