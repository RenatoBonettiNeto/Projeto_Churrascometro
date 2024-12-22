
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let result = document.getElementById("result");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + ((carnePorPessoa(duracao)/ 2) * criancas);
    let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qdtTotalBebidas = bebidaPorPessoa(duracao) * adultos + ((bebidaPorPessoa(duracao)/ 2) * criancas);

    
    result.innerHTML = `<p>${qdtTotalCarne / 1000}g de Carne.</p>`
    result.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas (355ml) de Cerveja.</p>`
    result.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas (2L) de Bebidas.</p>`

}

function carnePorPessoa(duracao){
    if (duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPorPessoa(duracao){
    if (duracao >= 6){
        return 1000;
    } else {
        return 1500;
    }
}