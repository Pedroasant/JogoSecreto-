let numerosScretosanteriores = [];
let numeroSecreto = gerarNumeroAletorio();
let tentantativas = 1;

exibirMenssagemIncial();



function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAletorio();
    LimparCampo();
    tentantativas = 1;
    exibirMenssagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMenssagemIncial() {

    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p','Escreva o numero de 1 a 10');

}


// logica de verificação dos numeros 

function verificarChute() {

    let chute = document.querySelector('input').value; // trazer valores dos inputs 
    
    if (chute == numeroSecreto) {

        exibirTextoNaTela('h1', 'Acertou!');
        let tentantativa = tentantativas > 1 ? `${tentantativas} Tentativas` : 'uma Tentativa';
        let menssageTentativas = `Você acertou com  ${tentantativa}`;

        exibirTextoNaTela('p', menssageTentativas);   

        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('verificarChute').removeAttribute('enabled');

    }else {

        if (chute > numeroSecreto){

            exibirTextoNaTela('p', 'Numero Secreto é menor ')

        }else{ 

            exibirTextoNaTela('p', 'Numero Secreto é maior')

        }

    }

    tentantativas++;
    LimparCampo();  

}

function gerarNumeroAletorio() {
    
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeNumeronaLista = numerosScretosanteriores.length;


    if(quantidadeNumeronaLista == 8) {
        numerosScretosanteriores = [];
    }
    
    if(numerosScretosanteriores.includes(numeroEscolhido)){
        gerarNumeroAletorio();
    } else{


        numerosScretosanteriores.push(numeroEscolhido);
        console.log(numerosScretosanteriores);
        return numeroEscolhido;
        
    }
    
}
function LimparCampo(){

    chute = document.querySelector('input');
    chute.value ='';

}





