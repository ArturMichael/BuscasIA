class Cidade {
    constructor(nome) {
        this.nome = nome;
        this.vizinhos = [];
    }
  
    adicionarVizinho(vizinho, distancia) {
        this.vizinhos.push({ cidade: vizinho, custo: distancia });
    }
  }
  
  class Vizinho {
    constructor(cidade, custo) {
        this.cidade = cidade;
        this.custo = custo;
    }
  }
  
  function buscaGulosa(inicio, objetivo) {
    let abertos = [inicio]; // Nós ainda não avaliados
    let fechados = []; // Nós já avaliados
    let caminho = {};
  
    // Função de custo heurístico (distância até o objetivo)
    function custoHeuristico(cidade) {
        // Defina a distância heurística diretamente aqui
        const distancias = {
          "Arad": 366,
          "Zerind": 374,
          "Oradea": 380,
          "Sibiu": 253,
          "Timisoara": 329,
          "Lugoj": 244,
          "Mehadia": 241,
          "Dobreta": 242,
          "Craiova": 160,
          "Rimnicu Vilcea": 193,
          "Fagaras": 178,
          "Pitesti": 98,
          "Bucharest": 0,
          "Giurgiu": 77,
          "Urziceni": 80,
          "Hirsova": 151,
          "Eforie": 161,
          "Vaslui": 199,
          "Iasi": 226,
          "Neamt": 234
        };
        return distancias[cidade.nome];
    }
  
    caminho[inicio.nome] = { custo: 0, pai: null }; // O custo para chegar à cidade inicial é 0 e não tem pai
  
    while (abertos.length > 0) {
        // Encontrando a cidade com o menor custo heurístico
        let cidadeAtual = abertos.reduce((minCidade, cidade) => custoHeuristico(cidade) < custoHeuristico(minCidade) ? cidade : minCidade, abertos[0]);
  
        if (cidadeAtual === objetivo) {
            let caminhoFinal = [];
            while (cidadeAtual !== null) {
                caminhoFinal.unshift(cidadeAtual.nome);
                cidadeAtual = caminho[cidadeAtual.nome].pai;
            }
            return caminhoFinal;
        }
  
        // Removendo a cidade atual da lista de nós abertos
        abertos = abertos.filter(cidade => cidade !== cidadeAtual);
        fechados.push(cidadeAtual);
  
        cidadeAtual.vizinhos.forEach(vizinho => {
            if (!fechados.includes(vizinho.cidade) && !abertos.includes(vizinho.cidade)) { // Se o vizinho ainda não foi avaliado
                caminho[vizinho.cidade.nome] = { pai: cidadeAtual }; // Define o pai do vizinho
                abertos.push(vizinho.cidade); // Adiciona o vizinho à lista de nós abertos
            }
        });
    }
    return null; // Se não encontrar o objetivo, retorna null
  }
  
  // Criação das cidades
  const arad = new Cidade("Arad");
  const zerind = new Cidade("Zerind");
  const oradea = new Cidade("Oradea");
  const sibiu = new Cidade("Sibiu");
  const timisoara = new Cidade("Timisoara");
  const lugoj = new Cidade("Lugoj");
  const mehadia = new Cidade("Mehadia");
  const dobreta = new Cidade("Dobreta");
  const craiova = new Cidade("Craiova");
  const rimnicuVilcea = new Cidade("Rimnicu Vilcea");
  const fagaras = new Cidade("Fagaras");
  const pitesti = new Cidade("Pitesti");
  const bucharest = new Cidade("Bucharest");
  const giurgiu = new Cidade("Giurgiu");
  const urziceni = new Cidade("Urziceni");
  const hirsova = new Cidade("Hirsova");
  const eforie = new Cidade("Eforie");
  const vaslui = new Cidade("Vaslui");
  const iasi = new Cidade("Iasi");
  const neamt = new Cidade("Neamt");
  
  // Adicionando os vizinhos
  arad.adicionarVizinho(sibiu, 140);
  arad.adicionarVizinho(timisoara, 118);
  arad.adicionarVizinho(zerind, 75);
  
  zerind.adicionarVizinho(arad, 75);
  zerind.adicionarVizinho(oradea, 71);
  
  oradea.adicionarVizinho(zerind, 71);
  oradea.adicionarVizinho(sibiu, 151);
  
  sibiu.adicionarVizinho(arad, 140);
  sibiu.adicionarVizinho(fagaras, 99);
  sibiu.adicionarVizinho(oradea, 151);
  sibiu.adicionarVizinho(rimnicuVilcea, 80);
  
  timisoara.adicionarVizinho(arad, 118);
  timisoara.adicionarVizinho(lugoj, 111);
  
  lugoj.adicionarVizinho(timisoara, 111);
  lugoj.adicionarVizinho(mehadia, 70);
  
  mehadia.adicionarVizinho(lugoj, 70);
  mehadia.adicionarVizinho(dobreta, 75);
  
  dobreta.adicionarVizinho(mehadia, 75);
  dobreta.adicionarVizinho(craiova, 120);
  
  craiova.adicionarVizinho(dobreta, 120);
  craiova.adicionarVizinho(pitesti, 138);
  craiova.adicionarVizinho(rimnicuVilcea, 146);
  
  rimnicuVilcea.adicionarVizinho(sibiu, 80);
  rimnicuVilcea.adicionarVizinho(pitesti, 97);
  rimnicuVilcea.adicionarVizinho(craiova, 146);
  
  fagaras.adicionarVizinho(sibiu, 99);
  fagaras.adicionarVizinho(bucharest, 211);
  
  pitesti.adicionarVizinho(rimnicuVilcea, 97);
  pitesti.adicionarVizinho(craiova, 138);
  pitesti.adicionarVizinho(bucharest, 101);
  
  bucharest.adicionarVizinho(fagaras, 211);
  bucharest.adicionarVizinho(pitesti, 101);
  bucharest.adicionarVizinho(giurgiu, 90);
  bucharest.adicionarVizinho(urziceni, 85);
  
  giurgiu.adicionarVizinho(bucharest, 90);
  
  urziceni.adicionarVizinho(bucharest, 85);
  urziceni.adicionarVizinho(hirsova, 98);
  urziceni.adicionarVizinho(vaslui, 142);
  
  hirsova.adicionarVizinho(urziceni, 98);
  hirsova.adicionarVizinho(eforie, 86);
  
  eforie.adicionarVizinho(hirsova, 86);
  
  vaslui.adicionarVizinho(urziceni, 142);
  vaslui.adicionarVizinho(iasi, 92);
  
  iasi.adicionarVizinho(vaslui, 92);
  iasi.adicionarVizinho(neamt, 87);
  
  neamt.adicionarVizinho(iasi, 87);
  
  // Execução da busca Gulosa
  const resultadoGulosa = buscaGulosa(arad, bucharest);
  
  if (resultadoGulosa !== null) {
      console.log("Caminho encontrado (Busca Gulosa):");
      console.log(resultadoGulosa);
  } else {
      console.log("Caminho não encontrado (Busca Gulosa).");
  }
  
  