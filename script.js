//ambil element
const skills = document.getElementById("skills");

//buat variabel
const mySkills =  ["ES6", "UX Design", "Git"]

// error
// mySkills = ["Copywriting", "Translator"];

console.log(mySkills);

//function
function showSkill(mySkill){ //normal function
    console.log(mySkill);
}

const showSkill2 = (mySkill) => { //arrow function
    console.log(mySkill);
};


//forEach

mySkills.forEach(function (mySkill) { //iterator function
    console.log(mySkill);
});

let parent = '<ul>'

mySkills.forEach((mySkill) => { //iterator function
    // console.log(mySkill);
    parent += `<li>${mySkill}</li>`
});

parent += '</ul>'

mySkills.forEach(showSkill);
skills.innerHTML = parent;