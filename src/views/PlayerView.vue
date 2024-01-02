<script setup>
import { nunubot } from '@/stores/nunubot'

const lolstats = nunubot()
await lolstats.fetchSummonerByName(lolstats.summonerRegion, lolstats.summonerName)
await lolstats.fetchSummonerMatchListById(lolstats.summonerRegion, lolstats.profileData.puuid)
console.log('This is Summonername:' + lolstats.summonerName)
console.log('This is Summoner Region:' + lolstats.summonerRegion)
console.log(lolstats.profileData)
console.log(lolstats.matchInfo)
console.log(lolstats.matchData[0].info.participants[4].summonerName)
</script>

<template>
  <div class="wrapper">
    <section class="championBanner">
      <div class="splashOverlay"></div>
      <div class="profileBanner">
        <div class="playerIcon">
          <img
            :src="`src/assets/GameAssets/profileicon/${lolstats.profileData.profileIconId}.png`"
            alt=""
            class="profileIcon"
          />
          <p>{{ lolstats.profileData.summonerLevel }}</p>
        </div>
        <div class="playerName">
          <h3>{{ lolstats.profileData.name }}</h3>
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

    <header class="overviewFilters">
      <div class="laneFilters">
        <div class="filterIconWrapper">
          <img src="@/assets/icons/filter-right.png" alt="" class="filterIcon" />
          <p>Filters:</p>
        </div>
        <ul class="filterWidget">
          <li class="active"><img src="@/assets/icons/laneIco/all.png" alt="" /></li>
          <li><img src="@/assets/icons/laneIco/top.png" alt="" /></li>
          <li><img src="@/assets/icons/laneIco/jngl.png" alt="" /></li>
          <li><img src="@/assets/icons/laneIco/midlane.png" alt="" /></li>
          <li><img src="@/assets/icons/laneIco/bot.png" alt="" /></li>
          <li><img src="@/assets/icons/laneIco/support.png" alt="" /></li>
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
    <section class="contentWrapper">
      <div class="contentWrapperLeft">
        <div class="leftTab leftTab--solo">
          <div>
            <hr />
            <p>Ranked Solo</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Platinum VI</p>
          </div>
        </div>
        <div class="leftTab leftTab--flex">
          <div>
            <hr />
            <p>Ranked Flex</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Platinum VI</p>
          </div>
        </div>
        <div class="championStatWrapper">
          <div class="leftTab leftTab--championStats">
            <div>
              <hr />
              <p>Champion Stats</p>
            </div>
          </div>
          <div class="leftTab leftTab--champion">
            <img src="@/assets/GameAssets/champion/Cassiopeia.png" alt="" class="championThumb" />
            <div class="textwrap">
              <p class="championName">Cassiopeia</p>
              <p class="lpGain">27 LP</p>
            </div>
            <div class="textwrap">
              <p class="KDA">4.27 KDA</p>
              <p class="fullKDA">4.2 / 1.7 / 3.5</p>
            </div>
            <div class="textwrap">
              <p class="winRateText">55%</p>
              <p class="totalPlayed">14 Games</p>
            </div>
          </div>
          <div class="leftTab leftTab--champion">
            <img src="@/assets/GameAssets/champion/Cassiopeia.png" alt="" class="championThumb" />
            <div class="textwrap">
              <p class="championName">Cassiopeia</p>
              <p class="lpGain">27 LP</p>
            </div>
            <div class="textwrap">
              <p class="KDA">4.27 KDA</p>
              <p class="fullKDA">4.2 / 1.7 / 3.5</p>
            </div>
            <div class="textwrap">
              <p class="winRateText">55%</p>
              <p class="totalPlayed">14 Games</p>
            </div>
          </div>
          <div class="leftTab leftTab--champion">
            <img src="@/assets/GameAssets/champion/Cassiopeia.png" alt="" class="championThumb" />
            <div class="textwrap">
              <p class="championName">Cassiopeia</p>
              <p class="lpGain">27 LP</p>
            </div>
            <div class="textwrap">
              <p class="KDA">4.27 KDA</p>
              <p class="fullKDA">4.2 / 1.7 / 3.5</p>
            </div>
            <div class="textwrap">
              <p class="winRateText">55%</p>
              <p class="totalPlayed">14 Games</p>
            </div>
          </div>
        </div>
        <div class="premadeWrapper">
          <div class="leftTab leftTab--premades">
            <div>
              <hr />
              <p>Recently Played with</p>
            </div>
          </div>
          <div class="leftTab leftTab--premadeTitle">
            <p class="premadePlayer">Summoner</p>
            <p class="premadeGames">Games</p>
            <p class="premadeWL">W - L</p>
            <p class="premadeRatio">Win ratio</p>
          </div>

          <div class="leftTab leftTab--premade">
            <div class="premadePlayer summonerWrapper">
              <img src="@/assets/images/profileIcon.png" alt="" class="summonerThumb" />
              <div class="textwrap">
                <p class="premadeName">Nicku</p>
                <p class="premadeRank">Silver VI</p>
              </div>
            </div>
            <p class="premadeGames">14</p>
            <p class="premadeWL">7 - 7</p>
            <p class="premadeRatio">50%</p>
          </div>
          <div class="leftTab leftTab--premade">
            <div class="premadePlayer summonerWrapper">
              <img src="@/assets/images/profileIcon.png" alt="" class="summonerThumb" />
              <div class="textwrap">
                <p class="premadeName">Nicku</p>
                <p class="premadeRank">Silver VI</p>
              </div>
            </div>
            <p class="premadeGames">14</p>
            <p class="premadeWL">7 - 7</p>
            <p class="premadeRatio">50%</p>
          </div>
          <div class="leftTab leftTab--premade">
            <div class="premadePlayer summonerWrapper">
              <img src="@/assets/images/profileIcon.png" alt="" class="summonerThumb" />
              <div class="textwrap">
                <p class="premadeName">Nicku</p>
                <p class="premadeRank">Silver VI</p>
              </div>
            </div>
            <p class="premadeGames">14</p>
            <p class="premadeWL">7 - 7</p>
            <p class="premadeRatio">50%</p>
          </div>
          <div class="leftTab leftTab--premade">
            <div class="premadePlayer summonerWrapper">
              <img src="@/assets/images/profileIcon.png" alt="" class="summonerThumb" />
              <div class="textwrap">
                <p class="premadeName">Nicku</p>
                <p class="premadeRank">Silver VI</p>
              </div>
            </div>
            <p class="premadeGames">14</p>
            <p class="premadeWL">7 - 7</p>
            <p class="premadeRatio">50%</p>
          </div>
          <div class="leftTab leftTab--premade">
            <div class="premadePlayer summonerWrapper">
              <img src="@/assets/images/profileIcon.png" alt="" class="summonerThumb" />
              <div class="textwrap">
                <p class="premadeName">Nicku</p>
                <p class="premadeRank">Silver VI</p>
              </div>
            </div>
            <p class="premadeGames">14</p>
            <p class="premadeWL">7 - 7</p>
            <p class="premadeRatio">50%</p>
          </div>
        </div>
      </div>
      <div class="contentWrapperMid">
        <div class="matchHistory--match" v-for="match in lolstats.matchInfo">
          <div class="champSpellWrapper">
            <img
              :src="`src/assets/GameAssets/champion/${match.championName}.png`"
              alt=""
              class="championThumb"
            />
            <div class="spellWrapper">
              <img
                :src="`src/assets/perk-images/Styles/keystones/${match.mainRunes}.png`"
                alt=""
                class="spellThumb"
              />
              <img
                :src="`src/assets/GameAssets/summonerSpells/${match.summonerSpell1}.png`"
                alt=""
                class="spellThumb"
              />
              <img
                :src="`src/assets/GameAssets/summonerSpells/${match.summonerSpell2}.png`"
                alt=""
                class="spellThumb"
              />
            </div>
          </div>

          <div class="scoreWrapper">
            <p class="gameResult gameResult--good" v-if="match.teamWin">Victory</p>
            <p class="gameResult gameResult--bad" v-else>Defeat</p>
            <p class="gameMode">ARAM</p>
          </div>

          <div class="scoreWrapper">
            <p class="KDA">{{ match.kills }} / {{ match.deaths }} / {{ match.assists }}</p>
            <p class="CSKP">
              {{ match.creatureScore }} CS -
              {{ ((match.kills + match.assists) / Math.ceil(match.deaths + 0.001)).toFixed(2) }} KDA
            </p>
          </div>
          <div class="itemWrapper aic df">
            <div class="boughtItems">
              <div class="itemThumb">
                <img
                  :src="`src/assets/GameAssets/item/${match.item0}.png`"
                  alt=""
                  class="itemThumb"
                  v-if="match.item0 > 3"
                />
              </div>
              <div class="itemThumb">
                <img
                  :src="`src/assets/GameAssets/item/${match.item1}.png`"
                  alt=""
                  class="itemThumb"
                  v-if="match.item1 > 3"
                />
              </div>
              <div class="itemThumb">
                <img
                  :src="`src/assets/GameAssets/item/${match.item2}.png`"
                  alt=""
                  class="itemThumb"
                  v-if="match.item2 > 3"
                />
                <div></div>
              </div>
              <div class="itemThumb">
                <img
                  :src="`src/assets/GameAssets/item/${match.item3}.png`"
                  alt=""
                  class="itemThumb"
                  v-if="match.item3 > 3"
                />
              </div>
              <div class="itemThumb">
                <img
                  :src="`src/assets/GameAssets/item/${match.item4}.png`"
                  alt=""
                  class="itemThumb"
                  v-if="match.item4 > 3"
                />
              </div>
              <div class="itemThumb">
                <img
                  :src="`src/assets/GameAssets/item/${match.item5}.png`"
                  alt=""
                  class="itemThumb"
                  v-if="match.item5 > 3"
                />
              </div>
            </div>
            <div class="itemTrinket">
              <div class="itemThumb">
                <img
                  :src="`src/assets/GameAssets/item/${match.trinket}.png`"
                  alt=""
                  class="itemThumb"
                  v-if="match.trinket > 3"
                />
              </div>
            </div>
          </div>

          <div class="teamChampWrapper">
            <div class="aTeam df">
              <div class="teamChampThumb" v-for="i in 5">
                <img
                  :src="`src/assets/GameAssets/champion/${match.champions[i - 1]}.png`"
                  alt=""
                  :class="{
                    'teamChampThumb--active':
                      match.summonerName ===
                      lolstats.matchData[match.matchHistory].info.participants[i - 1].summonerName,
                    teamChampThumb: true
                  }"
                />
              </div>
            </div>
            <div class="bTeam df">
              <div class="teamChampThumb" v-for="i in 5">
                <img
                  :src="`src/assets/GameAssets/champion/${match.champions[i + 4]}.png`"
                  alt=""
                  :class="{
                    'teamChampThumb--active':
                      match.summonerName ===
                      lolstats.matchData[match.matchHistory].info.participants[i + 4].summonerName,
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
      </div>
      <aside class="contentWrapperRight">
        <section class="profile--overview">
          <ul class="profile--overview__menu">
            <li class="active">
              <p>All Queues</p>
              <div class="underlined" />
            </li>
            <li>
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
            <div class="profile--overview__games df fc"><p>117</p></div>
            <div class="profile--overview__winrate df fc"><p>63%</p></div>
          </div>
          <div class="profile--overview__classes df jcsa">
            <div class="df fc"><p>Games played</p></div>
            <div class="df fc"><p>Winrate %</p></div>
          </div>
        </section>
        <section class="profile--accolades">
          <div class="profile--accolades__title df aic">
            <hr />
            <p>Accolades</p>
          </div>
          <div class="accoladeWrapper">
            <div class="accolade accolade--good"><p>Millionaire: Singed</p></div>
            <div class="accolade accolade--good"><p>Teemo Lover</p></div>
            <div class="accolade accolade--good"><p>KDA GOD</p></div>
            <div class="accolade accolade--good"><p>Millionaire: Singed</p></div>
          </div>
          <div class="accoladeWrapper">
            <div class="accolade accolade--bad"><p>Teemo Lover</p></div>
          </div>
        </section>
      </aside>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.championBanner {
  width: 100%;
  height: 300px;
  display: block;
  position: relative;

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

.contentWrapperLeft {
  width: 310px;

  > * {
    background-color: #000;
    padding: 15px;
    border-radius: 8px;
    border: solid 1px rgba($color: #707070, $alpha: 0.5);
    margin-bottom: 7px;
  }
}

.contentWrapperMid {
  width: 515px;
  > * {
    background-color: #000;
    padding: 15px;
    border-radius: 8px;
    border: solid 1px rgba($color: #707070, $alpha: 0.5);
    margin-bottom: 7px;
  }
}

.contentWrapperRight {
  width: 375px;
  > * {
    background-color: #000;
    padding: 15px;
    border: solid 1px rgba($color: #707070, $alpha: 0.5);
    margin-bottom: 7px;
  }
}

.wrapper {
  z-index: 2;
  width: 1280px;
  margin: auto;
  padding-top: 80px;
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

.championStatWrapper,
.premadeWrapper {
  width: 100%;
  padding: 0;
}

.leftTab {
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    > hr {
      width: 3px;
      height: 100%;
      background-color: #bca300;
      border: none;
      border-radius: 5px 0 0 5px;
    }

    > * {
      margin-right: 8px;
      color: white;
      font-weight: 600;
      font-size: 16px;
      line-height: 1.4;
      align-items: center;
      display: flex;
    }
  }

  .queueType {
    border-left: #bca300 solid 3px;
    border-radius: 8px;
  }

  &--championStats,
  &--premades {
    border-radius: 8px 8px 0 0;
    padding: 15px 15px 15px 15px;
    border-bottom: 1px solid #333;
  }

  &--champion:nth-child(odd),
  &--premade:nth-child(odd) {
    background-color: rgba($color: white, $alpha: 0.1);
  }

  &--champion:nth-child(0) {
    padding-top: 5px;
  }

  &--champion,
  &--premade,
  &--premadeTitle {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 10px 10px 15px;

    > * {
      margin: 0;
    }
  }

  &--premade,
  &--premadeTitle {
    display: flex;
    padding: unset;
    padding: 7px 10px 7px 15px;

    .summonerThumb {
      width: 25px;
    }
  }

  .championThumb {
    height: 35px;
    width: 35px;
    margin-right: 0px;
  }

  .textwrap {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    padding: 0;
    line-height: 1;

    .championName,
    .KDA,
    .winRateText,
    .premadeName {
      display: inline;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      color: white;
      margin-top: -3px;
    }

    .lpGain,
    .fullKDA,
    .totalPlayed,
    .premadeRank {
      display: inline;
      text-align: left;
      font-size: 13px;
      color: #707070;
      font-weight: 600;
      line-height: 0.8;
    }

    .premadeName {
      font-size: 11px;
    }
    .premadeRank {
      font-size: 10px;
    }
    .KDA {
      text-align: center;
      width: 100%;
      font-size: 14px;
    }

    .totalPlayed {
      font-style: italic;
    }

    .winRateText,
    .totalPlayed {
      text-align: right;
      width: 100%;
    }
  }

  .premadePlayer,
  .premadeWL,
  .premadeGames,
  .premadeRatio {
    font-size: 11px;
    font-weight: 600;
    color: white;
    text-align: center;
  }
  .premadePlayer {
    width: 120px;
    text-align: left;
  }

  .premadeGames,
  .premadeWL {
    width: 40px;
  }

  .premadeRatio {
    width: 50px;
  }
}
.matchHistory--match {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 30px;
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

.profile--accolades {
  &__title {
    height: 24px;
    margin-bottom: 15px;
    p {
      margin-right: 8px;
      color: white;
      font-weight: 600;
      font-size: 18px;
      line-height: 1.4;
      align-items: center;
      display: flex;
    }

    hr {
      width: 4px;
      height: 90%;
      background-color: #346565;
      border: none;
      border-radius: 5px 0 0 5px;
      margin-right: 10px;
    }
  }
  .accolade {
    display: flex;
    align-items: center;
    margin-right: 8px;

    p {
      color: white;
      line-height: 1;
      font-size: 14px;
      align-items: center;
      display: flex;
      padding: 0 10px;
      height: 24px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }

  .accolade--good {
    p {
      background-color: #1b9762;
    }
  }

  .accoladeWrapper {
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
  }

  .accolade--bad {
    p {
      background-color: #840a0a;
    }
  }
}
</style>
@/stores/nunu.js
