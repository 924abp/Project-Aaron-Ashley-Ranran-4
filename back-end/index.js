const express = require('express')
const recipeRoutes = require("./routes/recipesRoutes")

const app = express()
const port = 3000
app.use(express.json())

app.use("/recipe", recipeRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
