const arrayCarrito = JSON.parse(localStorage.getItem('carrito'));
console.log(arrayCarrito);
let total =0;


if (arrayCarrito != null){
    imprimeCarrito();
    
}else {
    actualizaVentana();
    /*
    let cardCarrito= document.createElement("div");
    cardCarrito.innerHTML=`
    <h2 class="cvacio">Carrito vacio</h2>
    `;
    document.getElementById("lista-carrito").append(cardCarrito);*/
}
//ultimos divs para botones de reiniciar carrito y finalizar compra
function imprimeCarrito() {
    for (const cart of arrayCarrito){
        let pcant =0;
        pcant= cart.precio*cart.cantidad
        let cardCarrito =document.createElement("div");
        cardCarrito.innerHTML = `
        <div>
            <div>
            <img src= ../${cart.img}  alt="Peluche ${cart.nombre}" width="150" height="150">
            </div>
            <div>
                <h3 >${cart.nombre}</h3>
            </div>
            <div>
                <p class="card-precio">P/u $${cart.precio}</p>
            </div>
            <div>
                <p class="productos-carrito-cantidad">cantidad: ${cart.cantidad}</p>
            </div>
            <div>
                <p class="card-precio">$ ${pcant}</p>
            </div>
        </div>
        
        `;
        document.getElementById("lista-carrito").append(cardCarrito);
        cardCarrito.classList.add("productos-carrito");
        console.log(cart.nombre,cart.precio,cart.cantidad);
        total+= (cart.precio * cart.cantidad);
        console.log(total);
    }
    
    let cardBotones =document.createElement("div");
    cardBotones.innerHTML = `
    <div>
        <button type="submit" class="btn btn-primary btn-lg" id="vcarrito">Vaciar Carrito</button>
    </div>
    <div>
        <p class="card-precio">ToTal: $<span id="precioTotal">0</span></p>
    </div>
    <div>
        <button type="submit" class="btn btn-primary btn-lg" id="finalizar">Finalizar</button>
    </div>
    `;
    document.getElementById("bcarrito").append(cardBotones);
    cardBotones.classList.add("d-flex","justify-content-around")

    const botonVaciar = document.getElementById('vcarrito'); 
    botonVaciar.addEventListener('click',()=>{
        arrayCarrito.length = 0;
        localStorage.removeItem('carrito');
        total=0;
        document.location.reload(true);
        actualizaVentana();
})
    
    
}

const precioTotal = document.getElementById('precioTotal');

precioTotal.innerText = arrayCarrito.reduce((acc,prod)=> acc + prod.precio* prod.cantidad,0);



function actualizaVentana() {
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