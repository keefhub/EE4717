function computeCost() {
  var french = document.getElementById("french").value;
  var hazelnut = document.getElementById("hazelnut").value;
  var columbian = document.getElementById("columbian").value;

  document.getElementById("cost").value = totalCost =
    french * 3.49 + hazelnut * 3.5 + columbian * 4.59;
}
