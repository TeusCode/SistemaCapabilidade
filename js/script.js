const form = document.querySelector('#formCarp');
const cadastro = document.querySelector('.botao');

const proxPagina = () => {
    form.style.display = 'none';
}

const addLoading = () => {
    cadastro.innerHTML = '<img class="loding" src="img/loding.png" alt="">';
};

const removeLoading = () => {
    cadastro.innerHTML = 'Cadastrar'
};


const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();


    const caracteristica = document.querySelector('#icaracteristica').value;
    const medicao = document.querySelector('#imetMedicao').value;
    const codigo = document.querySelector('#icodigo').value;
    const produto = document.querySelector('#iproduto').value;
    const minimo = document.querySelector('#imin').value;
    const maximo = document.querySelector('#imax').value;

    fetch('https://sheetdb.io/api/v1/diu9gggbuf1l2', {

        method: 'post',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({ produto, codigo, caracteristica, medicao, maximo, minimo })

    }).then(() => removeLoading());
    event.target.reset();
};

document.getElementById('formCap').addEventListener('submit', handleSubmit,);


