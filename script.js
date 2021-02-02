var message = "Adivina el número para habilitar el link de la flag";
var button = document.getElementById("button2");
var textbox = document.getElementById("textbox");

function handleClick(){
    alert(message);
}
button.addEventListener("click", function(){
    var numero = parseInt(textbox.value);
    if(numero == 2435771){
        alert("Respuesta correcta!");
        var link = document.getElementById("link_flag");
        link.style.color = "lime"
        link.href = "flag.html"   
    }
    else{
        alert("Respuesta equivocada...");
    }
})