function retrieveprice() {
  fetch("retrieveprice.php")
  .then(response => response.json())
  .then((coffeeprice) => {
    coffeeprice.forEach(coffee => {
      if (coffee.ID == 1) {
        document.getElementById("pricejj").innerHTML = '$' + coffee.price;
      }
    });
  })
  .catch(console.error);
}

function showPriceInputjj() {
  const priceContainer = document.getElementById("jjprice");

  // Create a text input and submit button using innerHTML
  priceContainer.innerHTML = `
      <input type="text" id="new-pricejj" placeholder="Enter New Price">
      <button id="submit-button" onclick="changePricejj()">Submit</button>
  `;
}

function changePricejj() {
  const newPriceInput = document.getElementById("new-pricejj");
  const submittedPrice = newPriceInput.value;

  // You can perform actions to update the price here (e.g., send to a server).
  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append("newPrice", submittedPrice);
  formData.append("priceId", 1);

  // Send an HTTP POST request to the PHP script
  fetch("change_price.php", {
      method: "POST",
      body: formData,
  })
  .then(response => response.text())
  .then(data => {
      // Handle the response from the server (e.g., display a message to the user)
      alert(data);
  })
  .catch(error => {
      console.error("Error:", error);
  });

  // After updating the price, reset the content
  const priceContainer = document.getElementById("jjprice");
  priceContainer.innerHTML = `
    <input type="button" value="Change price" onclick=showPriceInputjj()>
  `;
}
/*
function showPriceInputcal() {
  const priceContainer = document.getElementById("calprice");

  // Create a text input and submit button using innerHTML
  priceContainer.innerHTML = `
      <input type="text" id="new-pricecal" placeholder="Enter New Price">
      <button id="submit-button" onclick="changePrice()">Submit</button>
  `;
}

function changePrice() {
  const newPriceInput = document.getElementById("new-pricecal");
  const submittedPrice = newPriceInput.value;

  // You can perform actions to update the price here (e.g., send to a server).
  

  // After updating the price, reset the content
  const priceContainer = document.getElementById("price-container");
  priceContainer.innerHTML = `
      <button id="change-price-button" onclick="showPriceInput()">Change Price</button>
  `;
}

function showPriceInputcap() {
  const priceContainer = document.getElementById("capprice");

  // Create a text input and submit button using innerHTML
  priceContainer.innerHTML = `
      <input type="text" id="new-pricecap" placeholder="Enter New Price">
      <button id="submit-button" onclick="changePrice()">Submit</button>
  `;
}

function changePrice() {
  const newPriceInput = document.getElementById("new-pricecap");
  const submittedPrice = newPriceInput.value;

  // You can perform actions to update the price here (e.g., send to a server).
  

  // After updating the price, reset the content
  const priceContainer = document.getElementById("price-container");
  priceContainer.innerHTML = `
      <button id="change-price-button" onclick="showPriceInput()">Change Price</button>
  `;
}
*/

