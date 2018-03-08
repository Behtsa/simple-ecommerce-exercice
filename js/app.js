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
      onclick="addToCart(${product.id}, event)"
      class='btn btn-primary'>Agregar a carrito</button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

function addToCart(product, event) {
  changeButtonStatus(event.target);
  console.log("agregar producto")
  /* cuando agrego a carrito, tengo que:
  2) Guardar mi producto en algun lugar
  */
}

function removeFromCart() {
  console.log("quitar producto")
  /* cuando agrego a carrito, tengo que:
  2) Borrar mi producto de algun lugar
  */
}

function increaseCounter() {
  counter += 1;
  counterItems.innerText = counter;
}

function decreaseCounter() {
  counter -= 1;
  counterItems.innerText = counter;
  removeFromCart();
}

function changeButtonStatus(button) {
  let buttonText = button.firstChild.data;
  if(buttonText === "Agregar a carrito") {
    button.innerText = "Remover del carrito";
    increaseCounter();
  } else {
    button.innerText = "Agregar a carrito";
    decreaseCounter();
  }
}
