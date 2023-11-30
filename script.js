// IDs: inNome, btSenha, outResposta

var vetor = "";
var sobrenome = "";
var vogais = "";

function validarNome(){
    var inNome = document.getElementById("inNome");
    nome = inNome.value;

    vetor = nome.split(" ");

    if(vetor.length < 2){
        alert("Por favor digite o nome completo!");
        return;
    }

    obterSobrenome(nome);
}

function obterSobrenome(nome){
    sobrenome = vetor[vetor.length - 1];

    var nome = nome;

    contarVogais(nome, sobrenome);
}

function contarVogais(){
    var vogais = nome.match(/[aeiouAEIOU]/g).length;

    if(vogais < 10){
        vogais = "0" + vogais;
    }
    
    var outResposta = document.getElementById("outResposta");
    outResposta.textContent = "Senha inicial: " + sobrenome.toLowerCase() + vogais;
}

var gerar = document.getElementById("btSenha");
gerar.addEventListener("click", validarNome);