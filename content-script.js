window.addEventListener("beforeunload", function (event) {
  const commentSection = document.querySelector(".note-editable");
  if (commentSection) {
    const confirmacao = confirm("Deseja realmente sair?");
    if (confirmacao) {
    } else {
      event.preventDefault();
    }
  }
});
