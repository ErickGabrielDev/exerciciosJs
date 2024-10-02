//Faça um script que leia três notas reais, calcule e mostre a média dessas notas.

let nota1 = parseFloat(prompt('Digita a primeira nota: '));
let nota2 = parseFloat(prompt('Digita a segunda nota: '));
let nota3 = parseFloat(prompt('Digita a terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3;

alert(`A média desse aluno foi: ${media.toFixed(2)}`);

