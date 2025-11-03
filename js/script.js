const endPoint = 'https://sheetdb.io/api/v1/p799rro0egbsq' //URL da API 
const formC = document.querySelector('#formCap')

//Ligação dos inputs:
//Captura os dados dos inputs e cria um objeto com propriedades (chave) com o (valor) dos inputs
const dadosC = {
    responsavel: document.querySelector("#iresponsavel"),
    produto: document.querySelector('#iproduto'),
    codigo: document.querySelector('#icodigo'),
    caracteristica: document.querySelector('#icaracteristica'),
    medicao: document.querySelector('#imetMedicao'),
    minimo: document.querySelector('#imin'),
    maximo: document.querySelector('#imax')
};

const botaoC = document.querySelector('#botaoC') //Botão Cadastrar

const addLoading = () => { //Cria a interface de carregamento
    botaoC.innerHTML = '<img src="../img/loading.png" class="loading">'

};

const removeLoading = () => {
    botaoC.innerHTML = 'Cadastrar'
}

const proxPag = () => {
    window.location.href = "medidas.html";
};

const enviarDadosC = (event) => { //Envia os dados para a planilha

    event.preventDefault() //Reseta o comportamento padrão do submit

    if (dadosC.responsavel.value === "" || dadosC.responsavel.value === "-") { //Valida se o compo select é vazio
        alert('Preencha o responsável!')
        formC.reset()
        return;

    }


    addLoading()

    fetch(endPoint, {
        method: 'post', //Método de envio
        headers: {       //Cabeçarios
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ //Converte o objeto em String
            Responsável: dadosC.responsavel.value,
            Produto: dadosC.produto.value,
            Código: dadosC.codigo.value,
            Caracteristica: dadosC.caracteristica.value,
            Medição: dadosC.medicao.value,
            Máximo: dadosC.maximo.value,
            Mínimo: dadosC.minimo.value
        })

    }).then(() => { //Executa depois que a função fetch (função assíncrona (não tem um tempo certo para executar)) termina!
        removeLoading();
        formC.reset();
        proxPag();
    })

};

//Observa o submit do form de cadastro:
formC.addEventListener('submit', enviarDadosC);