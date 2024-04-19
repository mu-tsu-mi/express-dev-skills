const Skill = require("../models/skill")

module.exports = {
    index,
}

function index(request, response) {
    response.render("skills/index", {
        skills: Skill.getAll()
    })
}