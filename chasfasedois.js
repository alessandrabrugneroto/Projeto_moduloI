 fasedoischaves();

 function fasedoischaves() {

     var escolha = prompt("Para variar o chaves esta com fome \n1 - aceitar o frango da bruxa ? \n 2 - aceitar o lanche de pressunto do Sr barriga ? ");


     if (escolha == 1) {

         document.write(`<div class="texto">
               <h1> <p> <strong>Você está na fase 2!<br> o chaves perdeu o dejejum <br> comeu o frango e passou mal mas  segue antes que escureça pois a noite na vila se tornou muito perigoso <br> a lanterna pode apagar a qualquer momento, lembre - se a pilha dura pouco<br>  agora terá 5 minutos para recolher todos os itens e as vezes no caminho <br>aparece a Dona Clotilde e ele paraliza, desvie pois a cada parada o chaves perdi tempo.</div> </p> <p> <a href="chasfase3.html"><button>Proxima fase</button> </a><br></p>
               <a href="gameo.html"><button>Desistir do desafio</button> </a>

                `)
     } else if (escolha == 2) {

         document.write(`<div class="texto"><h1><p><strong>Chaves encontrou a bruxa e paralizou seu tempo acabou ,não tem chororo!<br></div>  </strong></p></h1><br><a href="gameo.html"> <button>Não quero desafio</button> </a> <p> <a href="3index.html"><button>Quero um no desafio</button></a></p>`)


     } else {
         alert("Seguindo");
         fasedoisChaves();


     }

     return escolha;
 }
