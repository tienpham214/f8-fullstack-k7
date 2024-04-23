var distance; // khoảng cách km
var fare1 = 0;
var fare2 = 0;
var fare3 = 0;
var fare = 0;

function calculateTaxiFare() {
  var distance = parseFloat(document.getElementById("distance").value);

  if (distance <= 1) {
    fare = distance * 15000;
  } else if (distance <= 5) {
    fare1 = 1 * 15000;
    fare2 = (distance - 1) * 13500;
    fare = fare1 + fare2;
  } else if (distance > 5) {
    fare1 = 1 * 15000;
    fare2 = 4 * 13500;
    fare3 = (distance - 5) * 11000;
    fare = fare1 + fare2 + fare3;
  }

  if (distance > 120) {
    fare *= 0.9; // Giảm giá 10%
  }

  document.getElementById("fareResult").innerHTML =
    "Tổng số tiền cước: " + fare.toFixed(0) + "đ";
}

// toFixed(0) sẽ làm tròn số đó thành một số nguyên.
