// NOTE: PLEASE READ EACH INSTRUCTION COMMENT CAREFULLY TO HELP YOU PROCESS THIS PROJECT
// IF YOU ARE STUCK ASK AN INSTRUCTOR FOR HELP, ALWAYS WRITE THE CODE BELOW THE ASSIGNMENTS.

// This is an array that will be used to keep track of the products sumbitted from the webpage form
productArray = [];

function addProduct() {
  // Assignment 1
  // First we need to get access to the product element and extract the value from the textbox
  // Use this site to help you understand how: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
  let input = document.getElementById("product").value;
  
  
  // CHALLENGE SECTION:
  // If you feel up for a challenge, try and use an if statement if(condition){run this code}
  // to return an alert if the input is empty. You will need to take the imput value above and check 
  // if it's strictly equal to an empty string.
  // If the code you will want to run after checking the condition is to run the alert method.
  // If you do not know the alert method, look it up on google using the w3schools,
  // do not forget to include a return false at the end to not reload your webpage.

  // Assignment 2:
  // You need to push the value of the input above onto the productArray above.
  // Please look up how to use push on an array here: https://www.w3schools.com/jsref/jsref_push.asp
  
  // use console.log and pass in the product array to check if you have it setup correctly.
  console.log(productArray)

  // Now we want to clear the product textbox after the user clicked 
  // the 'submit' button so that its ready to add a new product
  // Hint: use document.getElementById("product").value and set it equal to an empty string ""
  
  // Assignment 3:
  // We now want to update the 'output' div with the value that the user 
  // entered each time they enter a new product. To do this we will need 
  // to get access to the 'output' div element.
  let output = document.getElementById("output");
  
  // Now each time the user clicks the 'submit' button we will clear the 
  // existing contents of 'output' div. This will help avoid the output list 
  // having duplicate values from previous entries in the productArray
  output.innerHTML = "";
  
  // Now we need to loop through each item of the productArray and 
  // display them in the 'output' div. We will use the JavaScript forEach 
  // chain function for an array. Look up the javascript forEach loop on 
  // w3schools (https://www.w3schools.com/jsref/jsref_foreach.asp)

  // The code below is not finished. Use what you have learned about the 
  // forEach loop to complete it
  productArray.forEach();

  function updateProductList(item){
    console.log(item);
    // Line 41 above cleared the output div. Now you need to update it 
    // here with each item in the productArray as its being looped through. 
    // Ask an instructor for help if needed.
  }

  // Assignment 4:
  // Then set the output div to display block, its normally set to none, 
  // which means invisible. Do this in the style.css file under div#output.
  // Save all files and reload your index.html page

  
  // this line is to prevent the webpage from reloading. DO NOT MODIFY IT.
  return false;
}
