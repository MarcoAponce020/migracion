document.addEventListener("DOMContentLoaded", function () {
  // Mostrar la fecha y hora actuales
  function updateDateTime() {
    var now = new Date();
    var datetime = document.getElementById("datetime");
    datetime.textContent = now.toLocaleString();
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // Manejar el clic en el botón
  document
    .getElementById("clickMeButton")
    .addEventListener("click", function () {
      var textInput = document.getElementById("textInput").value;
      var message = document.getElementById("message");
      if (textInput) {
        message.textContent = "¡Has escrito: " + textInput + "!";
      } else {
        message.textContent = "¡Por favor, escribe algo en el campo de texto!";
      }
    });
});
