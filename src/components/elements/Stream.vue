<template>
  <div class="streamElements">
    <ul class="streamSelect">
      <li class="StreamOption">
        <img src="@/assets/leagues/LEC.png" alt="" />
        <div>
          <p class="leagueTitle">LEC</p>
          <p class="leagueSubtitle">EMEA</p>
        </div>
      </li>
      <li class="StreamOption">
        <img src="@/assets/leagues/LCK.png" alt="" />
        <div>
          <p class="leagueTitle">LCK</p>
          <p class="leagueSubtitle">KOREA</p>
        </div>
      </li>
      <li class="StreamOption">
        <img src="@/assets/leagues/LCS.png" alt="" />
        <div>
          <p class="leagueTitle">LCS</p>
          <p class="leagueSubtitle">N. America</p>
        </div>
      </li>
    </ul>
    <iframe
      width="600"
      height="350"
      src="https://www.youtube.com/embed/ioWRiUOJWEA?si=KAYiEc3mYvMSKvjb"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.streamElements {
  display: flex;
}

ul {
  list-style: none;
}

.streamSelect {
  margin-left: 0;
  padding: 5px 15px;
  margin-right: 10px;
  width: 160px;
  background-color: #262626;
  height: 200px;
  border-radius: 8px;
}

.StreamOption:last-child {
  border-bottom: 0;
}
.StreamOption {
  display: flex;
  align-items: center;
  height: 65px;
  background-color: #262626;
  border-bottom: solid #ffffff10 2px;

  img {
    height: 44px;
    margin-right: 10px;
    padding-left: 0px;
  }

  .leagueTitle {
    line-height: 1.2;
    font-weight: 400;
    color: #fff;
    font-size: 20px;
  }

  .leagueSubtitle {
    line-height: 1;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
