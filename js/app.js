let counterItems = document.getElementById("counterItems");
let counter = parseInt(counterItems.innerText);

let productsArray = [];

const addToCart = (product) => {
  console.log(product)
  let filterProduct = data.products.filter(function(obj) {
    if(obj.id === product) {
      return obj;
    }
  });

  let productDetails = filterProduct[0];

  productsArray.push(productDetails);

  localStorage.setItem('productDetails', JSON.stringify(productsArray));
  /* 
  2) Guardar mi producto en algun lugar
  */
}

<<<<<<< HEAD
function removeFromCart(counter) {
  let products = data.products;
  console.log(data.products);
  //let contador;
  //for (contador=0; contador <products.length; contador --)
   let remove = products.shift(counter);{
     return products;
   }

=======
const removeFromCart = () => {
  console.log("quito")
>>>>>>> upstream/master
  /* cuando agrego a carrito, tengo que:
  2) Borrar mi producto de algun lugar
  */
}

const increaseCounter = (product) => {
  counter += 1;
  counterItems.innerText = counter;
<<<<<<< HEAD
  console.log(counter);
  addToCart();

=======
  addToCart(product);
>>>>>>> upstream/master
}

const decreaseCounter = () => {
  counter -= 1;
  counterItems.innerText = counter;
<<<<<<< HEAD
  console.log(counter);
  removeFromCart(counter);
=======
  removeFromCart();
>>>>>>> upstream/master
}

const changeButtonStatus = (product, event) => {
  let element = event.target
  let buttonText = element.firstChild.data;

  if(buttonText === "Agregar a carrito") {
    element.innerText = "Remover del carrito";
    increaseCounter(product);
  } else {
    element.innerText = "Agregar a carrito";
    decreaseCounter();
  }
}

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
