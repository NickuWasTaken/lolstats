<script setup>
const props = defineProps({
  soloRankStats: {}
})
</script>

<template>
  <div>
    <section class="profile--overview">
      <ul class="profile--overview__menu">
        <li>
          <p>All Queues</p>
          <div class="underlined" />
        </li>
        <li class="active">
          <p>Solo</p>
          <div class="underlined" />
        </li>
        <li>
          <p>Flex</p>
          <div class="underlined" />
        </li>
        <li>
          <p>Normal</p>
          <div class="underlined" />
        </li>
        <li>
          <p>ARAM</p>
          <div class="underlined" />
        </li>
      </ul>
      <div class="df jcsa">
        <div class="profile--overview__games df fc">
          <p>{{ props.soloRankStats.wins + props.soloRankStats.losses }}</p>
        </div>
        <div class="profile--overview__winrate df fc">
          <p>
            {{
              Math.floor(
                (props.soloRankStats.wins /
                  (props.soloRankStats.wins + props.soloRankStats.losses)) *
                  100
              ) + ' %'
            }}
          </p>
        </div>
      </div>
      <div class="profile--overview__classes df jcsa">
        <div class="df fc"><p>Games played</p></div>
        <div class="df fc"><p>Winrate %</p></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.profile--overview {
  padding-bottom: 25px;
  &__menu {
    list-style: none;
    display: flex;
    padding-left: 0;
    margin-bottom: 25px;

    li {
      margin-right: 8px;
      padding: 2px 5px 5px 5px;
      cursor: pointer;

      p {
        font-weight: 600;
        color: white;
        font-size: 14px;
      }

      .underlined {
        display: none;
        width: 90%;
        margin: auto;
        margin-top: 4px;
        border-radius: 5px;
        border: none;
        height: 3px;
        background-color: #bca300;
      }
    }
    .active {
      .underlined {
        display: block;
      }
    }
  }

  &__winrate,
  &__games {
    p {
      color: white;
      font-weight: 600;
      font-size: 18px;
      margin-top: 3px;
    }

    border-radius: 50%;
    border: #2ae997 solid 5px;
    height: 100px;
    width: 100px;
    line-height: 1;
  }

  &__games {
    border: #bca300 solid 5px;
  }
  &__classes {
    div {
      width: 100px;
      margin-top: 10px;

      p {
        color: white;
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
}
</style>
