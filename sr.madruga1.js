faseumMadruga();

function faseumMadruga() {

    var escolha = prompt("Sr Barriga chegou para cobrar o aluguel do Sr Madruga diz o Kiko que o Sr Barriga tem assombrado quem não paga o aluguel,Sr Madruga deve ou não pagar o aluguel?\n1-Sim\n2-Não");


    if (escolha == 1) {

        document.write(`<div class="texto">
                <h1><strong><p>Você está na fase 1!<br>Sr Madruga pagou o aluguel e se livrou da assombração <br>na vila se tornou muito perigoso  a lanterna pode apagar a qualquer momento<br>lembre - se a pilha dura pouco  Sr Madruga terá 15 minutos<br> para recolher todos os itens e fazer os churros</p></h1></div>
               <p><a href="Sr.madrugafase2.html"><button><strong>Proxima fase</strong></button></a></p>
                <p><a href="gameo.html"><button><strong>Desistir do desafio</strong></button></a></p>

                `)
    } else if (escolha == 2) {

        document.write(`<div class="texto"><h1><strong><p>Você está na fase 1! <br>Sr Madruga não pagou o aluguel,não tem chororo!<br>terá apenas 5 min para vender os churros ele precisa<br> juntar o dinheiro para pagar o aluguel antes que escureça <br> </h1> </div>
        <p> <a href="Sr.madrugafase2.html"><button><strong>Proxima fase</strong></button></a></p>
       <p><a href="gameo.html"><button><strong>Não quero novo desafio</strong></button></a></strong></p>`)


    } else {
        alert("Seguindo");
        faseumMadruga();


    }

    return escolha;
}
