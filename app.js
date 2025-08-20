
let listaAmigos = [];


function agregarAmigo() {
    //Capturar el valor del campo de entrada
    let amigoIngresado = document.getElementById("amigo").value;  
    //Validar la entrada
    if (amigoIngresado == ""){
        alert("Por favor, ingresa un nombre válido");
    } else {
        listaAmigos.push(amigoIngresado);//Actualizar el array de amigos
    }
    //Limpiar el campo de entradas
    document.getElementById("amigo").value = "";
    crearListaAmigos();
    return
}

function crearListaAmigos() {
    //Obtener elemento de la lista
    let creacionLista = document.getElementById("listaAmigos");
    creacionLista.innerHTML = ""; //Limpiar la lista existente
    //Iterar sobre el arreglo
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li"); //Crea el elemento <li>
        li.textContent = listaAmigos[i]; //Asigna texto
        creacionLista.appendChild(li); //Agregar elementos a la lista creacion lista
    };
    return
}

function sortearAmigo() {
    //Validar que haya amigos disponibles
    if (listaAmigos != "") {
         //Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); 
         //Obtener el nombre sorteado
        let amigoSorteado = listaAmigos[indiceAleatorio]; 
        //Mostrar el resultado
        let mostrarAmigoSorteado = document.getElementById("resultado");
        mostrarAmigoSorteado.innerHTML = amigoSorteado;
    } else {
        alert("La lista de amigos se encuentra vacía");
    }
   return
    
}
