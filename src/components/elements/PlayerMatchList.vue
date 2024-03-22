<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  match: {},
  matchData: {},
  championKey: String,
  filterRoles: String,
  playerKey: String
})

const championQuery = ref(props.championKey)
const selectedRole = ref(props.filterRoles)

// Watch for prop changes and update local state
watch(
  () => props.championKey,
  (newValue) => {
    championQuery.value = newValue
  }
)

watch(
  () => props.filterRoles,
  (newValue) => {
    selectedRole.value = newValue
    console.log(selectedRole.value, props.match.role)
  }
)

const matchesCondition = computed(() => {
  return (
    (selectedRole.value === props.match.role || selectedRole.value == 'NONE') &&
    (championQuery.value === '' ||
      props.match.championName.toLowerCase().includes(championQuery.value.toLowerCase()))
  )
})

</script>

<template>
  <div class="matchHistory--match" v-if="matchesCondition">
    <div class="champSpellWrapper">
      <img
        :src="`src/assets/GameAssets/champion/${props.match.championName}.png`"
        alt=""
        class="championThumb"
      />
      <div class="spellWrapper">
        <img
          :src="`src/assets/perk-images/Styles/keystones/${props.match.mainRunes}.png`"
          alt=""
          class="spellThumb"
        />
        <img
          :src="`src/assets/GameAssets/summonerSpells/${props.match.summonerSpell1}.png`"
          alt=""
          class="spellThumb"
        />
        <img
          :src="`src/assets/GameAssets/summonerSpells/${props.match.summonerSpell2}.png`"
          alt=""
          class="spellThumb"
        />
      </div>
    </div>

    <div class="scoreWrapper">
      <p class="gameResult gameResult--good" v-if="props.match.teamWin">Victory</p>
      <p class="gameResult gameResult--bad" v-else>Defeat</p>
      <p class="gameMode">{{ props.match.gameType }}</p>
    </div>

    <div class="scoreWrapper">
      <p class="KDA">
        {{ props.match.kills }} / {{ props.match.deaths }} / {{ props.match.assists }}
      </p>
      <p class="CSKP">
        {{ props.match.creatureScore }} CS -
        {{
          (
            (props.match.kills + props.match.assists) /
            Math.ceil(props.match.deaths + 0.001)
          ).toFixed(2)
        }}
        KDA
      </p>
    </div>
    <div class="itemWrapper aic df">
      <div class="boughtItems">
        <div class="itemThumb">
          <img
            :src="`src/assets/GameAssets/item/${props.match.item0}.png`"
            alt=""
            class="itemThumb"
            v-if="props.match.item0 > 3"
          />
        </div>
        <div class="itemThumb">
          <img
            :src="`src/assets/GameAssets/item/${props.match.item1}.png`"
            alt=""
            class="itemThumb"
            v-if="props.match.item1 > 3"
          />
        </div>
        <div class="itemThumb">
          <img
            :src="`src/assets/GameAssets/item/${props.match.item2}.png`"
            alt=""
            class="itemThumb"
            v-if="props.match.item2 > 3"
          />
          <div></div>
        </div>
        <div class="itemThumb">
          <img
            :src="`src/assets/GameAssets/item/${props.match.item3}.png`"
            alt=""
            class="itemThumb"
            v-if="props.match.item3 > 3"
          />
        </div>
        <div class="itemThumb">
          <img
            :src="`src/assets/GameAssets/item/${props.match.item4}.png`"
            alt=""
            class="itemThumb"
            v-if="props.match.item4 > 3"
          />
        </div>
        <div class="itemThumb">
          <img
            :src="`src/assets/GameAssets/item/${props.match.item5}.png`"
            alt=""
            class="itemThumb"
            v-if="props.match.item5 > 3"
          />
        </div>
      </div>
      <div class="itemTrinket">
        <div class="itemThumb">
          <img
            :src="`src/assets/GameAssets/item/${props.match.trinket}.png`"
            alt=""
            class="itemThumb"
            v-if="props.match.trinket > 3"
          />
        </div>
      </div>
    </div>

    <div class="teamChampWrapper">
      <div class="aTeam df">
        <div class="teamChampThumb" v-for="i in 5">
          <img
            :src="`src/assets/GameAssets/champion/${props.match.champions[i - 1]}.png`"
            alt=""
            :class="{
              'teamChampThumb--active':
                props.match.summonerName ===
                props.matchData[props.match.matchHistory].info.participants[i - 1].summonerName,
              teamChampThumb: true
            }"
          />
        </div>
      </div>
      <div class="bTeam df">
        <div class="teamChampThumb" v-for="i in 5">
          <img
            :src="`src/assets/GameAssets/champion/${props.match.champions[i + 4]}.png`"
            alt=""
            :class="{
              'teamChampThumb--active':
                props.match.summonerName ===
                props.matchData[props.match.matchHistory].info.participants[i + 4].summonerName,
              teamChampThumb: true
            }"
          />
        </div>
      </div>
    </div>

    <div class="expandMatch">
      <div class="expandButton"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.matchHistory--match {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 30px !important;
}

.championThumb {
  height: 33px;
  width: 33px;
  margin-right: 0px;
}

.KDA,
.gameResult {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.8;
  color: white;
  margin-top: -3px;
  text-align: center;
  width: 100%;
}

.gameResult {
  font-size: 17px;
  line-height: 1.6;
}
.gameResult--good {
  color: #09a762;
}

.gameResult--bad {
  color: #840a0a;
}

.CSKP,
.gameMode {
  display: block;
  text-align: left;
  font-size: 14px;
  color: white;
  font-weight: 600;
  line-height: 0.8;
}

.spellWrapper {
  display: flex;
  margin-top: -5px;
  margin-left: -1px;
  img {
    width: 12px;
    height: 12px;
  }
}

.boughtItems {
  width: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 5px;
  margin-top: 5px;
  height: 48px;
}

.teamChampWrapper,
.bTeam {
  margin-top: 2px;
}
.aTeam {
  margin-bottom: 5px;
}

.itemThumb,
.teamChampThumb {
  border-radius: 3px;
  width: 20px;
  height: 20px;
  background-color: #707070;
}

.itemThumb {
  background-size: contain;
}

.teamChampThumb {
  margin-right: 3px;
  background-image: url('@/assets/GameAssets/champion/Aatrox.png');
  background-size: contain;
}

.teamChampThumb--active {
  border: #bca300 solid 2px;
  border-radius: 4px;
  width: 22px;
  height: 22px;
  margin-left: -1px;
  margin-top: -1px;
}

.expandMatch {
  position: absolute;
  right: 0;
  height: 100%;
  width: 20px;
  background-color: #393939;
  border-radius: 0 5px 5px 0;

  .expandButton {
    position: absolute;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    bottom: 5px;
    right: 3px;
    background: url('@/assets/icons/expand-ico.png') no-repeat;
    background-size: contain;
  }
}
</style>
