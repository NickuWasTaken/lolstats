import { defineStore } from 'pinia'
import axios from 'axios'

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
    soloRankStats: {},
    matchHistory: [],
    matchData: [],
    matchInfo: []
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
      } else {
        this.soloRankStats = response.data[0]
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
          '/ids?1673481600&count=16&api_key=' +
          import.meta.env.VITE_RGAPI
      )
      this.matchHistory = response.data

      let i = 0
      while (i < this.matchHistory.length) {
        const currentMatch = this.matchHistory[i]
        await this.fetchMatchDataById(region, currentMatch)
        let p = 0
        var championsInGame = []
        var championsInGameName = {}

        while (p < 10) {
          championsInGameName[i] = this.matchData[i].info.participants[p].championName
          await championsInGame.push(championsInGameName[i])
          if (
            this.matchData[i].info.gameMode == 'CLASSIC' &&
            this.matchData[i].info.queueId === 420
          ) {
            var MapType = 'Solo/Duo'
          } else if (this.matchData[i].info.gameMode == 'CLASSIC') {
            var MapType = 'SR 5v5'
          } else if (this.matchData[i].info.gameMode == 'ARAM') {
            var MapType = 'ARAM'
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
              matchHistory: i
            }
          }
          p++
        }
        this.matchInfo.matchHistory = i
        await this.matchInfo.push(obj)
        i++
        if (i % 15 == 1) {
          setTimeout(function () {
            console.log('Waiting for cooldowns')
          }, 2000)
        } // RGAPI tillader kun 20 kald per second men, da der  foretages også andre kald så
      } //  der ventes 1sek efter 15 kald, for at være sikker på ikke at blive midlertidigt udelukket
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
    }
  },
  persist: true
})
