fasedoisMadruga();

function fasedoisMadruga() {

    var escolha = prompt(" Sr Madruga esta apertado de ir ao banheiro\n mas está vendendo churros ele pede \n para o chaves tomar conta dos churros?\n Lembre-se ele terá que vender antes que escureça \n a noite os espiritos aparecem\n1-Sim\n2-Não ");


    if (escolha == 1) {

        document.write(`<div class="texto">
               <h1> <p> <strong>Você está na fase 2!<br> Sr Madruga deixou o Chaves tomar conta dos churrus<br> Chaves comeu todos os churros ,volte para primeira fase </p> <h1></div>
              <p> <a href="Sr.madrugafase1.html"><button><strong> Voltar primeira fase</strong></button></a></p>
               <a href="gameo.html"><button><strong>Desistir do desafio</strong></button></a></p>

                `)
    } else if (escolha == 2) {

        document.write(`<div class="texto"><h1><p><strong>Sr Madruga deixou a banca  de churros sozinha <br> quando voltou tinha uns espiritos zombeteiros rodiando a banca <br>ele terá apenas dez minutos para vender o restante <br></h1></div>
        <p><a href="Sr.Madruga3.html"><button><strong>Proxima fase</strong></button></a></p>
        <a href="gameo.html"><button><strong>Desistir do desafio</strong></button></a>`)


    } else {
        alert("Seguindo");
        fasedoisMadruga();


    }

    return escolha;
}
