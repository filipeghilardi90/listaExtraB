const prompt = require('prompt-sync')();

// Funções auxiliares
function obterNumero(mensagem) {
    let numero;
    while (true) {
        numero = prompt(mensagem);
        if (!isNaN(numero) && numero.trim() !== '') {
            return parseFloat(numero);
        } else {
            console.log('Entrada inválida. Por favor, digite um número.');
        }
    }
}

function obterInteiro(mensagem) {
    let numero;
    while (true) {
        numero = prompt(mensagem);
        if (!isNaN(numero) && numero.trim() !== '' && Number.isInteger(parseFloat(numero))) {
            return parseInt(numero);
        } else {
            console.log('Entrada inválida. Por favor, digite um número inteiro.');
        }
    }
}

// Funções para os exercícios

function verificarNumero() {
    const numero = obterNumero('Digite um número: ');
    if (numero > 0) {
        console.log('O número é positivo.');
    } else if (numero < 0) {
        console.log('O número é negativo.');
    } else {
        console.log('O número é zero.');
    }
}

function verificarAnoBissexto() {
    const ano = obterInteiro('Digite um ano: ');
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`${ano} é um ano bissexto.`);
    } else {
        console.log(`${ano} não é um ano bissexto.`);
    }
}

function calcularMedia() {
    const nota1 = obterNumero('Digite a primeira nota: ');
    const nota2 = obterNumero('Digite a segunda nota: ');
    const nota3 = obterNumero('Digite a terceira nota: ');

    const media = (nota1 + nota2 + nota3) / 3;

    let conceito;
    if (media >= 90) {
        conceito = 'A';
    } else if (media >= 80) {
        conceito = 'B';
    } else if (media >= 70) {
        conceito = 'C';
    } else if (media >= 60) {
        conceito = 'D';
    } else if (media >= 50) {
        conceito = 'E';
    } else {
        conceito = 'F';
    }

    console.log(`A média é ${media.toFixed(2)} e o conceito é ${conceito}.`);
}

function verificarParidade() {
    const numero = obterInteiro('Digite um número: ');
    if (numero % 2 === 0) {
        console.log('O número é par.');
    } else {
        console.log('O número é ímpar.');
    }
}

function verificarCategoriaNadador() {
    const idade = obterInteiro('Digite a idade do nadador: ');
    let categoria;
    if (idade >= 5 && idade <= 7) {
        categoria = 'Infantil A';
    } else if (idade >= 8 && idade <= 10) {
        categoria = 'Infantil B';
    } else if (idade >= 11 && idade <= 13) {
        categoria = 'Juvenil A';
    } else if (idade >= 14 && idade <= 17) {
        categoria = 'Juvenil B';
    } else if (idade >= 18) {
        categoria = 'Adulto';
    } else {
        categoria = 'Idade inválida';
    }
    console.log(`A categoria do nadador é ${categoria}.`);
}

function verificarDiaSemana() {
    const dia = obterInteiro('Digite um número de 1 a 7: ');
    switch (dia) {
        case 1:
            console.log('Domingo');
            break;
        case 2:
            console.log('Segunda-feira');
            break;
        case 3:
            console.log('Terça-feira');
            break;
        case 4:
            console.log('Quarta-feira');
            break;
        case 5:
            console.log('Quinta-feira');
            break;
        case 6:
            console.log('Sexta-feira');
            break;
        case 7:
            console.log('Sábado');
            break;
        default:
            console.log('Número inválido.');
    }
}

function calcularExpressao() {
    const num1 = obterNumero('Digite o primeiro número: ');
    const num2 = obterNumero('Digite o segundo número: ');
    let operador;
    while (true) {
        operador = prompt('Digite o operador (+, -, *, /): ');
        if (['+', '-', '*', '/'].includes(operador)) {
            break;
        } else {
            console.log('Operador inválido. Por favor, escolha entre +, -, *, /.');
        }
    }

    let resultado;
    if (operador === '/' && num2 === 0) {
        console.log('Erro: Divisão por zero não permitida.');
        return;
    }

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
    }

    console.log(`O resultado da expressão é ${resultado}.`);
}

function verificarEstacaoAno() {
    const estacao = obterInteiro('Digite um número de 1 a 4: ');
    switch (estacao) {
        case 1:
            console.log('Primavera');
            break;
        case 2:
            console.log('Verão');
            break;
        case 3:
            console.log('Outono');
            break;
        case 4:
            console.log('Inverno');
            break;
        default:
            console.log('Número inválido.');
    }
}

function verificarFaixaEtaria() {
    const idade = obterInteiro('Digite a idade da pessoa: ');
    let faixaEtaria;
    if (idade >= 0 && idade <= 12) {
        faixaEtaria = 'Criança';
    } else if (idade >= 13 && idade <= 17) {
        faixaEtaria = 'Adolescente';
    } else if (idade >= 18 && idade <= 59) {
        faixaEtaria = 'Adulto';
    } else if (idade >= 60) {
        faixaEtaria = 'Idoso';
    } else {
        faixaEtaria = 'Idade inválida';
    }

    switch (faixaEtaria) {
        case 'Criança':
            console.log('A pessoa é uma criança.');
            break;
        case 'Adolescente':
            console.log('A pessoa é um adolescente.');
            break;
        case 'Adulto':
            console.log('A pessoa é um adulto.');
            break;
        case 'Idoso':
            console.log('A pessoa é um idoso.');
            break;
        default:
            console.log('Idade inválida.');
    }
}

function calcularIMC() {
    const peso = obterNumero('Digite o peso (kg): ');
    const altura = obterNumero('Digite a altura (m): ');
    const imc = peso / (altura * altura);

    let categoria;
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        categoria = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        categoria = 'Obesidade grau II';
    } else if (imc >= 40) {
        categoria = 'Obesidade grau III';
    }

    console.log(`O IMC é ${imc.toFixed(2)} e a categoria é ${categoria}.`);
}

// Menu para o usuário escolher o exercício
let opcao;
do {
    console.log("\nEscolha o exercício que deseja executar:");
    console.log("1 - Verifique se um número é positivo, negativo ou zero");
    console.log("2 - Verifique se um ano é bissexto");
    console.log("3 - Calcule a média de três números e determine o conceito");
    console.log("4 - Verifique se um número é par ou ímpar");
    console.log("5 - Verifique a categoria de um nadador");
    console.log("6 - Verifique o dia da semana");
    console.log("7 - Calcule o valor de uma expressão matemática simples");
    console.log("8 - Verifique a estação do ano");
    console.log("9 - Verifique a faixa etária de uma pessoa");
    console.log("10 - Calcule o IMC e determine a categoria");
    console.log("0 - Sair");
    opcao = obterInteiro('Digite sua opção: ');

    switch (opcao) {
        case 1:
            verificarNumero();
            break;
        case 2:
            verificarAnoBissexto();
            break;
        case 3:
            calcularMedia();
            break;
        case 4:
            verificarParidade();
            break;
        case 5:
            verificarCategoriaNadador();
            break;
        case 6:
            verificarDiaSemana();
            break;
        case 7:
            calcularExpressao();
            break;
        case 8: verificarEstacaoAno();
            break;
        case 9: verificarFaixaEtaria();
            break;
        case 10: calcularIMC();
            break;
        case 0:
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida. Tente novamente.');

    }
} while (opcao !== 0);