const findChampionStats = async () => {
  let i = 0
  const champCounter = {}
  const ChampList = []
  while (i < lolstats.matchHistory.length) {
    let p = 0
    while (p < 10) {
      if (lolstats.matchData[i].info.participants[p].summonerName === lolstats.profileData.name) {
        ChampList.push(lolstats.matchData[i].info.participants[p].championName)
      }
      p++
    }
    i++
  }
  ChampList.forEach(function (x) {
    champCounter[x] = (champCounter[x] || 0) + 1
  })

  const ChampionlistSorted = Object.keys(champCounter).sort(function (a, b) {
    return champCounter[a] - champCounter[b]
  })

  ChampionlistSorted.reverse()

  console.log(champCounter)
  console.log(ChampionlistSorted)
}

export { findChampionStats }
