const arrayProductos = [];
let arrayCarrito = [];
let peluche;
let total = 0;

class Producto {
  constructor(id,img,nombre, precio, stock) {
    this.id = id;
    this.img = img;
    this.precio = precio;
    this.stock = stock;
    this.nombre = nombre;
  }
}
class Carrito {
  constructor(nombre, precio) {
    this.precio = precio;
    this.nombre = nombre;
  }
}
let j = 0;
const chancho = new Producto(0,"img/Productos/chancho.jpeg","Chanchito", 1000, 9);
const elefante = new Producto(1,"img/Productos/elefante.jpeg","Elefante", 800, 12);
const lobo = new Producto(2,"img/Productos/elefante.jpeg","Lobo", 1200, 5);

arrayProductos.push(chancho,elefante,lobo);

for (const producto of arrayProductos){
    let cardNueva = document.createElement("div");
    cardNueva.innerHTML = ` 
    <div>
        <h3 class="card-izq">${producto.nombre}</h3>
    </div>
    <div>
        <img src= ${producto.img}  alt="Peluche ${producto.nombre}" width="250" height="250">
    </div>
    <div class="card-der">
        <p class="card-precio">$ ${producto.precio}</p>
        <button id="${producto.id}" type="button" class="btn btn-primary btn-lg >Comprar</button>
        <button type="button" class="btn btn-primary btn-lg">Comprar</button>
    </div>`;

    document.getElementById("cards").append(cardNueva);
    cardNueva.classList.add("card","tituloObjeto");

}
