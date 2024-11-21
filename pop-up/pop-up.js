const ticketInput = document.getElementById("ticketInput");
ticketInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const ticketNumberInput = ticketInput.value;
    const url = `https://bluesoft.acelerato.com/tickets/${ticketNumberInput}`;
    chrome.tabs.create({ url });
  }
});
