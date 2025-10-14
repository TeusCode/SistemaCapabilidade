const form = document.querySelector('#formCarp');
const cadastro = document.querySelector('.botao');

const addLoading = () => {
    cadastro.innerHTML = '<img class="loding" src="img/loding.png" alt="">';
};

const removeLoading = () => {
    cadastro.innerHTML = 'Cadastrar'
};


const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const codigo = document.querySelector('#icodigo').value;
    const produto = document.querySelector('#iproduto').value;
    const diametro = document.querySelector('#idiametro').value;

    fetch('https://sheetdb.io/api/v1/diu9gggbuf1l2', {

        method: 'post',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({ codigo, produto, diametro })

    }).then(() => removeLoading());
    event.target.reset();
};

document.getElementById('formCap').addEventListener('submit', handleSubmit);

form.reset();


