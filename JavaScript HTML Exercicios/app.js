let cabecalho = document.querySelector('h1');
cabecalho.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('botao foi clicado');  
    media();
    maior();
    multiplicaPorSi();
}

function botaoAlert() {
    alert('Teste JS');
}

function botaoPrompt() {
    let cidade = prompt('Qual sua cidade?')
    alert(`Estive em ${cidade} e lembrei de voce`);
}

function botaoSoma() {
    let num1 = parseInt(prompt('Digite um num'));
    let num2 = parseInt(prompt('Digite outro num'));
    let soma = num1 + num2;
    alert(`A som é ${soma}`);    
}

function media(n1, n2, n3) {
     n1 = parseInt(prompt('Digite um num'));
     n2 = parseInt(prompt('Digite um num'));
     n3 = parseInt(prompt('Digite um num'));
    
    return console.log(`a media é ${(n1+n2+n3)/3}`);
}

function maior(n1, n2) {
     n1 = parseInt(prompt('Digite um num'));
     n2 = parseInt(prompt('Digite um num'));

    return console.log(`o maior é ${Math.max(n1,n2)}`);
}

function multiplicaPorSi(n1) {
     n1 = parseInt(prompt('Digite um num'));
    
    return console.log(`a multiplicacao pelo proprio numero é ${parseInt(n1*n1)}`);
}

function botaoIMC() {
    let altura = 0;
    let peso = 0;
    let calculoIMC = 0;
    altura = parseFloat(prompt('Digite sua altura'));
    peso = parseFloat(prompt('Digite seu peso'));
    calculo = peso / (altura * altura);
    console.log(`altura ${altura}, Peso ${peso}, IMC${calculo}`)
    
    alert(`Seu IMC é ${calculo}`);


    //Para um adulto de 70 kg e 1, 70 m:
    //Altura ao quadrado: 1, 70 × 1, 70 = 2, 89
    //Divisão do peso: 70 ÷ 2, 89 = 24, 22

    //Menor que 18, 5: Magreza
    //Entre 18, 5 e 24, 9: Normal
    //Entre 25, 0 e 29, 9: Sobrepeso
    //Entre 30, 0 e 39, 9: Obesidade
    //Maior que 40, 0: Obesidade Grave
}

function botaoFatorial() {
    let numero = 0;
    let fatorial = 0;
    
    numero = parseInt(prompt('Digite um numero para fatorial'));
    fatorial = numero;
    console.log(`Fatorial ${fatorial}x ${numero} `)
    for (let i = 0; i < 5; i++) {
        console.log("O número atual é: " + i);
    }
    for (let i = 2; i < numero; i++) {
        console.log(`no for ${fatorial}x ${i} `)
        fatorial *= i ;
        console.log(`Fatorial ${fatorial}x ${i} `)
    }

    alert(`Fatorial de ${numero} = ${fatorial}.`);
}