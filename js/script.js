const form = document.querySelector('#formCap');
const formMed = document.getElementById('formMed');

const botaoCadastroCap = document.querySelector('#formCap .botao') || document.querySelector('.botao');
const API_URL = 'https://sheetdb.io/api/v1/p799rro0egbsq'; 

const voltar = () => {
    window.location.href = "index.html";
};

const proxPagina = () => {
    window.location.href = "medidas.html";
};


const addLoading = (botaoElement) => {
    botaoElement.setAttribute('data-original-text', botaoElement.innerHTML); // 
    botaoElement.innerHTML = '<img class="loding" src="img/loding.png" alt="Carregando...">';
    botaoElement.disabled = true;
};

const removeLoading = (botaoElement, success = true) => {
    const originalText = botaoElement.getAttribute('data-original-text') || 'Cadastrar';
    botaoElement.innerHTML = success ? '✅' : '❌';
    
    setTimeout(() => {
        botaoElement.innerHTML = originalText;  
        botaoElement.disabled = false;
        botaoElement.removeAttribute('data-original-text');
    }, 1500);
};

const handleSubmit = async (event) => {
    event.preventDefault();

    addLoading(botaoCadastroCap);

    const caracteristica = document.querySelector('#icaracteristica').value;
    const medicao = document.querySelector('#imetMedicao').value;
    const codigo = document.querySelector('#icodigo').value;
    const produto = document.querySelector('#iproduto').value;
    const minimo = document.querySelector('#imin').value;
    const maximo = document.querySelector('#imax').value;

    const dataToSend = {
        'Produto': produto,
        'Código': codigo,
        'Caracteristica': caracteristica,
        'Medicao': medicao,
        'Máximo': maximo,
        'Mínimo': minimo
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
        });

        if (!response.ok) {
            throw new Error(`Erro de rede ou API: ${response.statusText}`);
        }

        removeLoading(botaoCadastroCap, true);
        event.target.reset();
      
        setTimeout(proxPagina, 1500); 

    } catch (error) {
        console.error('Erro ao enviar dados do formulário Cap:', error);
        removeLoading(botaoCadastroCap, false);
    }
};

if (form) {
    form.addEventListener('submit', handleSubmit);
}

const enviarMedida = async (event) => {
    event.preventDefault();

    const botaoEnviarMedida = document.querySelector('#formMed .botao') || botaoCadastroCap; 
    addLoading(botaoEnviarMedida);

    const medida = document.getElementById('medida').value;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                data: [
                    { "Medida": medida } 
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`Erro de rede ou API: ${response.statusText}`);
        }

        removeLoading(botaoEnviarMedida, true);
        event.target.reset(); 
        
    } catch (error) {
        console.error('Erro ao enviar a medida:', error);
        removeLoading(botaoEnviarMedida, false);
    }
};

if (formMed) {
    formMed.addEventListener('submit', enviarMedida);
}