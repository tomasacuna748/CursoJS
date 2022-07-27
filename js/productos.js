const arrayProductos = [];
let arrayCarrito = [];
let peluche;
let total = 0;
const storage = JSON.parse(localStorage.getItem('carrito'))
if(storage){
  arrayCarrito = storage;
}


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
        <img src=${producto.img}  alt="Peluche ${producto.nombre}" width="250" height="250">
    </div>
    <div class="card-der card-precio">
        
        <p>$  <span>${producto.precio}</span></p>
        <button id="${producto.id}" type="button" class="btn btn-primary btn-lg boton-comprar">Comprar</button>
    </div>`;

    document.getElementById("cards").append(cardNueva);
    cardNueva.classList.add("card","tituloObjeto");

}
// eventos armando carrito





const clickbutton = document.querySelectorAll('.boton-comprar')

clickbutton.forEach(btn => {
  btn.addEventListener('click', agregarProducto)
})


function agregarProducto(e) {
  const button = e.target
	const item = button.closest('.card');

	/*
  const itemNombre = item.querySelector('h3').textContent;
	const itemPrecio = item.querySelector('span').textContent;
	const itemID = item.querySelector('button').getAttribute('id');
	const itemImg = item.querySelector('img').src;
  const itemCantidad = 1;
  const nuevoItem = new Carrito(itemNombre,itemPrecio,itemImg,itemID,itemCantidad)
*/
  let productoClickeado = arrayProductos.find((item) => item.id == e.target.id);
  let idP= productoClickeado.id;
  const existe = arrayCarrito.some(prod => prod.id === productoClickeado.id);

  if (existe) {
    const prod = arrayCarrito.map(prod =>{
        if(prod.id === productoClickeado.id){
          prod.cantidad++;
        }

    })
  } else {

  const itemNombre = arrayProductos[idP].nombre;
	const itemPrecio = arrayProductos[idP].precio;
	const itemID = arrayProductos[idP].id;
	const itemImg = arrayProductos[idP].img;
  const itemCantidad = 1;
  const nuevoItem = new Carrito(itemNombre,itemPrecio,itemImg,itemID,itemCantidad)
  arrayCarrito.push(nuevoItem)
  
}
  //agregarItem(nuevoItem);
  console.log(arrayCarrito);
  localStorage.setItem('carrito',JSON.stringify(arrayCarrito));
}


/*
function chequeoLocalRepetido(nuevoItem){
  const carritoL = JSON.parse(localStorage.getItem('carrito'));
  for(let i =0; i < carritoL.length ; i++){
		if(carritoL[i].nombre.trim() === nuevoItem.nombre.trim()){
      carritoL[i].cantidad ++;
      const carritoSTR = JSON.stringify(carritoL);

      return null;
		}
	}

}*/
    
  
function agregarItem(nuevoItem){
	
	for(let i =0; i < arrayCarrito.length ; i++){
		if(arrayCarrito[i].nombre.trim() === nuevoItem.nombre.trim()){
      arrayCarrito[i].cantidad ++;
      return null;
		}
	}
  /*
  if (carritoL) {
    arrayCarrito = carritoL;
  }*/
	arrayCarrito.push(nuevoItem);

  //addLocalStorage();
  
  const asdSTR = JSON.stringify(arrayCarrito);
  localStorage.setItem("carrito",asdSTR);
  console.log(arrayCarrito);
  console.log(asdSTR);
}

function addLocalStorage(){
  if(arrayCarrito.length){
    const carritoL= localStorage.getItem('carrito');
    carritoL
  }else{
    localStorage.setItem('carrito', JSON.stringify(arrayCarrito))
  }
}
/*
window.onload = function(){
  const carritoL = JSON.parse(localStorage.getItem('carrito'));
}*/