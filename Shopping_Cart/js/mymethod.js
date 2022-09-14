//per mobile  5% vat come is 58.05;

let perMobileVatIs = 58.05;

//per mobile case 5% vat come is 2.81

let perMobileCaseVatIs = 2.81;

// Current Subtotal Price

let mobilePricesList = [];

let mobileCasePricesList = [];

let currentSubtotalPrice = document.getElementById("subtotalPrice").innerText;

currentSubtotalPrice = parseFloat(currentSubtotalPrice);

// Mobile js start from here

//current per Phone Price

let perIphonePrice = document.getElementById("perMobilePrice").innerText; //current per Phone Price

perIphonePrice = parseFloat(perIphonePrice);

//Mobile plus button js

let selectPlusButton = document.getElementById("plusBtn");

selectPlusButton.addEventListener("click", function () {
  let catchInputValue = document.getElementById("inputValue").value;

  catchInputValue = parseFloat(catchInputValue);

  catchInputValue++;

  catchInputValue = UpdateInputValue("inputValue", catchInputValue);

  let price = (document.getElementById("perMobilePrice").innerText =
    updatePrice(perIphonePrice, catchInputValue));

  //subtotal price updated

  mobilePricesList.push(price);

  let capture = updateSubtotalPrice();

  document.getElementById("subtotalPrice").innerText = capture;

  //Tax value Update

  let captureTax = document.getElementById("totalTax").innerText;

  captureTax = parseFloat(captureTax);

  //Total Taka Update

  let captureTotalTaka = updateTotal(capture, captureTax);

  document.getElementById("totalPrice").innerText = captureTotalTaka;
});

//Mobile Minus button js

let selectMinusBtn = document.getElementById("minusBtn");

selectMinusBtn.addEventListener("click", function () {
  let catchInputValue = document.getElementById("inputValue").value;

  catchInputValue = parseFloat(catchInputValue);

  catchInputValue--;

  if (catchInputValue == -1) {
    console.log("This a  invalid number");
  } else {
    UpdateInputValue("inputValue", catchInputValue);

    let currentPrice = updatePrice(perIphonePrice, catchInputValue);

    document.getElementById("perMobilePrice").innerText = currentPrice;

    //subtotal Price update

    mobilePricesList.push(currentPrice);

    let capture = updateSubtotalPrice();

    document.getElementById("subtotalPrice").innerText = capture;

    //Tax value Update

    let captureTax = document.getElementById("totalTax").innerText;

    captureTax = parseFloat(captureTax);

    //Total Taka Update

    let captureTotalTaka = updateTotal(capture, captureTax);

    document.getElementById("totalPrice").innerText = captureTotalTaka;
  }
});

//Mobile Case js start form here

//Per Mobile case price

let perMobileCasePrice =
  document.getElementById("perMobileCasePrice").innerText;

perMobileCasePrice = parseFloat(perMobileCasePrice);

//Mobile case plus Button

let selectMobileCasePlusButton = document.getElementById("mobileCasePlusBtn");

selectMobileCasePlusButton.addEventListener("click", function () {
  let catchInputValue = document.getElementById("mobileCaseInputValue").value;

  catchInputValue = parseFloat(catchInputValue);

  catchInputValue++;

  catchInputValue = UpdateInputValue("mobileCaseInputValue", catchInputValue);

  let price = (document.getElementById("perMobileCasePrice").innerText =
    updatePrice(perMobileCasePrice, catchInputValue));

  console.log(price);

  console.log("The price of a mobile case", price);

  //subtotal price updated

  mobileCasePricesList.push(price);

  let capture = updateSubtotalPrice();

  document.getElementById("subtotalPrice").innerText = capture;

  //Tax value Update

  let captureTax = document.getElementById("totalTax").innerText;

  captureTax = parseFloat(captureTax);

  //Total Taka Update

  let captureTotalTaka = updateTotal(capture, captureTax);

  document.getElementById("totalPrice").innerText = captureTotalTaka;
});

//Mobile case minus Btn

let selectMobileCaseMinusBtn = document.getElementById("mobileCaseMinusBtn");

selectMobileCaseMinusBtn.addEventListener("click", function () {
  let catchInputValue = document.getElementById("mobileCaseInputValue").value;

  catchInputValue = parseFloat(catchInputValue);

  catchInputValue--;

  if (catchInputValue == -1) {
    console.log("This a  invalid number");
  } else {
    UpdateInputValue("mobileCaseInputValue", catchInputValue);

    let currentPrice = updatePrice(perMobileCasePrice, catchInputValue);

    document.getElementById("perMobileCasePrice").innerText = currentPrice;

    // update subtotal price
    mobileCasePricesList.push(currentPrice);

    let capture = updateSubtotalPrice();

    document.getElementById("subtotalPrice").innerText = capture;

    //Tax value Update

    let captureTax = document.getElementById("totalTax").innerText;

    captureTax = parseFloat(captureTax);

    //Total Taka Update

    let captureTotalTaka = updateTotal(capture, captureTax);

    document.getElementById("totalPrice").innerText = captureTotalTaka;
  }
});

function UpdateInputValue(id, num) {
  let UpdateInputValue = (document.getElementById(id).value = num);

  return UpdateInputValue;
}

function updatePrice(price, numsOfIphone) {
  let totalPrice = price * numsOfIphone;

  return totalPrice;
}

function updateSubtotalPrice() {
  let TotalMobilePrice = mobilePricesList[mobilePricesList.length - 1];

  let TotalMobileCasePrice =
    mobileCasePricesList[mobileCasePricesList.length - 1];

  if (TotalMobilePrice == undefined) {
    TotalMobilePrice = 0;
  }

  console.log("The mobile price last value is", TotalMobilePrice);

  if (TotalMobileCasePrice == undefined) {
    TotalMobileCasePrice = 0;
  }

  console.log("The mobile Case price last value is", TotalMobileCasePrice);

  let result = TotalMobilePrice + TotalMobileCasePrice;

  console.log("The result of subtotal is:", result);

  return result;
}

function updateTotal(totalOfSubtotal, totalOfTax) {
  let result = totalOfSubtotal + totalOfTax;

  return result;
}
