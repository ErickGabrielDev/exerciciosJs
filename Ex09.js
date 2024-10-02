//Faça um script que receba o salario do empregado e se o salario for menor que 2500,00 dar um aumento de 25%, exiba o salario anterior e salario novo com aumento.

let salario = parseFloat(prompt('Digite o seu salário:'));

if (salario < 2500) {
    let aumento = salario * 0.25;
    let salarioNovo = salario + aumento;

    alert(`Salário anterior: R$${salario.toFixed(2)}\nSalário novo: R$${salarioNovo.toFixed(2)}`);

} else {
    alert('O salário não é menor que R$2500,00 e não será ajustado.');
}
