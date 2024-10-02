//Faça um script que receba a altura de um degrau de uma escada e a altura que um pedreiro deseja alcançar utilizando essa escada, calcule e mostre quantos degraus ele deverá subir para atingir seu objetivo, os valores fornecidos devem ser em metros.

let alturaDegrau = parseFloat(prompt('Digite a altura do degrau (em metros):'));
let alturaDesejada = parseFloat(prompt('Digite a altura que deseja alcançar (em metros):'));

let degraus_necessarios = Math.ceil(alturaDesejada / alturaDegrau);

alert(`Você precisará subir ${degraus_necessarios} degraus.`);
