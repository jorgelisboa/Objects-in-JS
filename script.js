var jorge = {
  gitlink: "https://github.com/jorgelisboa?tab=repositories",
  nome: "Jorge",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};
var ana = {
  gitlink: "https://github.com/ThePhoenix0607",
  nome: "Ana",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 5 + jogador.empates;
  return pontos;
}



var jogadores = [jorge, ana];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr><td><a href=" +
      jogadores[i].gitlink +
      ">" +
      jogadores[i].nome +
      "</a></td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  console.log("adicionarVitoria");
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);
