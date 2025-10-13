document.getElementById("formCap").addEventListener("submit", async function (e) {
    e.preventDefault();

    const msg = document.getElementById("msg");
    msg.textContent = "Enviando dados...";

    const form = e.target;
    const file = form.fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function () {
        const imageBase64 = reader.result.split(",")[1];

        const data = {
            codigo: form.codigo.value,
            produto: form.produto.value,
            diametro: form.diametro.value,
            imagem: imageBase64,
        };

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycby-uR7QqrDt2302cVrTUvw6e48nP3Nuu1gljh0iER76VGzMhY9tvcrgLPwOTeaoL4S5/exec", {
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
    };

    reader.readAsDataURL(file);
});
