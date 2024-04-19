
const skills = [
    {id: 1, skill: "html", level: "beginner", experience: "3 months"},
    {id: 2, skill: "css", level: "beginner", experience: "3 months"},
    {id: 3, skill: "JavaScript", level: "beginner", experience: "3 months"},
    {id: 4, skill: "node.js", level: "newbie", experience: "1 week"},
    {id: 5, skill: "express", level: "newbie", experience: "1 week"},
    {id: 6, skill: "CLI", level: "beginner", experience: "3 months"},
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}