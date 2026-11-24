const lampada = document.getElementById("lampada");
const btnAcender = document.getElementById("btnAcender");
const btnApagar = document.getElementById("btnApagar");

btnAcender.addEventListener("click", function () {
  lampada.src = "https://upload.wikimedia.org/wikipedia/commons/6/64/Simple_light_bulb_graphic.png";
  lampada.alt = "Lâmpada Acesa";
});

btnApagar.addEventListener("click", function () {
  lampada.src = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Gluehlampe_01_KMJ.png";
  lampada.alt = "Lâmpada Apagada";
});

//USUÁRIO: Interage fisicamente com a interface da página.
//CLIQUE: O usuário pressiona o botão (ACENDER ou APAGAR) com o mouse ou toque.
//EVENTO: O navegador detecta a ação e dispara o evento "click" monitorado pelo addEventListener.
//FUNÇÃO: O evento aciona a função callback associada a ele no JavaScript.
//ALTERAÇÃO NO DOM: A função modifica a propriedade src da tag <img> na árvore DOM, fazendo o navegador renderizar a nova imagem na tela sem recarregar a página.