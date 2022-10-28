document.addEventListener('DOMContentLoaded', function(){
  let jogadorNome;

     do {
      jogadorNome = prompt('Treinador, qual é seu nome?');
      
      if (jogadorNome === null || jogadorNome === undefined){
        alert('Você precisa de um nome para continuar!');
        } else {
            imprimeMensagem(`Olá! ${jogadorNome}! Escolha seu Pokémon!`);
            guardaNome(jogadorNome);
        } 

    } while (jogadorNome === null || jogadorNome === undefined);

    let jogadorEscolha;
    let computadorEscolha;
    let jogadorPontos = 0;
    let computadorPontos = 0;
    let vencedor;
    

    //Sorteia entre o max de possibilidades definidas passadas por parametro
    function sorteiaPokemon(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    //Adiciona a classe selecionado
    function selecionar(tipo, escolha) {
        document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
      }
  
    //Remove a classe selecionado
      function deselecionar(tipo, escolha) {
        document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
      }

    function jogar (escolha) {
        jogadorEscolha = escolha;
        selecionar('jogador', jogadorEscolha);

        //Escolher Pokemon do Computador
        computadorEscolha = sorteiaPokemon(1, 3);
        selecionar('computador', computadorEscolha);

        //Conferir quem ganhou
        vencedor = calcularEscolha(jogadorEscolha, computadorEscolha);
        
        if(vencedor === 0) {
            imprimeMensagem('Empate!');
        } else if(vencedor === 1) {
            pontoJogador(jogadorPontos);
        } else{
            pontoComputador(computadorPontos);
        }

        setTimeout(function() {
            deselecionar('jogador', jogadorEscolha);
            deselecionar('computador', computadorEscolha);
            imprimeMensagem(`Vamos lá, ${jogadorNome}! É sua vez!`);
          }, 1000);

          if (jogadorPontos >= 5){
            alert('Parabéns! Voce venceu!');
            window.location.reload();
        } else if (computadorPontos >= 5){
            alert('Que pena! Voce perdeu!');
            window.location.reload();
        }
    }

    function imprimeMensagem(texto){
        document.getElementById('mensagem').innerText = texto;

    }

    function guardaNome(nome){
        document.getElementById('jogador-nome').innerText = nome;
    }

    function pontoJogador(){
        imprimeMensagem(`It's super effective, ${jogadorNome}! Você venceu!`);
        jogadorPontos++;
        document.getElementById('jogador-pontos').innerText = jogadorPontos;
    }

    function pontoComputador(){
        imprimeMensagem(`It's not very effective ${jogadorNome}... Você perdeu!`);
        computadorPontos++;
        document.getElementById('computador-pontos').innerText = computadorPontos;
    }
    //Calcular e retorna vencedor (Empate = 0, Jogador = 1, Computador = 2)
    function calcularEscolha(jogador, computador){
        if (jogador === 1 && computador === 1) {
            return 0;
          }
        else if (jogador === 1 && computador === 2) {
            return 2;
          }
        else if (jogador === 1 && computador === 3) {
            return 1;
          }
        else if (jogador === 2 && computador === 1) {
            return 1;
          }
        else if (jogador === 2 && computador === 2) {
            return 0;
          }
        else if (jogador === 2 && computador === 3) {
            return 2;
          }
        else if (jogador === 3 && computador === 1) {
            return 2;
          }
        else if (jogador === 3 && computador === 2) {
            return 1;
          }
        else if (jogador === 3 && computador === 3) {
            return 0;
          }
    }

        
    document.getElementById('jogador-escolha-1').addEventListener('click', function(){
        jogar(1);
    });

    document.getElementById('jogador-escolha-2').addEventListener('click', function(){
        jogar(2);
    });

    document.getElementById('jogador-escolha-3').addEventListener('click', function(){
        jogar(3);
    });

    

});

