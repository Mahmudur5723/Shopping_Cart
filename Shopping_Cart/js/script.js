//We have to pay 10% vat

let Vat = 0.1;

//per Iphone price 

let perIphonePrice = document.getElementById("perMobilePrice").innerText;

perIphonePrice = parseFloat(perIphonePrice);

//per Case Price 

let perMobileCasePrice =document.getElementById("perMobileCasePrice").innerText;

perMobileCasePrice = parseFloat(perMobileCasePrice);

//Mobile Plus Button

let selectMobilePlusButton = document.getElementById("plusBtn");

selectMobilePlusButton.addEventListener("click",function () {

  let mobileInputValue = document.getElementById("inputValue").value;

   mobileInputValue = parseFloat(mobileInputValue);

   mobileInputValue++;

   document.getElementById("inputValue").value = mobileInputValue;

   updatePrice(mobileInputValue,perIphonePrice,"perMobilePrice");

   updateSubtotalPrice();

   updateTaxPrice();

   updateTotal ();
  
})

//Mobile minus Button

let selectMobileMinusButton = document.getElementById("minusBtn");

selectMobileMinusButton.addEventListener("click",function () {

  let mobileInputValue = document.getElementById("inputValue").value;

   mobileInputValue = parseFloat(mobileInputValue);

   mobileInputValue--;

   if (mobileInputValue == 0) {

    console.log("This value is not allow");
     
   }

   else{

    document.getElementById("inputValue").value = mobileInputValue;


   }

   updatePrice(mobileInputValue,perIphonePrice,"perMobilePrice");

   updateSubtotalPrice();
     
   updateTaxPrice();

   updateTotal ();

})

//Mobile Case Plus Button

let selectMobileCasePlusButton = document.getElementById("mobileCasePlusBtn");

selectMobileCasePlusButton.addEventListener("click",function () {

  let mobileCaseInputValue = document.getElementById("mobileCaseInputValue").value;

   mobileCaseInputValue = parseFloat(mobileCaseInputValue);

   mobileCaseInputValue++;

   document.getElementById("mobileCaseInputValue").value = mobileCaseInputValue;

   updatePrice(mobileCaseInputValue,perMobileCasePrice,"perMobileCasePrice");

   updateSubtotalPrice();

   updateTaxPrice();

   updateTotal ();
  
})

//Mobile case minus Button

let selectMobileCaseMinusButton = document.getElementById("mobileCaseMinusBtn");

selectMobileCaseMinusButton.addEventListener("click",function () {

  let mobileCaseInputValue = document.getElementById("mobileCaseInputValue").value;

   mobileCaseInputValue = parseFloat(mobileCaseInputValue);

   mobileCaseInputValue--;

   if (mobileCaseInputValue == 0) {

    console.log("This value is not allow");
     
   }

   else{

    document.getElementById("mobileCaseInputValue").value = mobileCaseInputValue;


   }

   updatePrice(mobileCaseInputValue,perMobileCasePrice,"perMobileCasePrice");
   
   updateSubtotalPrice();

   updateTaxPrice();

   updateTotal ();

})


function updatePrice(InputValue,Price,id) {

  let totalPrice = Price * InputValue; 

  if (totalPrice > 0) {

    document.getElementById(id).innerText = totalPrice;
    
  }
  else
  {

    console.log("This minus value is not allow");

  }
  
   
}

function updateSubtotalPrice() {

  
   let currentMobileTotalPrice = document.getElementById("perMobilePrice").innerText;

   currentMobileTotalPrice = parseFloat(currentMobileTotalPrice);

   let currentMobileCaseTotalPrice =document.getElementById("perMobileCasePrice").innerText;

   currentMobileCaseTotalPrice = parseFloat(currentMobileCaseTotalPrice);

   let totalSubtotal = currentMobileTotalPrice + currentMobileCaseTotalPrice;

   document.getElementById("subtotalPrice").innerText = totalSubtotal;
}

function updateTaxPrice(){

   let currentSubtotalPrice = document.getElementById("subtotalPrice").innerText ;

   currentSubtotalPrice = parseFloat(currentSubtotalPrice);

   let taxTotal = currentSubtotalPrice * Vat;

   taxTotal = taxTotal.toFixed(1)

   document.getElementById("totalTax").innerText = taxTotal;
   
  
}

function updateTotal() {

   
  let currentSubtotalPrice = document.getElementById("subtotalPrice").innerText ;

   currentSubtotalPrice = parseFloat(currentSubtotalPrice);

   let currentTax =   document.getElementById("totalTax").innerText;

   currentTax = parseFloat(currentTax);

   let total = currentSubtotalPrice + currentTax;

   document.getElementById("totalPrice").innerText = total;

  
}