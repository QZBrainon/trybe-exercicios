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
    if (array[i] == 24 || array[i] == 25 || array[i] == 31) {
      datas.className = "day holiday";
    } else if (
      array[i] == 4 ||
      array[i] == 11 ||
      array[i] == 18 ||
      array[i] == 25
    ) {
      datas.className = "day friday";
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
botaoSexta.addEventListener("click", function () {});
