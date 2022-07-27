const arrayCarrito = JSON.parse(localStorage.getItem('carrito'));
console.log(arrayCarrito);
let total =0;


if (arrayCarrito != null){
    imprimeCarrito();
    
}else {
    let cardCarrito= document.createElement("div");
    cardCarrito.innerHTML=`
    <h2 class="cvacio">Carrito vacio</h2>
    `;
    document.getElementById("lista-carrito").append(cardCarrito);
}
//ultimos divs para botones de reiniciar carrito y finalizar compra
function imprimeCarrito() {
    for (const cart of arrayCarrito){
        
        let cardCarrito =document.createElement("div");
        cardCarrito.innerHTML = `
        <div>
            <div>
            <img src= ../${cart.img}  alt="Peluche ${cart.nombre}" width="125" height="125">
            </div>
            <div>
                <h3 >${cart.nombre}</h3>
            </div>
            <div>
                <p class="card-precio">$ ${cart.precio}</p>
            </div>
            <div>
                <p>cantidad: ${cart.cantidad}</p>
            </div>
        </div>
        
        `;
        document.getElementById("lista-carrito").append(cardCarrito);
        cardCarrito.classList.add("card","tituloObjeto");
        console.log(cart.nombre,cart.precio,cart.cantidad);
        total+= (cart.precio * cart.cantidad);
        console.log(total);
    }
    
    let cardBotones =document.createElement("div");
    cardBotones.innerHTML = `
    <button type="submit" class="btn btn-primary" id="vcarrito">Vaciar Carrito</button>
    <p>$  <span id="precioTotal">0</span></p>
    <button type="submit" class="btn btn-primary" id="finalizar">Finalizar</button>

    `;
    document.getElementById("bcarrito").append(cardBotones);
    
    
}

const precioTotal = document.getElementById('precioTotal');

//precioTotal.innerText = arrayCarrito.reduce((acc,prod)=> acc + prod.precio,0);

const botonVaciar = document.getElementById('vcarrito'); 
botonVaciar.addEventListener('click',()=>{
    arrayCarrito.length = 0;
    localStorage.removeItem('carrito');
    total=0;
    actualizaVentana();
})

function actualizaVentana() {
    cardCarrito.innerHTML = "";
    let cardCarrito= document.createElement("div");
    cardCarrito.innerHTML=`
    <h2 class="cvacio">Carrito vacio</h2>
    `;
    document.getElementById("lista-carrito").append(cardCarrito);
}



  function vaciarCarrito(){
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