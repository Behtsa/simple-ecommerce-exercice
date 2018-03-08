let counterItems = document.getElementById("counterItems");
let counter = parseInt(counterItems.innerText);

function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="changeButtonStatus(${product.id}, event)"
      class='btn btn-primary'>Agregar a carrito</button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

function addToCart() {
  // console.log(event);
  // console.log(event.target);
  /* cuando agrego a carrito, tengo que:
  1) Incrementar en uno mi contador del menu
  2) Guardar mi producto en algun lugar
  3) Cambiar el boton de agregar a carrito
  por quitar del carrito
  */
}

function removeFromCart(counter) {
  let products = data.products;
  console.log(data.products);
  //let contador;
  //for (contador=0; contador <products.length; contador --)
   let remove = products.shift(counter);{
     return products;
   }

  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
}

function increaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
  counter += 1;
  counterItems.innerText = counter;
  console.log(counter);
  addToCart();

}

function decreaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
  counter -= 1;
  counterItems.innerText = counter;
  console.log(counter);
  removeFromCart(counter);
}

function changeButtonStatus(product, event) {
  let element = event.target
  let buttonText = element.firstChild.data;

  if(buttonText === "Agregar a carrito") {
    element.innerText = "Remover del carrito";
    increaseCounter();
  } else {
    element.innerText = "Agregar a carrito";
    decreaseCounter();
  }
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}
