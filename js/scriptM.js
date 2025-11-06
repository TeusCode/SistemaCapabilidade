const endPoint = 'https://sheetdb.io/api/v1/p799rro0egbsq' //URL da API 
const formM = document.querySelector('#formMed')

//Ligação dos inputs:
//Captura os dados dos inputs e cria um objeto com propriedades (chave) com o (valor) dos inputs
const dadosM = {
    medida: document.querySelector("#imedida"),
};

const botaoM = document.querySelector('#botaoM') //Botão Enviar medida

const addLoading = () => { //Cria a interface de carregamento
    botaoM.innerHTML = '<img src="img/loading.png" class="loading">'

};

const removeLoading = () => {
    botaoM.innerHTML = 'Cadastrar'
}

const enviarDadosM = (event) => { //Envia os dados para a planilha

    event.preventDefault() //Reseta o comportamento padrão do submit

    addLoading()

    fetch(endPoint, {
        method: 'post', //Método de envio
        headers: {       //Cabeçarios
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ //Converte o objeto em String
            Medida: dadosM.medida.value,
        })

    }).then(() => { //Executa depois que a função fetch (função assíncrona (não tem um tempo certo para executar)) termina!
        removeLoading();
        formM.reset();
    })

};

const home = () =>  window.location.href = 'index.html';


//Observa o submit do form de cadastro:
formM.addEventListener('submit', enviarDadosM);