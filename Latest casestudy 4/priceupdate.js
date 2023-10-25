function retrieveprice() {
  fetch("retrieveprice.php")
    .then((response) => response.json())
    .then((coffeeprice) => {
      coffeeprice.forEach((coffee) => {
        if (coffee.ID == 1) {
          document.getElementById("pricejj").innerHTML = "$" + coffee.price;
        } else if (coffee.ID == 2) {
          document.getElementById("calprice1").innerHTML = "$" + coffee.price;
          document.getElementById("single").value = coffee.price;
        } else if (coffee.ID == 3) {
          document.getElementById("calprice2").innerHTML = "$" + coffee.price;
          document.getElementById("double").value = coffee.price;
        } else if (coffee.ID == 4) { 
          document.getElementById("capprice1").innerHTML = "$" + coffee.price;
          document.getElementById("single_cappu").value = coffee.price;
        } else if (coffee.ID == 5) {
          document.getElementById("capprice2").innerHTML = "$" + coffee.price;
          document.getElementById("double_cappu").value = coffee.price;
        }
      });
    })
    .catch(console.error);
}

function showPriceInputjj() {
  const priceContainer = document.getElementById("jjprice");

  // Create a text input and submit button using innerHTML
  priceContainer.innerHTML = `
      <input type="number" step="0.1" min="0" id="new-pricejj" placeholder="Enter New Price">
      <button id="submit-button" onclick="changePricejj()">Submit</button>
  `;
}

function changePricejj() {
  const newPriceInput = document.getElementById("new-pricejj");
  const submittedPrice = newPriceInput.value;
  price_regex = /^(?!-)[0-9]*\.?[0-9]+$/;
  if (!price_regex.test(submittedPrice)) {
    alert("Please enter a valid price");
    return;
  }
  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append("newPrice", submittedPrice);
  formData.append("priceId", 1);

  // Send an HTTP POST request to the PHP script
  fetch("change_price.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle the response from the server (e.g., display a message to the user)
      retrieveprice();
      alert(data);
    })
    .catch((error) => {
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
      <input type="number" step="0.1" min="0" id="new-pricecal2" placeholder="Enter New Price Single">
      <button id="submit-button" onclick="changePricecal(2)">Submit</button>
      <input type="number" step="0.1" min="0" id="new-pricecal3" placeholder="Enter New Price Double">
      <button id="submit-button" onclick="changePricecal(3)">Submit</button>
`;
}

function changePricecal(id) {
  const newPriceInput = document.getElementById("new-pricecal" + id);
  const submittedPrice = newPriceInput.value;
  price_regex = /^(?!-)[0-9]*\.?[0-9]+$/;
  if (!price_regex.test(submittedPrice)) {
    alert("Please enter a valid price");
    return;
  }

  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append("newPrice", submittedPrice);
  formData.append("priceId", id);

  // Send an HTTP POST request to the PHP script
  fetch("change_price.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle the response from the server (e.g., display a message to the user)
      retrieveprice();
      alert(data);
    })
    .catch((error) => {
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
      <input type="number" step="0.1" min="0" id="new-pricecap4" placeholder="Enter New Price Single">
      <button id="submit-button" onclick="changePricecap(4)">Submit</button>
      <input type="number" step="0.1" min="0" id="new-pricecap5" placeholder="Enter New Price Double">
      <button id="submit-button" onclick="changePricecap(5)">Submit</button>
  `;
}

function changePricecap(id) {
  const newPriceInput = document.getElementById("new-pricecap" + id);
  const submittedPrice = newPriceInput.value;
  price_regex = /^(?!-)[0-9]*\.?[0-9]+$/;
  if (!price_regex.test(submittedPrice)) {
    alert("Please enter a valid price");
    return;
  }
  // Create a FormData object to send the form data
  const formData = new FormData();
  formData.append("newPrice", submittedPrice);
  formData.append("priceId", id);

  // Send an HTTP POST request to the PHP script
  fetch("change_price.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle the response from the server (e.g., display a message to the user)
      retrieveprice();
      alert(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // After updating the price, reset the content
  const priceContainer = document.getElementById("capprice");
  priceContainer.innerHTML = `
    <input type="button" value="Change price" onclick=showPriceInputcap()>
  `;
}

function javajam_price() {
  const price = 2.0;
  const justJavaQty = document.getElementsByName("justjavaqty")[0].value;
  const justJavaPrice = justJavaQty * price;
  document.getElementById("justjavaprice").value = justJavaPrice;
}

function cafeaulait_price() {
  const price_single_cafeaulait = 2.0;
  const price_double_cafeaulait = 3.0;
  const cafeauLaitQty = document.getElementsByName("cafeaulaitqty")[0].value;
  if (document.getElementById("single").checked) {
    const cafeaulaitPrice = cafeauLaitQty * price_single_cafeaulait;
    document.getElementById("cafeaulaitprice").value = cafeaulaitPrice;
  } else if (document.getElementById("double").checked) {
    const cafeaulaitPrice = cafeauLaitQty * price_double_cafeaulait;
    document.getElementById("cafeaulaitprice").value = cafeaulaitPrice;
  }
}

function icedcappucino_price() {
  const price_single_icedcappu = 4.75;
  const price_double_icedcappu = 5.75;
  const icedcappucinoQty =
    document.getElementsByName("icedcappucinoqty")[0].value;
  if (document.getElementById("single_cappu").checked) {
    const icedcappucinoPrice = icedcappucinoQty * price_single_icedcappu;
    document.getElementById("icedcappucinoprice").value = icedcappucinoPrice;
  } else if (document.getElementById("double_cappu").checked) {
    const icedcappucinoPrice = icedcappucinoQty * price_double_icedcappu;
    document.getElementById("icedcappucinoprice").value = icedcappucinoPrice;
  }
}

function totalprice() {
  const justJavaPrice =
    parseFloat(document.getElementById("justjavaprice").value) || 0;
  const cafeaulaitPrice =
    parseFloat(document.getElementById("cafeaulaitprice").value) || 0;
  const icedcappucinoPrice =
    parseFloat(document.getElementById("icedcappucinoprice").value) || 0;
  const total_price = justJavaPrice + cafeaulaitPrice + icedcappucinoPrice;
  document.getElementById("total").value = total_price.toFixed(2);
}
