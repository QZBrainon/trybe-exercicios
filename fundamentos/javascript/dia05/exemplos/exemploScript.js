const title = document.querySelectorAll("#page-title");
title[0].innerText = "Street Figther";
title[0].style.color = "green";
title[0].style.backgroundColor = "lightblue";

const paragraph = document.querySelectorAll(".para");
paragraph[0].style.color = "red";
paragraph[1].style.color = "blue";

const secondParagraph = document.querySelectorAll("#second-paragraph");
secondParagraph[0].innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquid perspiciatis accusamus ab impedit totam tenetur, molestias quasi dolor culpa delectus fugiat. Quod natus, aperiam fuga illo corrupti reiciendis suscipit!";
const subTitulo = document.querySelectorAll("#subtitle");
subTitulo[0].innerText = "3rd strike";
const tituloAlt = document.querySelector("h4");
tituloAlt.style.color = "orange";

// querySelector retorna o primeiro elemento que tiver a tag, classe ou id do que foi passado em seu parametro. querySelectorAll retorna uma node list que se comporta como um array e deve ter seus index especificados para acessar os valores.

// getElementsByClass retorna os elementos com uma classe especifica no formato de HTML Collection, que também se comporta como array mas pode conter apenas elementos html.
