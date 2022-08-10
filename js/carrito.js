const arrayCarrito = JSON.parse(localStorage.getItem('carrito'));
console.log(arrayCarrito);
let total =0;

(arrayCarrito != null) ?imprimeCarrito() : actualizaVentana();
/*
if (arrayCarrito != null){
    imprimeCarrito();  
}else {
    actualizaVentana();  
}*/

function imprimeCarrito() {
    for (const cart of arrayCarrito){
        let pcant =0;
        pcant= cart.precio*cart.cantidad
        let cardCarrito =document.createElement("div");
        cardCarrito.innerHTML = `
        <div>
            <div>
            <img src= "../img/Productos/${cart.img}.jpeg"  alt="Peluche ${cart.nombre}" width="150" height="150">
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
        swal("¿Seguro que deseas vaciar el carrito?","","warning",{
            buttons: {
                cancelar:{
                    className: "btn btn-outline-danger btn-lg",
                    text: "Cancelar",
                
                    value: false,
                },
                aceptar: {
                    className: "btn btn-outline-success btn-lg",
                    text: "Vaciar Carrito",
                    value: true,
                },
        },}
            
        )
          .then((willDelete) => {
            if (willDelete) {
                swal("Carrito Vaciado", {
                    icon: "success",
                });
                arrayCarrito.length = 0;
                localStorage.removeItem('carrito');
                
                total=0;
                document.location.reload(true);
                actualizaVentana();

            } else {
              swal("Carrito no fue borrado");
            }
          });

        
    })
    
    calculaTotal();
    
  
}
function calculaTotal (){
    const precioTotal = document.getElementById('precioTotal');
    precioTotal.innerText = arrayCarrito.reduce((acc,prod)=> acc + prod.precio* prod.cantidad,0);
}

function actualizaVentana() {
    let cardCarrito= document.createElement("div");
    cardCarrito.innerHTML="";
    
    cardCarrito.innerHTML=`
    <h2 class="cvacio">Carrito vacio</h2>
    `;
    document.getElementById("lista-carrito").append(cardCarrito);
}


//no se usan
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
