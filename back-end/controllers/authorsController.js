const Author = require("../modules/authorsModel")

exports.getAnAuthor = async (req, res) => {
    const result = await Author.findByPk(req.params.id)
    if(result != null){
        return res.json(result)
    }
    return res.send("author not found")
}

exports.createAnAuthor = async (req, res) => {
    await Author.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
    })
    const result = await Author.findByPk(req.params.id)
    res.json(result)
}

exports.updateAnAuthor = async (req, res) => {
    const result = await Author.findByPk(req.params.id)
    if(result != null){
        await Author.update({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
        }, {where: {id: req.params.id}})
        return res.json(result)
    }
    return res.send("author not found")
}

exports.deleteAnAuthor = async (req, res) => {
    const result = await Author.findAll({where: {id: req.params.id}})
    if(result != null){
        await Author.destroy({where: {id: req.params.id}})
        return res.json(result)
    }
    return res.send("author not found")
}