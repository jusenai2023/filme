class Filme {
    titulo: string;
    ano: number;
  
    constructor(titulo: string, ano: number) {
      this.titulo = titulo;
      this.ano = ano;
    }
  }
  
  class Acao extends Filme {
    categoria: string;
  
    constructor(titulo: string, ano: number) {
      super(titulo, ano);
      this.categoria = "Ação";
    }
  }
  
  class Romance extends Filme {
    categoria: string;
  
    constructor(titulo: string, ano: number) {
      super(titulo, ano);
      this.categoria = "Romance";
    }
  }
  
  const listaDeFilmes: (Acao | Romance)[] = [
    new Acao("Mad Max: Estrada da Fúria" ,  2015),
    new Acao("Velozes e Furiosos", 2010),
    new Romance("Simplesmente Acontece", 2014),
    new Romance("Diário de uma Paixão", 2004),
    new Acao("Gladiador",2000),
    new Romance("500 Dias com Ela",2009),
  ];
  
  function recomendarFilmes(categoria: string) {
    const filmesRecomendados = listaDeFilmes.filter((filme) => filme.categoria === categoria);
  
    if (filmesRecomendados.length === 0) {
      console.log(`Não há filmes disponíveis nessa categoria escolhida  ${categoria}.`);
    } else {
      console.log(`recomendados para você ${categoria}:`);
      filmesRecomendados.forEach((filme) => {
        console.log(`${filme.titulo} (${filme.ano})`);
      });
    }
  }