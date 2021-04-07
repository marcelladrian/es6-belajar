//ambil element
const skills = document.getElementById("skills")
const primarySkill = document.getElementById("primarySkill")

const mySkills = ["ES6", "Git", "Web Development", "Web Design"];

// const printSkills = mySkills.map((skill) => {
//     return skill;
// });

//map
//undefined
const printSkillsForEach = mySkills.map((skill) => {
    return skill;
});
//benar
const printSkillsMap = mySkills.map((skill) => {
    return skill;
});


skills.innerHTML = printSkillsMap;

//filter
const printPrimarySkill = mySkills.filter((skill) => {
    return skill != "ES6"
});

primarySkill.innerHTML = printPrimarySkill