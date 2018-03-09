paypal.Button.render({

           env: 'sandbox', // sandbox | production

           // PayPal Client IDs - replace with your own
           // Create a PayPal app: https://developer.paypal.com/developer/applications/create
           client: {
               sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
               production: 'AfLIioIO6i635ADVZLmpyqHq4ePQzXjLHihuGkAEcQh1JaB1p7UQHM2enTYEvUIl_hLmx9CXEb-a4IKK'
           },

           // Show the buyer a 'Pay Now' button in the checkout flow
           commit: true,

           // payment() is called when the button is clicked
           payment: function(data, actions) {

               // Make a call to the REST api to create the payment
               return actions.payment.create({
                   payment: {
                       transactions: [
                           {
                               amount: { total: 'totalGap', currency: 'MXN' }
                           }
                       ]
                   }
               });
           },

           // onAuthorize() is called when the buyer approves the payment
           onAuthorize: function(data, actions) {

               // Make a call to the REST api to execute the payment
               return actions.payment.execute().then(function() {
                   window.alert('Payment Complete!');
               });
           }

       }, '#paypal-button');


let totalTR = document.getElementById('total');
let tabody = document.getElementById('body-table');
let product = localStorage.getItem('productDetails');
productDetails= JSON.parse(product);
console.log(productDetails);

const calculateTotal = productDetails => {
  let tableTemplate = ` `;
  let total = 0;
  let totalGap = ` `;
  productDetails.forEach(product => {
    total += product.price;
    tableTemplate += `<tr>
    <th scope="row">${product.title}</th>
    <td>${product.price}</td>
    </tr>`;
    tabody.innerHTML = tableTemplate;
  })
  totalGap += `
    <td><strong>TOTAL: </strong>${total}</td>`;
    totalTR.innerHTML = totalGap;
}


calculateTotal(productDetails);
