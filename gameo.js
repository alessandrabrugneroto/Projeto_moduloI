fasechaves();

function() {

    var escolha = prompt("Não desista escolha um novo personagem");


    while (escolha == 1) {

        document.write(`<div class="texto">
              <h1> <p> <strong>Você está na fase 1!<br> o chaves comeu o bolo envenenado paralizou por alguns instantes <br>mas  segue antes que escureça pois a noite na vila se tornou muito perigoso <br> a lanterna pode apagar a qualquer momento, lembre - se a pilha dura pouco<br>  ele terá 10 minutos para recolher todos os itens e as vezes no caminho <br>aparece o  Sr Madruga para pedir algo, desvie pois a cada parada o chaves perdi tempo<br> </h1></div><h1><a href="file:///C:/Projeto_moduloI/chavesfase2.html"><button>Proxima fase </button></a> <br>
              <p> <a href="file:///C:/Projeto_moduloI/gameo.html"><button>Desistir do desafio </button></a></p></h1>

                `)
    } else if (escolha == 2) {

        document.write(`<div class="texto"><h1><strong><p>Chaves  entrou no barril e dormiu <br>acabou seu tempo!</div><br></h1> <P><a href="file:///C:/Projeto_moduloI/gameo.html"><button>Não quero desafio</button></p></a><a href="file:///C:/Projeto_moduloI/docinicio.html"><button>Quero um no desafio</button></a><strong></div>`)


    } else {
        alert("Seguindo");
        faseChaves();


    }

    return escolha;
}

{