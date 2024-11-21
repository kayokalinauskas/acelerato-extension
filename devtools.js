chrome.devtools.network.onRequestFinished.addListener((request) => {
  request.getContent((body) => {
    console.log(body);

    if (request.request && request.request.url) {
      if (request.request.url.includes("facebook.com")) {
        try {
          var bodyObj = JSON.parse(body);
          console.log(bodyObj); // Exibir o objeto JSON
        } catch (error) {
          console.error("Erro ao processar o corpo da resposta:", error);
        }
      }
    }
  });
});
