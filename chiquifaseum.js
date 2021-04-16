fasechiquinha();

function fasechiquinha() {

    var escolha = prompt(" Chiquinha esta chorando ela quer sair para brincar\nmas Sr Madruga precisa ajuda\n1-Pegar patinete?\n 2-Ajudar Sr Madruga?");


    if (escolha == 1) {

        document.write(`<div class="texto">
         <h1> <p> <strong> Você está na fase 1!<br> A Chiquinha pegou o patinete antes de escurecer  passou para proxima fase<br> ela terá 10 minutos para recolher todos os itens e as vezes no caminho aparece o Kiko <br>ele tem inveja da chiquinha, se ele encontrar com a chiquinha rouba o objeto dela<br>então ela tera que pegar novamente o objeto e perde tempo no jogo se a chiqinha<br> conseguir pegar o pirulito primeiro ganha mais 10 minutos no jogo para as proximas fases</h1></div>
          <p> <a href ="chiquinhafasedois.html"><button><strong> Proxima fase</strong></button></a> </p>
           <p> <a href = "gameo.html"><button><strong> Desistir do desafio</strong></button> </a></p>

            `)
    } else if (escolha == 2) {

        document.write(`<div class="texto">
           <h1> <p><strong> Chiquinha ficou de castigo  acabou seu tempo!</strong></h1></div>
             <a href = "gameo.html"><button> Não quero desafio</button></a>
           <p>  <a href="3index.html"><button>Quero um novo desafio</button></a></p> `)

    } else {
        alert("Seguindo");
        faseChiquinha();


    }
    return escolha;

}