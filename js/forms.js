  /*
FILE NAME: form.js
WRITTEN BY: Ole-Martin
WHEN: October 2017
PURPOSE: Validates form input if orderform element is present
*/
(function () {
  var orderform = document.querySelector(".orderform");
  if(orderform && orderform !== null){
    // Form exist
    // Get all input fields in the form
    var inputs = orderform.querySelectorAll("input");
    /*
     * Validates input element with given regular expression variable
     * @params: HTMLElement: element, Regularexpression: regex
     * @return: Boolean: true/False depending on the outcome of the test
     */
    function validateInputElementWithRegex(element, regex){
      if(!regex.test(element.value)){
        element.className = "invalid";
        return false;
      }else{
        element.className = "valid";
        return true;
      }
    }
    /*
     * Function to validate text input fields 
     * Calls validateInputElementWithRegex with specific regex code for textual input
     * @params: HTMLElement: element
     * @return: Boolean true/false from validateInputElementWithRegex
     */
    function validateTextInput(element){
      var regex = /^[a-zæøå0-9-_ ]+$/i;
      // Regex that allows a - z, æøå, 0-9, _ and - (uppercase and lowercase)
      return validateInputElementWithRegex(element, regex);
    }
    /*
     * Function to validate email input fields
     * Calls validateInputElementWithRegex with specific regex for email input
     * @params: HTMLElement: element
     * @return: Boolean true/false from validateInputElementWithRegex
     */
    function validateEmailInput(element){
      var regex = /^[a-zæøå0-9-_.+%]+[@][a-zæøå0-9-_.+%]+[.][a-zæøå0-9-_.+%]+$/i
      // Alphanumeric letters and "_, -, ., +, %" followed by "@",
      //followed by same characters followed by "."" followed by same type
      return validateInputElementWithRegex(element, regex);
    }
    /*
     * Function to validate number input fields
     * Calls validateInputElementWithRegex with specific regex for numeric input
     * @params: HTMLElement: element
     * @return: Boolean true/false from validateInputElementWithRegex
     */
    function validateNumberInput(element){
      var regex = /^[0-9]+$/; // All numbers only
      return validateInputElementWithRegex(element, regex);
    }
    /*
     * Function to validate specific input fields
     * Is triggered whenever input element is changed
     * Calls function to validate input field based on its type
     * @params: event
     * @return: void
     */
    function validateInputField(event){
      var _this = this; // Create this variable so it can be passed along to other functions
      if(this.type === "text"){
        // Text input field
        validateTextInput(_this);
      }else if(this.type === "email"){
        // Email input field
        validateEmailInput(_this);
      }else if(this.type === "number"){
        // Number input field
        validateNumberInput(_this);
      }
    }
    /*
     * Function to validate form
     * Is triggered on form submit
     * Cancels form submit if any input field is wrongly filled out
     * @params: event
     * @return: void 
     */
    function validateForm(event){
      var validForm = true;
      // "this" Can be interpreted as array of inputs
      // Loop through each input field and validate it
      for(var i = 0; i < this.length; i++){
        if(this[i].type === "text"){
          // Input field is tet, validate as text
          if(! validateTextInput(this[i])){
            // Input not valid
            validForm = false;
            break; // exit loop, no need to perform other checks
          }
        }else if(this[i].type === "email"){
          // Input field is email, validate as email
          if(!validateEmailInput(this[i])){
            validForm = false;
            break; // exit loop, no need to perform other checks
          }
        }else if(this[i].type === "number"){
          // Input field is number, validate as number
          if(!validateNumberInput(this[i])){
            validForm = false;
            break; // exit loop, no need to perform other checks
          }
        }
      }
      // Check if form is valid
      if(!validForm){
        // Form not valid, prevent submission and display alert
        event.preventDefault();
        alert("The form is not valid, please edit the boxes with a red border");
      }
    }

    // Add event listener to the order form - when submitting, call validateForm function
    orderform.addEventListener("submit", validateForm);
    // Attach input event listener to all input fields
    // When input is changed (event input), call validateInputField
    for(var i = 0; i < inputs.length; i++){
      inputs[i].addEventListener("input", validateInputField);
    }
  }
})();
