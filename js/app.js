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
  constructor(nombre, precio,img,id,cantidad) {
    this.precio = precio;
    this.nombre = nombre;
    this.img = img;
    this.id = id;
    this.cantidad = cantidad;
  }
}
let j = 0;
const chancho = new Producto(0,"img/Productos/chancho.jpeg","Chanchito", 1000, 9);
const elefante = new Producto(1,"img/Productos/elefante.jpeg","Elefante", 1100, 12);
const lobo = new Producto(2,"img/Productos/lobo.jpeg","Lobo", 1200, 5);
const panda = new Producto(3,"img/Productos/panda.jpeg","Panda", 1500, 7);
const pulpo = new Producto(4,"img/Productos/pulpo.jpeg","Pulpo", 1600, 5);
const tigre = new Producto(5,"img/Productos/tigre.jpeg","Tigre", 1400, 6);

arrayProductos.push(chancho,elefante,lobo,panda,pulpo,tigre);

for (const producto of arrayProductos){
    let cardNueva = document.createElement("div");
    cardNueva.innerHTML = ` 
    <div>
        <h3 class="card-izq">${producto.nombre}</h3>
    </div>
    <div>
        <img src= ${producto.img}  alt="Peluche ${producto.nombre}" width="250" height="250">
    </div>
    <div class="card-der card-precio">
        
        <p>$  <span>${producto.precio}</span></p>
        <button id="${producto.id}" type="button" class="btn btn-primary btn-lg boton-comprar">Comprar</button>
    </div>`;

    document.getElementById("cards").append(cardNueva);
    cardNueva.classList.add("card","tituloObjeto");

}
// eventos armando carrito



const vaciarCarritoBtn = document.querySelector("#vaciar-carrito"); 

const clickbutton = document.querySelectorAll('.boton-comprar')

clickbutton.forEach(btn => {
  btn.addEventListener('click', agregarProducto)
})


function agregarProducto(e) {
  const button = e.target
	const item = button.closest('.card');
	const itemNombre = item.querySelector('h3').textContent;
	const itemPrecio = item.querySelector('span').textContent;
	const itemID = item.querySelector('button').getAttribute('id');
	const itemImg = item.querySelector('img').src;
  const itemCantidad = 1;
  const nuevoItem = new Carrito(itemNombre,itemPrecio,itemImg,itemID,itemCantidad)

  //console.log(nuevoItem);
  agregarItem(nuevoItem);
  //arrayCarrito.push(nuevoItem)
  console.log(arrayCarrito);
}
    
  
function agregarItem(nuevoItem){
	
	for(let i =0; i < arrayCarrito.length ; i++){
		if(arrayCarrito[i].nombre.trim() === nuevoItem.nombre.trim()){
      arrayCarrito[i].cantidad ++;
      return null;
		}
	}

	arrayCarrito.push(nuevoItem)
} 

console.log("llego antes del if");

if (arrayCarrito.length === 0){
  let cardCarrito= document.createElement("div");
  cardCarrito.innerHTML=`
  <h2 class="cvacio">Carrito vacio</h2>
  `;
  document.getElementById("lista-carrito").append(cardCarrito);
  console.log("entro al if");
}else {
  for (const cart of arrayCarrito){
    console.log("entro al for del else");
    let cardCarrito =document.createElement("div");
    cardCarrito.innerHTML = `
    <div>
      <div class="tituloObjeto">
      <img src= ${cart.img}  alt="Peluche ${cart.nombre}" width="100" height="100">
      </div>
      <div>
          <h3 >${cart.nombre}</h3>
      </div>
      <div>
          <p class="card-precio">$ ${cart.precio}</p>
      </div>
    </div>
    <div>

    </div>
    `;
    document.getElementById("lista-carrito").append(cardCarrito);
    cardNueva.classList.add("card","tituloObjeto");
  }
}//ultimos divs para botones de reiniciar carrito y finalizar compra

function vaciarCarrtito(){
  arrayCarrito = [];
  console.log("------------------------------");
  total = 0;
}
function finalizarCompra(){

  for (let index = 0; index < arrayCarrito.length; index++) {
    
    let p = arrayCarrito[index].precio * arrayCarrito[index].cantidad;
    total+= p;
  }
  return total;

}