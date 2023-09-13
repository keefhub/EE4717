function planeChoice(plane) {
  /* handling events using event attr of radio_clicks */
  var dom = document.getElementById("myForm");

  for (var index = 0; index < dom.planeButton.length; index++) {
    if (dom.planeButton[index].checked) {
      plane = dom.planeButton[index].value;
      break;
    }
  }
  switch (plane) {
    case "152":
      alert("A small two-place aeroplane for flight training");
      break;
    case "172":
      alert("The smaller of four-place aeroplane");
      break;
    case "182":
      alert("The larger of teo four-place aeroplane");
      break;
    case "210":
      alert("A six-place high-performance aeroplane");
      break;
    default:
      alert("Error in Javascript function planeChoice");
      break;
  }
}
