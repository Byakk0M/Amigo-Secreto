let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") {
        alert("Por favor, ingrese un nombre válido.");
    } else {
        amigos.push(nombreAmigo);
        borrarInput();
        console.log(amigos);
    }
}

function borrarInput() {
    document.getElementById("amigo").value = "";
}