class Cidade {
    constructor(nome) {
        this.nome = nome;
        this.vizinhos = [];
    }

    adicionarVizinho(cidade, distancia) {
        this.vizinhos.push({ cidade, distancia });
    }
}

// Implementação da busca em profundidade (DFS) com rastreamento de cidades visitadas
function buscaProfundidade(origem, destino, visitados = new Set(), caminho = []) {
    // Marca o nó atual como visitado
    visitados.add(origem);

    // Adiciona a cidade atual ao caminho
    caminho.push(origem.nome);

    // Se o nó atual for o destino, retorna o caminho até agora
    if (origem === destino) {
        return caminho;
    }

    // Para cada vizinho não visitado do nó atual, chama a função recursivamente
    for (const vizinho of origem.vizinhos) {
        if (!visitados.has(vizinho.cidade)) {
            // Se encontrar o destino na chamada recursiva, retorna o caminho até agora
            const resultado = buscaProfundidade(vizinho.cidade, destino, visitados, caminho.slice());
            if (resultado) {
                return resultado;
            }
        }
    }

    // Se o destino não foi encontrado a partir deste nó, retorna null
    return null;
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


// Execução da busca em profundidade a partir de Arad até Bucharest com rastreamento do caminho
const caminhoEncontrado = buscaProfundidade(arad, bucharest);

// Verifica se o destino foi encontrado
if (caminhoEncontrado) {
    console.log("O destino foi encontrado.");
    console.log("Caminho percorrido:", caminhoEncontrado.join(" -> "));
} else {
    console.log("O destino não foi encontrado.");
}
