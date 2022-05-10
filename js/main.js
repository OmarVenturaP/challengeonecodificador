
// creamos la funcón para el botón encriptar
function encriptar(){

    textoEncriptar = document.getElementById("texto").value;
    
}
    innerHTML = encriptar;

    function encriptar () {
        var texto = document.querySelector("#textarea").value;
        var textoCifrado = texto.replace (/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#textarea-resultado").value = textoCifrado;
        document.querySelector("#textarea").value;
        if (textoCifrado == texto || textoCifrado) {
            document.querySelector(".container_no_found").style.display = "none";
            document.querySelector(".textarea-resultado").style.display = "block";
            document.querySelector(".copiar").style.display = "block";
        } else {
            document.querySelector(".container_no_found").style.display = "block";
            document.querySelector(".textarea-resultado").style.display = "none";
            document.querySelector(".copiar").style.display = "none";
        }
    }
    var boton1 = document.querySelector("#encriptar"); boton1.onclick = encriptar;
    
    function desencriptar(){
        var texto = document.querySelector("#textarea").value;
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        document.querySelector("#textarea-resultado").value = textoCifrado;
        document.querySelector("#textarea").value;
        if (textoCifrado == texto || textoCifrado) {
            document.querySelector(".container_no_found").style.display = "none";
            document.querySelector(".textarea-resultado").style.display = "block";
            document.querySelector(".copiar").style.display = "block";
        } else {
            document.querySelector(".container_no_found").style.display = "block";
            document.querySelector(".textarea-resultado").style.display = "none";
            document.querySelector(".copiar").style.display = "none";
        } 
    }
    var boton2 = document.querySelector("#desencriptar"); boton2.onclick = desencriptar;
        
    function copyToClipBoard() {
      var contentText = document.querySelector("#textarea-resultado");

      contentText.select();
      document.execCommand('copy');
    }
    var boton3 = document.querySelector("#copiar"); boton3.onclick = copyToClipBoard;