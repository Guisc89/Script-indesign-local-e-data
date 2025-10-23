// Script: InserirDataPortugues.jsx
// Autor: Guilherme
// Função: Insere a data atual no formato brasileiro no ponto selecionado do InDesign

// Pega o documento ativo
var doc = app.activeDocument;

// Cria a data atual
var hoje = new Date();

// Array com os meses em português
var meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

// Monta a data formatada
var dataFormatada = "Porto Alegre, " + meses[hoje.getMonth()] + " de " + hoje.getFullYear();

// Verifica se há uma seleção ativa
if (app.selection.length > 0 && app.selection[0].constructor.name == "InsertionPoint") {
    // Insere a data no ponto selecionado
    app.selection[0].contents = dataFormatada;
} else {
    // Cria um novo quadro de texto se nada estiver selecionado
    var quadro = doc.textFrames.add();
    quadro.contents = dataFormatada;
    quadro.geometricBounds = [50, 50, 100, 400]; // posição no documento (ajuste conforme quiser)
}

alert("Data inserida com sucesso!");
