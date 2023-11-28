// let titulo = document.querySelector("h1");
// let paragrafo1 = document.querySelector('.texto__paragrafo');

// titulo.innerHTML = "Hora do Desafio";
// paragrafo1.innerHTML = "Selecione um numero de 1 a 100"; 

let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

   function escreverTextoNaTela(tag, texto){
      let campo = document.querySelector(tag);
      campo.innerHTML = texto;
      responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
   }



   function exibirMensagemInicial() {
   escreverTextoNaTela ('h1', 'Hora do Desafio');
   escreverTextoNaTela ('.texto__paragrafo', 'Selecione um numero de 1 a 10');
   }

   exibirMensagemInicial();

   function verificarChute() {
      let chute = document.querySelector("input").value;

      if(chute == numeroSecreto){
         escreverTextoNaTela('h1', 'Você acertou!');
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
         let mensagemTentativa = `você tentou ${tentativas} ${palavraTentativa}`;
         
            escreverTextoNaTela('.texto__paragrafo', mensagemTentativa);
            document.getElementById ('reiniciar').removeAttribute('disabled');
      } else {
         if(chute > numeroSecreto){
               escreverTextoNaTela('.texto__paragrafo', 'O número secreto é menor');
      } else {
         escreverTextoNaTela('.texto__paragrafo', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
      
   }
   }

   function gerarNumeroAleatorio() {
      let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
      let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

      if(quantidadeDeElementosNaLista == numeroLimite){
         listaDeNumerosSorteados = []; 
      } 

      if (listaDeNumerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio();
      } else {
         listaDeNumerosSorteados.push(numeroEscolhido)
         return numeroEscolhido 
      }
   }

   function limparCampo() {
      chute = document.querySelector('input');
      chute.value = '';
      
   }


   function reiniciarJogo() {
      numeroSecreto = gerarNumeroAleatorio();
      limparCampo();
      tentativas = 1;
      exibirMensagemInicial();
      document.getElementById('reiniciar').setAttribute('disabled', true);
   }