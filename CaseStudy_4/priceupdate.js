function retrieveprice() {
  fetch("retrieveprice.php")
  .then(response => response.json())
  .then((coffeeprice) => {
    coffeeprice.forEach(coffee => {
      /*
      switch(coffee.ID) {
        case 1:
          document.getElementById("pricejj").innerHTML = '$' + coffee.price;
        case 2:
          document.getElementById("calprice1").innerHTML = '$' + coffee.price;
        case 3:
          document.getElementById("calprice2").innerHTML = '$' + coffee.price;
        case 4:
          document.getElementById("capprice1").innerHTML = '$' + coffee.price;
        case 5:
          document.getElementById("capprice2").innerHTML = '$' + coffee.price;
      }*/
      if (coffee.ID == 1) {
        document.getElementById("pricejj").innerHTML = '$' + coffee.price;
      }
      else if (coffee.ID == 2) {
        document.getElementById("calprice1").innerHTML = '$' + coffee.price;
      }
      else if (coffee.ID == 3) {
        document.getElementById("calprice2").innerHTML = '$' + coffee.price;
      }
      else if (coffee.ID == 4) {
        document.getElementById("capprice1").innerHTML = '$' + coffee.price;
      }
      else if(coffee.ID == 5) {
        document.getElementById("capprice2").innerHTML = '$' + coffee.price;
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
      retrieveprice();
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

function showPriceInputcal() {
  const priceContainer = document.getElementById("calprice");

  // Create a text input and submit button using innerHTML
  priceContainer.innerHTML = `
      <input type="text" id="new-pricecal2" placeholder="Enter New Price for Single">
      <button id="submit-button" onclick="changePricecal(2)">Submit</button>
      <input type="text" id="new-pricecal3" placeholder="Enter New Price for Double">
      <button id="submit-button" onclick="changePricecal(3)">Submit</button>
`;
}

function changePricecal(id) {
  const newPriceInput = document.getElementById("new-pricecal" + id);
  const submittedPrice = newPriceInput.value;

  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append("newPrice", submittedPrice);
  formData.append("priceId", id);

  // Send an HTTP POST request to the PHP script
  fetch("change_price.php", {
      method: "POST",
      body: formData,
  })
  .then(response => response.text())
  .then(data => {
      // Handle the response from the server (e.g., display a message to the user)
      retrieveprice();
      alert(data);
  })
  .catch(error => {
      console.error("Error:", error);
  });

  // After updating the price, reset the content
  const priceContainer = document.getElementById("calprice");
  priceContainer.innerHTML = `
    <input type="button" value="Change price" onclick=showPriceInputcal()>
  `;
}


function showPriceInputcap() {
  const priceContainer = document.getElementById("capprice");

  // Create a text input and submit button using innerHTML
  priceContainer.innerHTML = `
      <input type="text" id="new-pricecap4" placeholder="Enter New Price">
      <button id="submit-button" onclick="changePricecap(4)">Submit</button>
      <input type="text" id="new-pricecap5" placeholder="Enter New Price">
      <button id="submit-button" onclick="changePricecap(5)">Submit</button>
  `;
}

function changePricecap(id) {
  const newPriceInput = document.getElementById("new-pricecap" + id);
  const submittedPrice = newPriceInput.value;

  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append("newPrice", submittedPrice);
  formData.append("priceId", id);

  // Send an HTTP POST request to the PHP script
  fetch("change_price.php", {
      method: "POST",
      body: formData,
  })
  .then(response => response.text())
  .then(data => {
      // Handle the response from the server (e.g., display a message to the user)
      retrieveprice();
      alert(data);
  })
  .catch(error => {
      console.error("Error:", error);
  });

  // After updating the price, reset the content
  const priceContainer = document.getElementById("capprice");
  priceContainer.innerHTML = `
    <input type="button" value="Change price" onclick=showPriceInputcap()>
  `;
}