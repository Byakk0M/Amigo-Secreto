let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") {
        alert("Por favor, ingrese un nombre válido.");
    } else {
        amigos.push(nombreAmigo);
        borrarInput();
        actualizarLista();
        console.log(amigos);
    }
}

function borrarInput() {
    document.getElementById("amigo").value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.textContent = amigo;
        lista.appendChild(nuevoElementoLista);
    }
}