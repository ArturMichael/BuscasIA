class Cidade {
    nome;
    vizinhos;

    constructor(nome) {
        this.nome = nome;
        this.vizinhos = [];
    }

    adicionarVizinho(vizinho) {
        this.vizinhos.push({ cidade: vizinho });
    }
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
arad.adicionarVizinho(sibiu);
arad.adicionarVizinho(timisoara);
arad.adicionarVizinho(zerind);

zerind.adicionarVizinho(arad);
zerind.adicionarVizinho(oradea);

oradea.adicionarVizinho(zerind);
oradea.adicionarVizinho(sibiu);

sibiu.adicionarVizinho(arad);
sibiu.adicionarVizinho(fagaras);
sibiu.adicionarVizinho(oradea);
sibiu.adicionarVizinho(rimnicuVilcea);

timisoara.adicionarVizinho(arad);
timisoara.adicionarVizinho(lugoj);

lugoj.adicionarVizinho(timisoara);
lugoj.adicionarVizinho(mehadia);

mehadia.adicionarVizinho(lugoj);
mehadia.adicionarVizinho(dobreta);

dobreta.adicionarVizinho(mehadia);
dobreta.adicionarVizinho(craiova);

craiova.adicionarVizinho(dobreta);
craiova.adicionarVizinho(pitesti);
craiova.adicionarVizinho(rimnicuVilcea);

rimnicuVilcea.adicionarVizinho(sibiu);
rimnicuVilcea.adicionarVizinho(pitesti);
rimnicuVilcea.adicionarVizinho(craiova);

fagaras.adicionarVizinho(sibiu);
fagaras.adicionarVizinho(bucharest);

pitesti.adicionarVizinho(rimnicuVilcea);
pitesti.adicionarVizinho(craiova);
pitesti.adicionarVizinho(bucharest);

bucharest.adicionarVizinho(fagaras);
bucharest.adicionarVizinho(pitesti);
bucharest.adicionarVizinho(giurgiu);
bucharest.adicionarVizinho(urziceni);

giurgiu.adicionarVizinho(bucharest);

urziceni.adicionarVizinho(bucharest);
urziceni.adicionarVizinho(hirsova);
urziceni.adicionarVizinho(vaslui);

hirsova.adicionarVizinho(urziceni);
hirsova.adicionarVizinho(eforie);

eforie.adicionarVizinho(hirsova);

vaslui.adicionarVizinho(urziceni);
vaslui.adicionarVizinho(iasi);

iasi.adicionarVizinho(vaslui);
iasi.adicionarVizinho(neamt);

neamt.adicionarVizinho(iasi);

// Função de busca em profundidade limitada
function buscaEmProfundidadeLimitada(inicio, objetivo, limiteProfundidade) {
    let pilha = [];
    let visitados = new Set();

    pilha.push({ no: inicio, caminho: [inicio.nome] });
    visitados.add(inicio);

    while (pilha.length > 0) {
        let { no, caminho } = pilha.pop();

        if (no.nome === objetivo.nome) {
            console.log(`Caminho encontrado: ${caminho.join(" -> ")}`);
            return true;
        }

        if (caminho.length >= limiteProfundidade) {
            continue;
        }

        for (let vizinho of no.vizinhos) {
            if (!visitados.has(vizinho.cidade)) {
                const novoCaminho = [...caminho, vizinho.cidade.nome];
                pilha.push({ no: vizinho.cidade, caminho: novoCaminho });
                visitados.add(vizinho.cidade);
            }
        }
    }
    return false;
}

// Função de busca em profundidade iterativa
function buscaProfundidadeIterativa(inicio, objetivo) {
    let limiteProfundidade = 1; // Começa com profundidade 1

    while (true) {
        console.log(`Tentando com limite de profundidade: ${limiteProfundidade}`);

        const encontrado = buscaEmProfundidadeLimitada(inicio, objetivo, limiteProfundidade);

        if (encontrado) {
            console.log(`Objetivo encontrado com limite de profundidade ${limiteProfundidade}`);
            return true;
        } else {
            console.log(`Objetivo não encontrado com limite de profundidade ${limiteProfundidade}`);
            limiteProfundidade++;
        }
    }
}

// Execução da busca em profundidade iterativa
resultado = buscaProfundidadeIterativa(arad, bucharest);

if (resultado) {
    console.log("Caminho encontrado!");
} else {
    console.log("Caminho não encontrado!");
}
