function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  //var hora = data.getHours();
 var hora = 11
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "dia.png"
    document.body.style.background = "#314121";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.png"
    document.body.style.background = "#521523"
  } else {
    img.src = "noite.png"
    document.body.style.background = "#515154"
  }
}
