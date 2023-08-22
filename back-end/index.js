const express = require('express')
const cors = require('cors')
const recipeRoutes = require("./routes/recipesRoutes")
const authorRoutes = require("./routes/authorsRoutes")

const app = express()
const port = 3001
app.use(cors())
app.use(express.json())

app.use("/recipe", recipeRoutes)
app.use("/author", authorRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
