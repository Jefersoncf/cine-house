const catalogo = require("./catalogo");

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1];
  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }
  console.log(filmeProcurado);
}

buscarFilme(2);

function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1];

  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }

  catalogo[codigo - 1].emCartaz = novoStatus;

  console.log("Filme alterado!");
}

let listarCatalogo = ( catalogo) => {
  for ( let i = 0; i < catalogo.length; i++ ) {
    let filme = catalogo[i];
    console.log('-'.repeat(12));
    console.log('Nome do filme: ' + filme.titulo);
    console.log('Ano do filme: ' + filme.anoDoLancamento);
    console.log('Esta em emCartaz: ' + filme.emCartaz);

  }
};
const listarFilmesEmCartaz = () => {
  let filmes = [];
  for (let i = 0; i < catalogo.length; i++) {
    (catalogo[i].emCartaz == true ? filmes.push(catalogo[i]) : "");

  }
  console.table(filmes, ['Titulo', 'Duração', 'Atores']);
}

listarFilmesEmCartaz();