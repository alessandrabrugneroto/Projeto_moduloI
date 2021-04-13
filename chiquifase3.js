faseChiquitres();

function faseChiquitres() {

    var escolha = prompt(" Chiquinha pegou catapora e agora ? \nSr Madruga disse para chiquinha ficar em casa ela fica ou não?\n1-Sim \n2-Não");


    if (escolha == 1) {

        document.write(`<div class="texto">
         <h1> <strong><p>Parabéns você ganhou jogo!<br> Obedeceu e se livrou dos espiritos zombeteiros que assombra a  vila<br> ganhou 10 min de bonos para proxima fase <h1></div>
         <p>  <br> <a href ="file:///C:/Projeto_moduloI/docpers.html"><button><strong>Escolha outro personagem para o proximo desafio</strong></button></a></p>
            <a href = "file:///C:/Projeto_moduloI/gameo.html"><button><strong> Desistir do desafio</strong></button></a></p>
            `)

    } else if (escolha == 2) {

        document.write(`<div class="texto">
            <p> Saiu a noite e encontrou os espiritos zombeiteiros ! O seu jogo acabou não tem chororo!!! <br></div> <div class=" button"><a href = "file:///C:/Projeto_moduloI/docinicio.html"><button><strong>Escolha outro personagem para o proximo desafio</strong></button></a> <br> <a href="file:///C:/Projeto_moduloI/gameo.html"><button><strong>Não quero novo desafio</strong></button></a>`)

    } else {
        alert("Seguindo");
        faseChiquitres();


    }
    return escolha;

}