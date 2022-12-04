window.onload = function(){
    // Crea una serie de elementos por cada tag encontrado
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("Podemos crear nuestra casita");
    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

