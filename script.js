// Get the input fields and the product list element
const productInput = document.getElementById("product-input");
const priceInput = document.getElementById("price-input");
const paidInput = document.getElementById("paid-input");
const productList = document.getElementById("product-list");
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", addExpense);



function addExpense(event){
    event.preventDefault();
    if(!priceInput.value || !productInput.value){
        alert("Please fill in the blanks");
        return;
    }
}

// Initialize the total variable to 0
let total = 0;

// Define a function to add a product to the list
function addProduct() {
  // Get the values from the input fields
  const product = productInput.value;
  const price = Number(priceInput.value);
  const paid = paidInput.checked;

  // Create a new list item element
  const li = document.createElement("li");

  if(!paid){
    li.className = "product-item";
  }else {    
    li.className = "product-itemdone";
  }


  // Create a span element to display the product name and price
  const span = document.createElement("span");
  span.textContent = `${product} - $${price.toFixed(2)}`;
  li.appendChild(span);

  // Add a button to remove the product from the list
  const button = document.createElement("button");
  button.textContent = "x";
  button.addEventListener("click", () => {
    li.remove();
    // Update the total when a product is removed
    if (!paid) {
      total -= price;
      document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    }
  });
  li.appendChild(button);

  // Add the list item to the product list
  productList.appendChild(li);

  // Update the total if the product is unpaid
  if (!paid) {
    total += price;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;    
  }

  // Clear the input fields
  productInput.value = "";
  priceInput.value = "";
  paidInput.checked = false;
}

// Add an event listener to the add button
document.getElementById("add-btn").addEventListener("click", addProduct);


