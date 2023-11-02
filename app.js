const $ = document;
let random = [];
const addPersonToList = (event) => {
     event.preventDefault();
     let warning = $.querySelector(".warning");
     let names = $.querySelector(".names");
     let personNameInput = $.querySelector("#person-name-input");
     const personName = personNameInput.value.trim();

     if (!personName || personName.length < 3) {
          warning.style.display = "block";
     } else {
          let creatLiPerson = $.createElement("li");
          creatLiPerson.innerHTML = personName;
          let personLiinput = names.appendChild(creatLiPerson);
          personNameInput.value = "";
          warning.style.display = "none";
          random.push(personLiinput);
          personNameInput.focus();
          creatLiPerson.setAttribute("data-id", random.length - 1);
          creatLiPerson.addEventListener("click", (e) => {
               const index = e.target.dataset.id;
               random.splice(index, 1);
               creatLiPerson.remove();
          });
     }
};

$.addEventListener("DOMContentLoaded", () => {
     let mainSection = $.querySelector(".main-div");
     let startBtn = $.querySelector(".start-btn");
     let addtBtn = $.querySelector(".add");
     let personNameInput = $.querySelector("#person-name-input");
     let ran = $.querySelector(".random-name");
     const focus = () => {
          personNameInput.focus();
     };
     focus();

     addtBtn.addEventListener("click", addPersonToList);
     startBtn.addEventListener("click", () => {
          let randomIndex = Math.floor(Math.random() * random.length);
          let randomName = random[randomIndex];
          ran.innerHTML = randomName.innerHTML + " " + "you must pay the bill";
          mainSection.style.display = "none";
          ran.style.visibility = "visible";
     });
});
