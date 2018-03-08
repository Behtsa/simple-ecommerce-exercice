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

