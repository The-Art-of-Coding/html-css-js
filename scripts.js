function inrToUsd() {
  let inrAmount = Number(document.getElementById('inrAmount').innerHTML)

  let usdAmount = inrAmount / 70.00;
  let message = ` ${inrAmount} / 70.00, equals to $${usdAmount.toFixed(2)}`;
  document.getElementById("usdAmount").innerHTML = message ;
  alert(message);
}

document.getElementById('convertToUSDButton').addEventListener("click", inrToUsd);
