fasetresMadruga();

function fasetresMadruga() {

    var escolha = prompt("Dona Florinda está enfurecida atrás do Sr Madruga que bateu no Kiko\nele deve entrar na casa da Dona Clotilde para se esconder?\n1-Sim\n2-Não");


    if (escolha == 1) {

        document.write(`<div class="texto">
               <h1> <p> <strong>Parabéns chegou na fase 3 ganhou o jogo!!<br> Sr Madruga entrou na casa da Dona Clotilde e se escondeu<br> ganhou dez minutos de bonus para proxima fase<br>mas logo saiu pois assustou com o Satanás<br> o gato da Dona Clotilde, dizem que o gato era um home<br> que elatransformou em um gato ganhou 10 minutos de bonus<br></h1></div>
               <p><a href="file:///C:/Projeto_moduloI/docinicio.html"><button><strong>Novo desafio</strong></button></a></p>
               <p><a href="file:///C:/Projeto_moduloI/gameo.html"><button><strong>Desistir do desafio</strong></button></a></p>

                `)
    } else if (escolha == 2) {

        document.write(`<div class="texto"><h1><p><strong>Você está na fase 3!<br> Dona Florinda deu um bofetão em Sr Madruga <br>Você perdeu o jogo não tem chororo!</strong><br><h1></div>
         <p><a href="file:///C:/Projeto_moduloI/gameo.html"><button><strong>Não quero desafio</strong></button></a></p>
        <p><a href="file:///C:/Projeto_moduloI/docinicio.html"><button><strong>Quero um no desafio</strong></button></a></p>`)


    } else {
        alert("Seguindo");
        fasetresMadruga();


    }

    return escolha;
}