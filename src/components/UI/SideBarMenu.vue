<template>
  <nav class="sidebar">
    <ul>
      <router-link to="/tierlist">
        <li>
          <div class="thumb">
            <img src="@/assets/icons/tierlist-ico.png" alt="Tierlist Icon" />
          </div>
          <p></p>
        </li>
      </router-link>
      <router-link to="/streaming">
        <li>
          <div class="thumb">
            <img src="@/assets/icons/stream-ico.png" alt="Streaming Icon" />
          </div>
          <p></p>
        </li>
      </router-link>
      <router-link to="/leaderboard">
        <li>
          <div class="thumb">
            <img src="@/assets/icons/leaderboard-ico.png" alt="Leaderboard icon" />
          </div>
          <p></p>
        </li>
      </router-link>
      <router-link to="/draft-tool">
        <li>
          <div class="thumb">
            <img src="@/assets/icons/draft-tool-ico.png" alt="Drafting icon" />
          </div>
          <p></p>
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  width: 70px;
  background-color: #1e1e1e;
  height: calc(100% - 70px);
  position: fixed;
  z-index: 200;
  top: 70px;
  left: 0;

  ul {
    list-style: none;
    padding: 0;
    margin-top: 30px;

    li {
      width: 100%;
      height: 55px;
      margin: 5px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 26px;
      }
    }
  }
}
</style>
