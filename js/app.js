let arrayProductos=[];
let arrayCarrito =[];
let peluche;


class Producto{
    constructor(nombre, precio, stock) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
    }
}
class Carrito{
  constructor(nombre, precio) {
      this.precio = precio;
      this.nombre = nombre;
  }
}
let j=0;
arrayProductos[j++]= new Producto("Chanchito",1000,9);
arrayProductos[j++]= new Producto("Elefante",800,12);
arrayProductos[j++]= new Producto("Lobo",1200,5);


function seleccionCarrito(peluche) {
  switch (peluche) {
    case 0:
      if (arrayProductos[peluche].stock < 1) {
        alert("no mas Chanchitos disponibles, stocks nuevos cada semana o comunicarse directamente para mayor rapidez");  
      } else {
        
        agregarCarrito(arrayProductos[peluche],arrayCarrito);

        alert("Chanchito agregado al carrito");
        console.log("Chanchito agregado al carrito");
      }
      console.log(arrayCarrito);
  
      /*
      a = new Carrito (arrayProductos[peluche].nombre,arrayProductos[peluche].precio,arrayProductos[peluche].cantidad+1);
      flag++;
      if (a.flag) {        
        arrayCarrito.push(a);
      } else {        
      }
      arrayCarrito.push(arrayProductos[peluche]);
      console.log(arrayProductos[peluche].precio); 
      arrayProductos[peluche].stock--;   
      console.log("----------------------");     
      console.log(arrayCarrito.length);
      */ 
      break;
    case 1:
      if (arrayProductos[peluche].stock < 1) {
        alert("no mas Elefantes disponibles, stocks nuevos cada semana o comunicarse directamente para mayor rapidez");  
      } else {
        
        agregarCarrito(arrayProductos[peluche],arrayCarrito);
        
        alert("Elefante agregado al carrito");
        console.log("Elefante agregado al carrito");
      }
      console.log(arrayCarrito);
      
      break;
    case 2:
      
      if (arrayProductos[peluche].stock < 1) {
        alert("no mas Lobos disponibles, stocks nuevos cada semana o comunicarse directamente para mayor rapidez");  
      } else {
        
        agregarCarrito(arrayProductos[peluche],arrayCarrito);
        
        alert("Lobo agregado al carrito");
        console.log("Lobo agregado al carrito");
      }
      console.log(arrayCarrito);
      
      break;
    default:
        alert("error de producto")
      break;
  }
}

function agregarCarrito(objeto,arrayCarrito) {

  let n =objeto.nombre
  let p =objeto.precio;
  const a = new Carrito(n,p);
  arrayCarrito.push(a);
}

function calculaCompra(){
  let monto=arrayCarrito.reduce((acc,n)=>acc+n.precio,0);
    /*for (let index = 0; index < arrayCarrito.length; index++) {
      monto+= arrayCarrito[index].precio;
    }*/
    
    return monto;
}

function finalizar() {

    console.log("Los productos del carrito son:");
    for (let index = 0; index < arrayCarrito.length; index++) {
      console.log("-"+arrayCarrito[index].nombre)
    } 
    alert(`El total de su compra es: $${(calculaCompra().toFixed(2))}`);  
}
function reiniciar(){
    
    arrayCarrito =[];
    console.log("------------------------------");
   
}
