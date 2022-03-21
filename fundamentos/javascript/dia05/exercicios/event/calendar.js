function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function addDates(array) {
  const dayDatas = document.querySelector("#days");
  for (let i in array) {
    const datas = document.createElement("li");
    datas.innerText = array[i];
    if (array[i] == 24 || array[i] == 31) {
      datas.className = "day holiday";
    } else if (array[i] == 4 || array[i] == 11 || array[i] == 18) {
      datas.className = "day friday";
    } else if (array[i] == 25) {
      datas.className = "day holiday friday";
    } else datas.className = "day";
    dayDatas.appendChild(datas);
  }
}

addDates(dezDaysList);

const btnContainer = document.getElementsByClassName("buttons-container");
function addFeriados(string) {
  const feriadoBtn = document.createElement("button");
  feriadoBtn.id = "btn-holiday";
  feriadoBtn.innerHTML = string;
  btnContainer[0].appendChild(feriadoBtn);
}
addFeriados("Feriados");

const feriadoBtn = document.getElementById("btn-holiday");
const holidays = document.getElementsByClassName("holiday");
feriadoBtn.addEventListener("click", function () {
  for (let i in holidays) {
    if (holidays[i].style.backgroundColor !== "green") {
      holidays[i].style.backgroundColor = "green";
    } else holidays[i].style.backgroundColor = "";
  }
});

function sextaBtn(string) {
  const botaoSexta = document.createElement("button");
  botaoSexta.id = "btn-friday";
  botaoSexta.innerText = string;
  btnContainer[0].appendChild(botaoSexta);
}
sextaBtn("Sexta-feira");

const botaoSexta = document.getElementById("btn-friday");
const fridayDays = document.getElementsByClassName("friday");
botaoSexta.addEventListener("click", function () {
  for (let i in fridayDays) {
    if (fridayDays[i].innerText !== "SEXTOU!") {
      fridayDays[i].innerText = "SEXTOU!";
    }
  }
});

// const dayDatas = document.querySelector("#days");
// const dayDatasChildren = dayDatas.children;
// for (let i in dayDatasChildren) {
//   dayDatasChildren[i].addEventListener("mouseenter", function (event) {
//     event.target.style.fontSize = "30px";
//   });
//   dayDatasChildren[i].addEventListener("mouseleave", function (event) {
//     event.target.style.fontSize = "";
//   });
// }

const minhasTarefas = document.getElementsByClassName("my-tasks");

function addTarefa(string) {
  let tarefa = document.createElement("span");
  tarefa.innerText = string;
  minhasTarefas[0].appendChild(tarefa);
}
addTarefa("Projeto");

let div = document.createElement("div");
function adicionaLegenda(cor) {
  div.className = "task";
  div.style.backgroundColor = cor;
  minhasTarefas[0].appendChild(div);
}
adicionaLegenda("blue");

div.addEventListener("click", function (event) {
  event.target.className = "task selected";
});
