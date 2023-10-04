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

function total_price() {
  const javajam_total = parseFloat(
    document.getElementById("justjavaprice").value
  );
  const cafeaulait_total = parseFloat(
    document.getElementById("cafeaulaitprice").value
  );
  const icedcappucino_total = parseFloat(
    document.getElementById("icedcappucinoprice").value
  );
  var total = javajam_total + cafeaulait_total + icedcappucino_total;
  document.getElementById("total").value = total;
}
