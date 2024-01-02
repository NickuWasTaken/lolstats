import express from 'express'
import axios from 'axios'

const app = express()

app.use(express.json())

app.use('/riot-api', async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `https://europe.api.riotgames.com${req.url}`,
      headers: {
        'X-Riot-Token': req.headers['x-riot-token']
        // Add other necessary headers
      },
      data: req.body
    })

    res.json(response.data)
  } catch (error) {
    res.status(error.response.status).json(error.response.data)
  }
})

const port = 5173
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
