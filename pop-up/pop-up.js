const ticketInput = document.getElementById("ticketInput");
ticketInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const ticketNumberInput = ticketInput.value;
    const url = `https://suporte.bluesoft.com.br/tickets/${ticketNumberInput}`;
    chrome.tabs.create({ url });
  }
});
