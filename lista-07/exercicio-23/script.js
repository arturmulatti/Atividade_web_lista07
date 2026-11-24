let numeros = [7, 3, 9, 2, 5];

for (let i = 0; i < numeros.length - 1; i++) {
  let indiceMenor = i;

  for (let j = i + 1; j < numeros.length; j++) {
    if (numeros[j] < numeros[indiceMenor]) {
      indiceMenor = j;
    }
  }

  if (indiceMenor !== i) {
    let temp = numeros[i];
    numeros[i] = numeros[indiceMenor];
    numeros[indiceMenor] = temp;
  }
}

console.log(numeros); // [2, 3, 5, 7, 9]
//i: Controla a posição atual que está sendo ordenada da esquerda para a direita.

//j: Percorre os elementos restantes à direita de i para buscar um valor menor.

//indiceMenor: Guarda a posição (índice) do menor número encontrado durante a varredura de j.

//Variável auxiliar (temp): Armazena temporariamente o valor de numeros[i] para que ele não seja perdido no momento em que o menor valor for colocado em seu lugar.