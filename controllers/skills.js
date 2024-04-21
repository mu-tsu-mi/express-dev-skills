const Skill = require("../models/skill")

module.exports = {
    index,
    show,
    new: newSkill,
    create
}

function index(request, response) {
    response.render("skills/index", {
        skills: Skill.getAll()
    })
}

function show(request, response) {
    response.render("skills/show", {
        skill: Skill.getOne(request.params.id)
    })
}

function newSkill(request, response) {
    response.render("skills/new")
}

function create(request, response) {
    console.log(request.body)
    Skill.create(request.body)
    response.redirect("/skills")
}