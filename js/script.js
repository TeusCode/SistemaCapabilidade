document.getElementById("formCap").addEventListener("submit", async function (e) {
    e.preventDefault();

    const msg = document.getElementById("msg");
    msg.textContent = "Enviando dados...";

    const form = e.target;

    // Monta o objeto com os dados do formulário
    const data = {
        codigo: form.codigo.value,
        produto: form.produto.value,
        diametro: form.diametro.value
    };

    try {
        const response = await fetch("URL_DO_SEU_WEBAPP", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            msg.textContent = "✅ Dados enviados com sucesso!";
            form.reset();
        } else {
            msg.textContent = "❌ Erro ao enviar. Tente novamente.";
        }
    } catch (error) {
        console.error(error);
        msg.textContent = "⚠️ Falha de conexão com o servidor.";
    }
});
