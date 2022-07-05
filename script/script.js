
const consultar = document.querySelector("#consultar")

consultar.addEventListener('click', consultaCEP)

function consultaCEP() {

    const campoCep = Number(document.querySelector("#campo-cep").value) //Buscando campo input

    const ajax = new XMLHttpRequest() //Acessando informações de forma remota

    ajax.open('GET', 'https://viacep.com.br/ws/'+campoCep+'/json/') //Buscando informações do site VIA CEP e do campo input

    ajax.send() //Enviando solicitação

    ajax.onload = function () { // Carregando informações

        const saida = document.querySelector("#saida")

        let retorno = this.responseText //Recebendo solicitação

        let texto = JSON.parse(retorno)

        let cep = texto.cep
        let localidade = texto.localidade
        let uf = texto.uf
        let ddd = texto.ddd

        saida.innerHTML =  `CEP: ${cep} <br>LOCALIDADE: ${localidade} <br>UF: ${uf} <br> DDD: ${ddd}`
    }
}