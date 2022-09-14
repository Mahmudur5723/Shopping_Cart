//We have to pay 10% vat
let Vat = 0.1;

//per Iphone price 
let perIphonePrice = document.getElementById("perMobilePrice").innerText;
perIphonePrice = parseFloat(perIphonePrice);

//per Case Price 
let perMobileCasePrice =document.getElementById("perMobileCasePrice").innerText;
perMobileCasePrice = parseFloat(perMobileCasePrice);

// update input value 
function updateInput(id,isIncrease){
    let InputValue = document.getElementById(id).value;

    InputValue = parseFloat(InputValue);

   if (isIncrease == true && id == 'inputValue') {

     InputValue++;

     document.getElementById(id).value = InputValue;

     updatePrice(InputValue,perIphonePrice,"perMobilePrice");     
   }

   else if (isIncrease == false && id == 'inputValue') {
       
      InputValue--;

     if (InputValue == 0) {

        console.log("This value is not allow ");    
     }
     else{
        
        document.getElementById(id).value = InputValue;

        updatePrice(InputValue,perIphonePrice,"perMobilePrice");

     }
       
   }

   else if (isIncrease == true && id == 'mobileCaseInputValue') {

    InputValue++;

    document.getElementById(id).value = InputValue; 

    updatePrice(InputValue,perMobileCasePrice,"perMobileCasePrice");
      
  }
  else if (isIncrease == false && id == 'mobileCaseInputValue') {
      
     InputValue--;

    if (InputValue == 0) {

       console.log("This value is not allow ");
        
    }
    else{
       
       document.getElementById(id).value = InputValue;

       updatePrice(InputValue,perMobileCasePrice,"perMobileCasePrice");

    }    
  }
  
   updateSubtotalPrice();

   updateTaxPrice();

   updateTotal ();
    
}

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