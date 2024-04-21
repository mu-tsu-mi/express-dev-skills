
const skills = [
    {id: 1, name: "html", level: "beginner", experience: "3 months"},
    {id: 2, name: "css", level: "beginner", experience: "3 months"},
    {id: 3, name: "JavaScript", level: "beginner", experience: "3 months"},
    {id: 4, name: "node.js", level: "newbie", experience: "1 week"},
    {id: 5, name: "express", level: "newbie", experience: "1 week"},
    {id: 6, name: "CLI", level: "beginner", experience: "3 months"},
]

module.exports = {
    getAll,
    getOne,
    create
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    // add id
    skill.id = skills.length + 1
    skills.push(skill)
}