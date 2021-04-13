fasetreschaves();

function fasetreschaves() {

    var escolha = prompt("Chaves acordou meio confuso e com medo \ndos espiritos,o que ele deve fazer?\n1-Brincar com a chiquinha?\n 2-Ajudar Sr Madruga?");


    if (escolha == 1) {

        document.write(`<div class="texto">
               <h1> <p><strong>Você está na fase 3!<br> chaves anda muito assustado foi brincar com a chiquinha<br> e esqueceu a lanter ligada mas  segue antes que escureça pois a noite na vila se tornou muito perigoso <br> a lanterna pode apagar a qualquer momento lembre - se a pilha dura pouco ele precisa encontrar Sr Barriga pois ele lhe prometeu pilhas novas Seu tempo acabou não tem chororo!!</p></h></div>
               <a href="file:///C:/Projeto_moduloI/docinicio.html"><button><strong>Novo desafio</strong></button></a>
               <p> <a href="file:///C:/Projeto_moduloI/gameo.html"><button><strong>Desistir do desafio</strong></button></a></p>

                `)
    } else if (escolha == 2) {

        document.write(`<div class="texto"><h1><p><strong>Chaves encontrou a bruxa e paralizou seu tempo acabou ,não tem chororo!</strong></h1></div><a href="file:///C:/Projeto_moduloI/gameo.html"><button>Não quero desafio</button></a><p><a href="file:///C:/Projeto_moduloI/docinicio.html"><button>Quero um no desafio</button></a></p>`)


    } else {
        alert("Seguindo");
        fasetresChaves();


    }

    return escolha;
}