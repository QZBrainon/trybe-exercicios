// General html info
const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header");
const bg = document.getElementById("bg");
const color = document.getElementById("color");
const fontsize = document.getElementById("fontsize");
const espaçamento = document.getElementById("espaçamento");
const fontfamily = document.getElementById("fontfamily");

// Buttons info

const bgButton = document.getElementById("bg-btn");
const colorButton = document.getElementById("color-btn");
const fontsizeButton = document.getElementById("fontsize-btn");
const espaçamentoButton = document.getElementById("espaçamento-btn");
const fontfamilyButton = document.getElementById("fontfamily-btn");

// Buttons events

bgButton.addEventListener("click", function () {
  body[0].style.backgroundColor = bg.value;
  localStorage.setItem("bg", JSON.stringify(bg.value));
});

colorButton.addEventListener("click", function () {
  header[0].style.color = color.value;
});

fontsizeButton.addEventListener("click", function () {
  body[0].style.fontSize = fontsize.value;
});

espaçamentoButton.addEventListener("click", function () {
  header[0].style.lineHeight = espaçamento.value;
});

fontfamilyButton.addEventListener("click", function () {
  header[0].style.fontFamily = fontfamily.value;
});
