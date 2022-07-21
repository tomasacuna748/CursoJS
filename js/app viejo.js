let arrayProductos = [];
let arrayCarrito = [];
let peluche;
let total = 0;

class Producto {
  constructor(nombre, precio, stock) {
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
arrayProductos[j++] = new Producto("Chanchito", 1000, 9);
arrayProductos[j++] = new Producto("Elefante", 800, 12);
arrayProductos[j++] = new Producto("Lobo", 1200, 5);

function seleccionCarrito(peluche) {
  switch (peluche) {
    case 0:
      if (arrayProductos[peluche].stock < 1) {
        alert(
          "no mas Chanchitos disponibles, stocks nuevos cada semana o comunicarse directamente para mayor rapidez"
        );
      } else {
        agregarCarrito(arrayProductos[peluche], arrayCarrito);

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
        alert(
          "no mas Elefantes disponibles, stocks nuevos cada semana o comunicarse directamente para mayor rapidez"
        );
      } else {
        agregarCarrito(arrayProductos[peluche], arrayCarrito);

        alert("Elefante agregado al carrito");
        console.log("Elefante agregado al carrito");
      }
      console.log(arrayCarrito);

      break;
    case 2:
      if (arrayProductos[peluche].stock < 1) {
        alert(
          "no mas Lobos disponibles, stocks nuevos cada semana o comunicarse directamente para mayor rapidez"
        );
      } else {
        agregarCarrito(arrayProductos[peluche], arrayCarrito);

        alert("Lobo agregado al carrito");
        console.log("Lobo agregado al carrito");
      }
      console.log(arrayCarrito);

      break;
    default:
      alert("error de producto");
      break;
  }
}

function agregarCarrito(objeto, arrayCarrito) {
  let n = objeto.nombre;
  let p = objeto.precio;
  const a = new Carrito(n, p);
  arrayCarrito.push(a);
}

function calculaCompra() {
  let monto = arrayCarrito.reduce((acc, n) => acc + n.precio, 0);
  /*for (let index = 0; index < arrayCarrito.length; index++) {
      monto+= arrayCarrito[index].precio;
    }*/

  return monto;
}

function finalizar() {
  console.log("Los productos del carrito son:");
  for (let index = 0; index < arrayCarrito.length; index++) {
    console.log("-" + arrayCarrito[index].nombre);
  }
  total = calculaCompra().toFixed(2);
  alert(`El total de su carrito es: $${total}`);
  formasDePago();
}

function formasDePago() {
  let formaPago = parseInt(prompt("como desea pagar? 1-Contado 2-Credito"));
  let cuotas;

  if (formaPago === 1) {
    alert(`Total a pagar: $ ${total}`);
  } else if (formaPago === 2) {
    alert("Recargos por cuotas // 2 y 3: 10%  // 4 a 6: 20% // 7 a 12: 35%");
    cuotas = parseInt(prompt("ingrese cantidad de cuotas(de 2 a 12)"));
    total = credito(cuotas).toFixed(2);
    alert(
      `Total: $ ${total} //  ${cuotas} Cuotas de $ ${(total / cuotas).toFixed(
        2
      )}`
    );
  } else {
    alert("error de digito");
  }
}
function credito(cuotas) {
  switch (cuotas) {
    case 2:
    case 3:
      total = total * 1.1;
      break;
    case 4:
    case 5:
    case 6:
      total = total * 1.2;
      break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      total = total * 1.35;
      break;
    default:
      alert("error cantidad de cuotas");
  }
  return total;
}

function reiniciar() {
  arrayCarrito = [];
  console.log("------------------------------");
  total = 0;
}
