

fetch("productos.json")
  .then((response) => response.json())
  .then(function (data) {
    const arrayProductos = data.slice();
    //console.log(data);
    
    //console.log(arrayProductos);

    for (const producto of arrayProductos){
      let cardNueva = document.createElement("div");
      cardNueva.innerHTML = ` 
      <div>
          <h3 class="card-izq">${producto.nombre}</h3>
      </div>
      <div>
          <img src="img/Productos/${producto.imgTitle}.jpeg"  alt="Peluche ${producto.nombre}" width="250" height="250">
      </div>
      <div class="card-der card-precio">
          
          <p>$  <span>${producto.precio}</span></p>
          <button id="${producto.id}" type="button" class="btn btn-primary btn-lg boton-comprar">Comprar</button>
      </div>`;
  
      document.getElementById("cards").append(cardNueva);
      cardNueva.classList.add("card","tituloObjeto");
  
    }
    const contCarrito = document.querySelector("#contadorCarrito");
    const clickbutton = document.querySelectorAll('.boton-comprar');
    clickbutton.forEach(btn => {
      btn.addEventListener('click', agregarProducto)
    })
    
    class Carrito {
      constructor(nombre, precio,img,id,cantidad) {
        this.precio = precio;
        this.nombre = nombre;
        this.img = img;
        this.id = id;
        this.cantidad = cantidad;
      }
    }
    const arrayCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let contC=0;
    (arrayCarrito.length !== 0) ?(arrayCarrito.forEach(element => contC+=element.cantidad)):contC=0;
    contCarrito.innerHTML=contC;

  function agregarProducto(e) {
    const button = e.target
    const item = button.closest('.card');
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
      const itemImg = arrayProductos[idP].imgTitle;
      const itemCantidad = 1;
      const nuevoItem = new Carrito(itemNombre,itemPrecio,itemImg,itemID,itemCantidad);
      arrayCarrito.push(nuevoItem); 
  }
    
    console.log(arrayCarrito);
    
    localStorage.setItem('carrito',JSON.stringify(arrayCarrito));
    //swal(productoClickeado.nombre+" agregado al carrito","", "success","okey");
    swal(productoClickeado.nombre+" agregado al carrito","", "success", {
      button: "=)",
      timer: 3000,
    });
  
    contCarrito.innerHTML=(contC+=1);
  }
  

    
  })
  .catch(function (error) {
    console.log(error);
  });

  


    
