faseChiquidois();

function faseChiquidois() {

    var escolha = prompt("Dona Clotilde convidou a Chiquinha\n para tomar um café na casa dela aceitar ou não\n1-Sim\n2- Não ");


    if (escolha == 1) {

        document.write(`<div class="texto">
         <h1> <p> <strong>Você está na fase 2!<br> Aceitou o convite  da dona Clotilde e foi envenenada<br> perdeu 10 min de jogo agora terá 5 min para recolher todos os itens<br>o kiko disse  que o frango está envenenado pela bruxa do 71<br> mas sabemos que o Kiko menti muito, nessa fase o frango vale 10 minuntos<br> como bonos para as proximas fases</h1></div>

               <p> <a href ="chiquinhafase3.html"><button><strong> Proxima fase</strong></button></a></p>
                <a href = "gameo.html"><button><strong> Desistir do desafio</strong> </button></a>
            `)

    } else if (escolha == 2) {

        document.write(`<div class="texto">
          <h1>  <p> Se livrou do feitiço da bruxa! passou para fase 3!</p><h/1></div>
           <p> <a href = "chiquinhafase3.html"> <button><strong>Proxima fase</strong></button></a></p>
           <p> <a href="gameo.html"><button><strong>Não quero novo desafio</strong></button></a></p> `)

    } else {
        alert("Seguindo");
        faseChiquidois();


    }
    return escolha;

}
