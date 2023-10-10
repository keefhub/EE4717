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
  const justJavaPrice = parseFloat(document.getElementById("justjavaprice").value) || 0;
  const cafeaulaitPrice = parseFloat(document.getElementById("cafeaulaitprice").value) || 0;
  const icedcappucinoPrice = parseFloat(document.getElementById("icedcappucinoprice").value) || 0;
  const total_price = justJavaPrice + cafeaulaitPrice + icedcappucinoPrice;
  document.getElementById("total").value = total_price.toFixed(2);
}