function doPost(e) {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);

  try {
    // Pega a planilha e a aba chamada "Respostas"
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Respostas");
    
    // Converte o POST recebido em objeto JSON
    var data = JSON.parse(e.postData.contents);

    // Adiciona uma nova linha: Data | Código | Produto | Diâmetro
    sheet.appendRow([
      new Date(),
      data.codigo,
      data.produto,
      data.diametro
    ]);

    output.setContent(JSON.stringify({ status: "ok" }));
  } catch (err) {
    output.setContent(JSON.stringify({ status: "error", message: err.message }));
  }

  // Cabeçalho CORS básico pra aceitar requisições do GitHub Pages
  output.setHeader("Access-Control-Allow-Origin", "*");
  return output;
}
