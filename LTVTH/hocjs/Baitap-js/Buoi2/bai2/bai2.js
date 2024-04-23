var kwh; // số kWh

var rice1 = 0;
var rice2 = 0;
var rice3 = 0;
var rice4 = 0;
var rice5 = 0;
var rice = 0;

function calculate() {
  var kwh = parseFloat(document.getElementById("kwh").value);

  if (kwh <= 0) {
    rice = 0;
  } else if (kwh >= 1 && kwh <= 50) {
    rice1 = kwh * 1678;
    rice = rice1;
  } else if (kwh >= 51 && kwh <= 100) {
    rice1 = 50 * 1678;
    rice2 = (kwh - 50) * 1734;
    rice = rice1 + rice2;
  }

  if (kwh >= 101 && kwh <= 200) {
    rice1 = 50 * 1678;
    rice2 = 50 * 1734;
    rice3 = (kwh - 100) * 2014;
    rice = rice1 + rice2 + rice3;
  } else if (kwh >= 201 && kwh <= 300) {
    rice1 = 50 * 1678;
    rice2 = 50 * 1734;
    rice3 = 100 * 2014;
    rice4 = (kwh - 200) * 2536;
    rice = rice1 + rice2 + rice3 + rice4;
  } else if (kwh >= 301 && kwh <= 400) {
    rice1 = 50 * 1678;
    rice2 = 50 * 1734;
    rice3 = 100 * 2014;
    rice4 = 100 * 2536;
    rice5 = (kwh - 300) * 2834;
    rice = rice1 + rice2 + rice3 + rice4 + rice5;
  }

  if (kwh > 400) {
    rice1 = 50 * 1678;
    rice2 = 50 * 1734;
    rice3 = 100 * 2014;
    rice4 = 100 * 2536;
    rice5 = 100 * 2834;
    rice = rice1 + rice2 + rice3 + rice4 + rice5 + (kwh - 400) * 2927;
  }

  document.getElementById("riceResult").innerHTML =
    "Tổng số tiền cước: " + rice.toFixed(0) + "đ";
}
