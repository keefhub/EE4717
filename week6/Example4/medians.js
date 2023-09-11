function median(list) {
  list.sort(function (a, b) {
    return a - b;
  });
  var list_len = list.length;

  if (list_len % 2 == 1) {
    return list[Math.floor(list_len / 2)]; // Use square brackets here
  } else {
    return Math.round((list[list_len / 2 - 1] + list[list_len / 2]) / 2);
  }
}

var my_list_1 = [8, 3, 9, 1, 4, 7];
var my_list_2 = [10, -2, 0, 5, 3, 1, 7];
var med1 = median(my_list_1);
document.write("Median of [", my_list_1, "] is: ", med1, "<br />");
var med2 = median(my_list_2);
document.write("Median of [", my_list_2, "] is: ", med2, "<br />");
