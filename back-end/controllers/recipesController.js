const Recipe = require("../modules/recipesModel")

exports.getAllRecipes = async (req, res) => {
    const result = await Recipe.findAll()
    res.json(result)
}

exports.getARecipe = async (req, res) => {
    const result = await Recipe.findByPk(req.params.id)
    if(result != null){
        return res.json(result)
    }
    return res.send("recipe not found")
}

exports.getAllRecipesFromAnAuthor = async (req, res) => {
    const result = await Recipe.findAll({where: {author_id: req.params.id}})
    res.json(result)
}

exports.createARecipe = async (req, res) => {
    await Recipe.create({
        name: req.body.name,
        author_id: req.body.author_id,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
    })
    const result = await Recipe.findByPk(req.params.id)
    res.json(result)
}

exports.updateARecipe = async (req, res) => {
    const result = await Recipe.findByPk(req.params.id)
    if(result != null){
        await Recipe.update({
            name: req.body.name,
            author_id: req.body.author_id,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        }, {where: {id: req.params.id}})
        return res.json(result)
    }
    return res.send("recipe not found")
}

exports.deleteARecipe = async (req, res) => {
    const result = await Recipe.findAll({where: {id: req.params.id}})
    if(result != null){
        await Recipe.destroy({where: {id: req.params.id}})
        return res.json(result)
    }
    return res.send("recipe not found")
}