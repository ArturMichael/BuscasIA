class Cidade {
    constructor(nome) {
        this.nome = nome;
        this.vizinhos = [];
        this.visitado = false;
    }

    adicionarVizinho(vizinho) {
        this.vizinhos.push(vizinho);
    }
}

class Vizinho {
    constructor(cidade, distancia) {
        this.cidade = cidade;
        this.distancia = distancia;
    }
}

// Função da busca em largura
function buscaEmLargura(inicio, objetivo) {
    let fila = [];
    inicio.visitado = true;
    fila.push(inicio); 

    while (fila.length > 0) {
        let cidadeAtual = fila.shift(); 

        console.log(`Visitando a cidade: ${cidadeAtual.nome}`);

        if (cidadeAtual === objetivo) { 
            console.log(`Encontrou o objetivo: ${cidadeAtual.nome}`);
            return true;
        }

        for (let vizinho of cidadeAtual.vizinhos) { 
            if (!vizinho.cidade.visitado) { 
                vizinho.cidade.visitado = true;
                fila.push(vizinho.cidade); 
            }
        }
    }
    return false;
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
arad.adicionarVizinho(new Vizinho(sibiu, 140));
arad.adicionarVizinho(new Vizinho(timisoara, 118));
arad.adicionarVizinho(new Vizinho(zerind, 75));

zerind.adicionarVizinho(new Vizinho(arad, 75));
zerind.adicionarVizinho(new Vizinho(oradea, 71));

oradea.adicionarVizinho(new Vizinho(zerind, 71));
oradea.adicionarVizinho(new Vizinho(sibiu, 151));

sibiu.adicionarVizinho(new Vizinho(arad, 140));
sibiu.adicionarVizinho(new Vizinho(fagaras, 99));
sibiu.adicionarVizinho(new Vizinho(oradea, 151));
sibiu.adicionarVizinho(new Vizinho(rimnicuVilcea, 80));

timisoara.adicionarVizinho(new Vizinho(arad, 118));
timisoara.adicionarVizinho(new Vizinho(lugoj, 111));

lugoj.adicionarVizinho(new Vizinho(timisoara, 111));
lugoj.adicionarVizinho(new Vizinho(mehadia, 70));

mehadia.adicionarVizinho(new Vizinho(lugoj, 70));
mehadia.adicionarVizinho(new Vizinho(dobreta, 75));

dobreta.adicionarVizinho(new Vizinho(mehadia, 75));
dobreta.adicionarVizinho(new Vizinho(craiova, 120));

craiova.adicionarVizinho(new Vizinho(dobreta, 120));
craiova.adicionarVizinho(new Vizinho(pitesti, 138));
craiova.adicionarVizinho(new Vizinho(rimnicuVilcea, 146));

rimnicuVilcea.adicionarVizinho(new Vizinho(sibiu, 80));
rimnicuVilcea.adicionarVizinho(new Vizinho(pitesti, 97));
rimnicuVilcea.adicionarVizinho(new Vizinho(craiova, 146));

fagaras.adicionarVizinho(new Vizinho(sibiu, 99));
fagaras.adicionarVizinho(new Vizinho(bucharest, 211));

pitesti.adicionarVizinho(new Vizinho(rimnicuVilcea, 97));
pitesti.adicionarVizinho(new Vizinho(craiova, 138));
pitesti.adicionarVizinho(new Vizinho(bucharest, 101));

bucharest.adicionarVizinho(new Vizinho(fagaras, 211));
bucharest.adicionarVizinho(new Vizinho(pitesti, 101));
bucharest.adicionarVizinho(new Vizinho(giurgiu, 90));
bucharest.adicionarVizinho(new Vizinho(urziceni, 85));

giurgiu.adicionarVizinho(new Vizinho(bucharest, 90));

urziceni.adicionarVizinho(new Vizinho(bucharest, 85));
urziceni.adicionarVizinho(new Vizinho(hirsova, 98));
urziceni.adicionarVizinho(new Vizinho(vaslui, 142));

hirsova.adicionarVizinho(new Vizinho(urziceni, 98));
hirsova.adicionarVizinho(new Vizinho(eforie, 86));

eforie.adicionarVizinho(new Vizinho(hirsova, 86));

vaslui.adicionarVizinho(new Vizinho(urziceni, 142));
vaslui.adicionarVizinho(new Vizinho(iasi, 92));

iasi.adicionarVizinho(new Vizinho(vaslui, 92));
iasi.adicionarVizinho(new Vizinho(neamt, 87));

neamt.adicionarVizinho(new Vizinho(iasi, 87));

// Execução da busca em largura
if (buscaEmLargura(arad, bucharest)) {
    console.log("Caminho encontrado!");
} else {
    console.log("Caminho não encontrado!");
}
  