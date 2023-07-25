



function calcularCompra() {

  const productoSelect = document.getElementById("productoSelect");
  const cantidadInput = document.getElementById("cantidadInput");
  const resultadoDiv = document.getElementById("resultado");

  const producto = productoSelect.value;
  const cantidad = parseInt(cantidadInput.value);
  let precio;
  let subTotal;
  let descuento;
  let total;

  switch (producto) {
    case "Monopolio":
      precio = 70.99;
      break;
    case "Ajedrez":
      precio = 78.99;
      break;
    case "Dama":
      precio = 58.50;
      break;
    case "Laberinto":
      precio = 35.00;
      break;
    default:
      precio = 0;
  }

  subTotal = precio * cantidad;

  if (cantidad < 10) {
    descuento = subTotal * 0.035;
  } else if (cantidad >= 10 && cantidad <= 20) {
    descuento = subTotal * 0.07;
  } else if (cantidad > 20) {
    descuento = subTotal * 0.095;
  } else {
    descuento = 0;
  }

  total = subTotal - descuento;

  resultadoDiv.style.display = "block";
  document.getElementById("productoCompra").textContent = "Producto: " + producto;
  document.getElementById("cantidadCompra").textContent = "Cantidad: " + cantidad;
  document.getElementById("precioCompra").textContent = "Precio Unitario: $" + precio.toFixed(2);
  document.getElementById("subTotalCompra").textContent = "Subtotal: $" + subTotal.toFixed(2);
  document.getElementById("descuentoCompra").textContent = "Descuento: $" + descuento.toFixed(2);
  document.getElementById("totalCompra").textContent = "Total a Pagar: $" + total.toFixed(2);
}

