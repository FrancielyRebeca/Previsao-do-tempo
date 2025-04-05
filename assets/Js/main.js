// MINHA CHAVE DO API.
// DIFERENÇA ENTRE UMA CONSTANTE E UMA VARIÁVEL: A CONSTANTE NÃO MUDA.
const key = "e0283766cee7e7e70be7e75409ae8042"

// FUNÇÃO PARA PEGAR O VALOR DO input-cidade.
function coletarValor() {
    // buscando o valor do input no HTML e atribuindo a variável cidade.
    // let: chama uma variável
    let cidade = document.querySelector(".input-cidade").value 
    // imprimindo a variável cidade.
    console.log(cidade) 
    dadosAPI(cidade) 
}

// FUNÇÃO PARA PEGAR DADOS DA API
async function dadosAPI(cidade) {
    // dadosAPI(CIDADE): é o nome da variável
    let dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    console.log (dados)
    dadosTela(dados)
}


function dadosTela(dados) {
    //innerHTML: muda o texto do site
    // sinal de igual (=) "troque isso por isso"
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity
}

