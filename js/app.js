let counterItems = document.getElementById("counterItems");
let counter = parseInt(counterItems.innerText);

const drawProducts = data => {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

const createProductHTML = product => {
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

const addToCart = () => {
  console.log("agrego");
  /* 
  2) Guardar mi producto en algun lugar
  */
}

const removeFromCart = () => {
  console.log("quito")
  /* cuando agrego a carrito, tengo que:
  2) Borrar mi producto de algun lugar
  */
}

const increaseCounter = () => {
  counter += 1;
  counterItems.innerText = counter;
  addToCart();
}

const decreaseCounter = () => {
  counter -= 1;
  counterItems.innerText = counter;
  removeFromCart();
}

const changeButtonStatus = (product, event) => {
  let element = event.target
  let buttonText = element.firstChild.data;

  if(buttonText === "Agregar a carrito") {
    element.innerText = "Remover del carrito";
    increaseCounter();
  } else {
    element.innerText = "Agregar a carrito";
    decreaseCounter();
  }
}
