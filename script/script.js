
const consultar = document.querySelector("#consultar")

consultar.addEventListener('click', consultaCEP)

function consultaCEP() {

    const campoCep = Number(document.querySelector("#campo-cep").value) //buscando campo input

    const ajax = new XMLHttpRequest() //acessando informações de forma remota

    ajax.open('GET', 'https://viacep.com.br/ws/'+campoCep+'/json/') //Buscando informações do site VIA CEP e do campo input

    ajax.send() //enviando solicitação

    ajax.onload = function () { // Carregando informações

        const saida = document.querySelector("#saida")

        let retorno = this.responseText

        let texto = JSON.parse(retorno)

        let cep = texto.cep
        let localidade = texto.localidade
        let uf = texto.uf
        let ddd = texto.ddd

        saida.innerHTML =  `CEP: ${cep} <br>LOCALIDADE: ${localidade} <br>UF: ${uf} <br> DDD: ${ddd}`
    }
}