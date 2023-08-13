const Author = require("../modules/authorsModel")

exports.getAnAuthor = async (req, res) => {
    const result = await Author.findByPk(req.params.id)
    if(result != null){
        return res.json(result)
    }
    return res.send("recipe not found")
}

exports.createAnAuthor = async (req, res) => {
    await Author.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
    })
    const result = await Recipe.findByPk(req.params.id)
    res.json(result)
}