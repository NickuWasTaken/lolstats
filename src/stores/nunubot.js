import { defineStore } from 'pinia'
import axios from 'axios'
import { fakeMatchHistory } from '@/assets/StaticData/fakeMatchHistory.js'

export const nunubot = defineStore('nunu', {
  state: () => ({
    summonerName: String,
    summonerRegion: String,
    profileData: {},
    profileRankStats: {},
    flexRankStats: {
      tier: 'Unranked',
      rank: ''
    },
    soloRankStats: {
      tier: 'Unranked',
      rank: ''
    },
    matchHistory: [],
    matchData: [],
    matchInfo: [],
    championStats: [],
    recentlyPlayedWith: [
      {
        puuid: String,
        name: String,
        wins: 0,
        losses: 0
      }
    ],
    tierlistData: {
      allGames: Number
    }
  }),
  actions: {
    async fetchSummonerByName(region, name) {
      let response = await axios.get(
        'https://' +
          region +
          '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
          name +
          '?api_key=' +
          import.meta.env.VITE_RGAPI
      )
      this.matchInfo = []
      this.matchData = []
      this.championStats = []
      this.profileData = response.data
    },

    async fetchSummonerLeagueByEncId() {
      let EncId = this.profileData.id
      let region = this.summonerRegion
      let response = await axios.get(
        'https://' +
          region +
          '.api.riotgames.com/lol/league/v4/entries/by-summoner/' +
          EncId +
          '?api_key=' +
          import.meta.env.VITE_RGAPI
      )
      this.soloRankStats = response.data
      if (response.data[0].queueType == 'RANKED_FLEX_SR') {
        this.flexRankStats = response.data[0]
        this.soloRankStats = response.data[1]
        console.log()
      } else if (response.data[0].queueType == 'RANKED_SOLO_5x5') {
        this.soloRankStats = response.data[0]
        console.log(this.soloRankStats)
      }
    },

    async fetchSummonerMatchListById() {
      let region = this.summonerRegion
      let id = this.profileData.puuid
      if (region == 'EUW1') {
        region = 'europe'
      } else if (region == 'EUN1') {
        region = 'europe'
      } else if (region == 'OCE1') {
        region = 'sea'
      } else if (region == 'NA1') {
        region = 'americas'
      }

      let response = await axios.get(
        'https://' +
          region +
          `.api.riotgames.com/lol/match/v5/matches/by-puuid/` +
          id +
          '/ids?1673481600&count=15&api_key=' +
          import.meta.env.VITE_RGAPI
      )
      this.matchHistory = response.data

      let i = 0
      while (i < this.matchHistory.length) {
        const currentMatch = this.matchHistory[i]
        if (i % 15 == 1) {
          setTimeout(function () {
            console.log('Waiting for cooldowns')
          }, 1500)
        }
        await this.fetchMatchDataById(region, currentMatch)
        let p = 0
        var championsInGame = []
        var championsInGameName = {}

        while (p < 10) {
          championsInGameName[i] = this.matchData[i].info.participants[p].championName
          await championsInGame.push(championsInGameName[i])
          var MapType
          if (
            this.matchData[i].info.gameMode == 'CLASSIC' &&
            this.matchData[i].info.queueId === 420
          ) {
            MapType = 'Solo/Duo'
          } else if (this.matchData[i].info.gameMode == 'CLASSIC') {
            MapType = 'SR 5v5'
          } else if (this.matchData[i].info.gameMode == 'ARAM') {
            MapType = 'ARAM'
          }
          if (this.matchData[i].info.participants[p].summonerName === this.profileData.name) {
            var obj = {
              summonerName: this.profileData.name,
              team: this.matchData[i].info.participants[p].teamId,
              item0: this.matchData[i].info.participants[p].item0,
              item1: this.matchData[i].info.participants[p].item1,
              item2: this.matchData[i].info.participants[p].item2,
              item3: this.matchData[i].info.participants[p].item3,
              item4: this.matchData[i].info.participants[p].item4,
              item5: this.matchData[i].info.participants[p].item5,
              trinket: this.matchData[i].info.participants[p].item6,
              teamWin: this.matchData[i].info.participants[p].win,
              deaths: this.matchData[i].info.participants[p].deaths,
              kills: this.matchData[i].info.participants[p].kills,
              assists: this.matchData[i].info.participants[p].assists,
              gameType: MapType,
              summonerSpell1: this.matchData[i].info.participants[p].summoner1Id,
              summonerSpell2: this.matchData[i].info.participants[p].summoner2Id,
              creatureScore: this.matchData[i].info.participants[p].totalMinionsKilled,
              championName: this.matchData[i].info.participants[p].championName,
              championStats: {
                championName: this.matchData[i].info.participants[p].championName,
                championWin: this.matchData[i].info.participants[p].win
              },
              participant: p,
              mainRunes: this.matchData[i].info.participants[p].perks.styles[0].selections[0].perk,
              champions: championsInGame,
              matchHistory: i,
              id: this.matchData[i].metadata.matchId
            }
          }
          p++
        }
        this.matchInfo.matchHistory = i
        await this.matchInfo.push(obj)
        i++
      } // RGAPI tillader kun 20 kald per second men, da der  foretages også andre kald så
      //  der ventes 1sek efter 15 kald, for at være sikker på ikke at blive midlertidigt udelukket
      console.log(JSON.stringify(this.matchData))
    }, // Sample søgenavn: g0dfr0mth3s34, Nicku
    async fetchMatchDataById(region, matchId) {
      let response = await axios.get(
        'https://' +
          region +
          '.api.riotgames.com/lol/match/v5/matches/' +
          matchId +
          '?api_key=' +
          import.meta.env.VITE_RGAPI
      )
      if (response.data.info.participants.length == 10) {
        this.matchData.push(response.data)
      }
    },

    async findChampionStats() {
      let i = 0
      while (i < this.matchHistory.length) {
        let p = 0
        while (p < 10) {
          if (this.matchData[i].info.participants[p].summonerName === this.profileData.name) {
            var win = 0
            if (this.matchData[i].info.participants[p].win === true) {
              win = 1
            } else {
              win = 0
            }
            var obj = {
              championName: this.matchData[i].info.participants[p].championName,
              championStats: {
                teamWin: win,
                deaths: this.matchData[i].info.participants[p].deaths,
                kills: this.matchData[i].info.participants[p].kills,
                assists: this.matchData[i].info.participants[p].assists,
                gamePlayed: 1
              }
            }
          }
          p++
        }
        await this.championStats.push(obj)
        i++
      }

      const mergedStats = {}

      this.championStats.forEach(({ championName, championStats }) => {
        if (!mergedStats[championName]) {
          mergedStats[championName] = { ...championStats }
        } else {
          // Sum the stats for duplicates
          Object.keys(championStats).forEach((stat) => {
            mergedStats[championName][stat] += championStats[stat]
          })
        }
      })

      // Convert the mergedStats object back to the desired array format
      const mergedArray = Object.keys(mergedStats).map((championName) => ({
        championName,
        championStats: mergedStats[championName]
      }))

      const sortedData = mergedArray.sort(
        (a, b) => b.championStats.gamePlayed - a.championStats.gamePlayed
      )

      this.championStats = sortedData
    },

    async FindRecentlyPlayedWith() {
      let i = 0
      const playerCounter = {}
      const playerList = []
      while (i < this.matchHistory.length) {
        let p = 0
        while (p < 10) {
          playerList.push(this.matchData[i].info.participants[p].puuid)
          p++
        }
        i++
      }
      playerList.forEach(function (x) {
        playerCounter[x] = (playerCounter[x] || 0) + 1
      })

      const recentlyCounted = [playerCounter]

      let y = 0
      recentlyCounted.forEach((res) => {
        Object.entries(res).forEach(([key, value]) => {
          if (value >= 4 && value != this.matchHistory.length) {
            this.recentlyPlayedWith[y].puuid = key
            y++
          }
        })
      })

      /* --------- Stopper matchhistory fra at virke -------- ??
      let o = 0
      while (o < this.recentlyPlayedWith.length) {
        let participantValues = [this.profileData.puuid, this.recentlyPlayedWith[o].puuid]
        const games = this.matchData
        const results = games.map((game) => {
          // map participants, modifying only those of interest
          game.info.participants = game.info.participants.map((participant) => {
            if (participantValues.includes(participant.puuid)) {
              if (participant.summonerName != this.profileData.name) {
                this.recentlyPlayedWith[o].name = participant.summonerName

                if (participant.win) {
                  this.recentlyPlayedWith[o].wins++
                } else {
                  this.recentlyPlayedWith[o].losses++
                }
              }
            }
          })
        })
        o++
      }*/
    },

    async createTierList(gameMode) {
      let mergedChampions = {}
      let gameCount = 0

      fakeMatchHistory.forEach((game) => {
        if (game.info.gameMode === gameMode) {
          gameCount++
          let team100Participants = game.info.participants.filter(
            (p) => p.teamId === 100 || p.teamId === 200
          )
          let team200Winners = game.info.participants
            .filter((p) => p.teamId === 200 && p.win)
            .map((p) => p.championName)

          let team100Winners = game.info.participants
            .filter((p) => p.teamId === 100 && p.win)
            .map((p) => p.championName)

          team100Participants.forEach((participant) => {
            const {
              championName,
              kills,
              deaths,
              assists,
              win,
              magicDamageDealtToChampions,
              physicalDamageDealtToChampions,
              damageSelfMitigated,
              totalHeal,
              teamId,
              teamPosition,
              rank
            } = participant

            const championKey = `${championName}_${teamPosition}`
            if (!mergedChampions[championKey]) {
              mergedChampions[championKey] = {
                championName,
                kills,
                deaths,
                assists,
                magicDamageDealtToChampions,
                physicalDamageDealtToChampions,
                damageSelfMitigated,
                totalHeal,
                wins: 0,
                gamesPlayed: 0,
                rank,
                teamPosition,
                lostToChampions: {} // Tracking champions that teamId 1 lost to
              }
            }

            mergedChampions[championKey].kills += kills
            mergedChampions[championKey].deaths += deaths
            mergedChampions[championKey].assists += assists
            mergedChampions[championKey].magicDamageDealtToChampions += magicDamageDealtToChampions
            mergedChampions[championKey].physicalDamageDealtToChampions +=
              physicalDamageDealtToChampions
            mergedChampions[championKey].damageSelfMitigated += damageSelfMitigated
            mergedChampions[championKey].totalHeal += totalHeal
            mergedChampions[championKey].wins += win ? 1 : 0
            mergedChampions[championKey].gamesPlayed += 1

            if (!win && team200Winners.length > 0) {
              team200Winners.forEach((winnerChampionName) => {
                if (mergedChampions[championKey].lostToChampions[winnerChampionName]) {
                  mergedChampions[championKey].lostToChampions[winnerChampionName] += 1
                } else {
                  mergedChampions[championKey].lostToChampions[winnerChampionName] = 1
                }
              })
            }
            if (!win && team100Winners.length > 0) {
              team100Winners.forEach((winnerChampionName) => {
                if (mergedChampions[championKey].lostToChampions[winnerChampionName]) {
                  mergedChampions[championKey].lostToChampions[winnerChampionName] += 1
                } else {
                  mergedChampions[championKey].lostToChampions[winnerChampionName] = 1
                }
              })
            }
          })
        }
      })

      // Sort lostToChampions for each champion
      Object.values(mergedChampions).forEach((champion) => {
        champion.lostToChampionsCount = Object.entries(champion.lostToChampions)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
      })

      const mergedArray = Object.values(mergedChampions)

      // Sort mergedArray by win percentage, then by games played
      mergedArray.sort((a, b) => {
        const winPercentageA = (a.wins / a.gamesPlayed) * 100
        const winPercentageB = (b.wins / b.gamesPlayed) * 100

        if (winPercentageB === winPercentageA) {
          return b.gamesPlayed - a.gamesPlayed
        }
        return winPercentageB - winPercentageA
      })

      let RankCount = 1
      mergedArray.forEach((champion) => {
        champion.rank = RankCount
        RankCount++
      })

      console.log(mergedArray)
      console.log(gameCount)

      this.tierlistData = mergedArray
      this.tierlistData.allGames = gameCount
    }
  },
  persist: true
})
