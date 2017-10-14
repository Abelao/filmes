/// Variaveis, N = quantidade, A = atual, Q = quantos?
var todostemas = []; // array com todos os temas, strings
var qtemas = 1; // numero total de temas na lista
var ntemas = []; // array com o número dos temas sorteados
var atema = 1; // tema atual
var nrodadas = 1; // numero de rodadas
var rodadaatual = 0; // numero da rodada atual



// Gerando Array com todos os temas
  function tema() {
    var listaDeTemas = document.getElementById("areatemas").value; // lê a lista
    todostemas = listaDeTemas.split("\n"); // cria array
    qtemas = todostemas.length; // lê a quantidade de temas da lista
    document.getElementById("btinfinito").innerHTML = "<b>" + qtemas + " Filmes</b>"; // Joga no botão inicial o total de temas
  }

// Funcoes de mecanica
  function modojogo(x) {
    delay(); // animação
    var listatemas = [];
    nrodadas = x;
    i = 0;
    while (i < x) {
      var randomtema = Math.floor(Math.random() * qtemas) // randomiza 1 tema dentre todos
      var vouf = listatemas.includes(randomtema); // verifica se o tema sorteado já está na array de temas
      if (!vouf) {
        listatemas.push(randomtema); // inclui o numero do tema na array
        i ++
      }
    }
    ntemas = listatemas;
    mudabotoes();
    proximaRodada();
  }

  function proximaRodada() {
    delay();
    rodadaatual++;
    mudaTitulo(rodadaatual); // muda o cabelaçho
    mudaTexto(rodadaatual-1); // muda o texto principal com o item da array
  }

  function fimdejogo () {
    window.location.reload();
  }

  function menuinicio() {
    if (confirm("------------------------------------------\n## ATENÇÃO ##\nVocê irá perder todo progresso.\n\nVoltar para tela inicial?") == true) {
      fimdejogo();
    }
  }

  function menureiniciar() {
    alert("Opção ainda não implementada")
  }

  function menuvoltar() {
    alert("Opção ainda não implementada")
  }

  function menuconfig() {
    alert("Opção ainda não implementada")
  }


// Funcções para mudar o DOM

  function mudaTitulo(x) {
    if (x <= nrodadas) {
      document.getElementById("Mtopo").innerHTML = "Rodada " + x + " / " + nrodadas; // Mostra qual rodada está
    } else {
      document.getElementById("Mtopo").innerHTML = "FIM DA BRINCADEIRA!";
      document.getElementById("btproximo").classList.toggle('somedaqui');  // Torna visível/invisível
      document.getElementById("btrecarregar").classList.toggle('somedaqui');
    }
  }

  function mudaTexto(x) {
    var tema = ntemas[x]; // verifica qual o numero do tema
    if (x+1 <= nrodadas) {
      document.getElementById("Mtexto").innerHTML = "<b>" + todostemas[tema] + "</b>";
    } else {
      document.getElementById("Mtexto").classList.toggle('somedaqui');
      document.getElementById("h41").classList.toggle('somedaqui');
      document.getElementById("h42").classList.toggle('somedaqui');
      document.getElementById("h43").classList.toggle('somedaqui');
    }
  }

  function mudabotoes() {
    // torna visivel ou invisivel
    document.getElementById("btproximo").classList.toggle('somedaqui');
    document.getElementById("btmodos").classList.toggle('somedaqui');
    document.getElementById("bmhome").classList.toggle('somedaqui');
    document.getElementById("bmrefresh").classList.toggle('somedaqui');
    document.getElementById("bmback").classList.toggle('somedaqui');
  }

// Funcao com as animações visuais
  function delay() {

    document.getElementById("Mtexto").classList.add("aparecendo");
    setTimeout(
        function() { document.getElementById("Mtexto").classList.remove("aparecendo"); },
      2000);

    document.getElementById("btproximo").classList.add("disabled");
    document.getElementById("btproximo").disabled = true;
    setTimeout(
        function() { document.getElementById("btproximo").classList.remove("disabled"); },
      2000);
    setTimeout(
        function() { document.getElementById("btproximo").disabled = false; },
      3000);

    document.getElementById("Mtopo").classList.add("indoprala");
    setTimeout(
        function() { document.getElementById("Mtopo").classList.remove("indoprala"); },
      2000);
  }
