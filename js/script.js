document.getElementById("clickMeButton").addEventListener("click", function () {
  var textInput = document.getElementById("textInput").value;
  var message = document.getElementById("message");
  if (textInput) {
    message.textContent = "¡Has escrito: " + textInput + "!";
  } else {
    message.textContent = "¡Botón clickeado!";
  }
});
