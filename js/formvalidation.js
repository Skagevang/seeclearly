(function () {
  var orderform = document.querySelector(".orderform");
  if(orderform !== null){
    // Form exist
    var inputs = orderform.querySelectorAll("input");
    /*
     * Validates input element with given regular expression variable
     * Returns true/False depending on the outcome of the test
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
     * Validate text input field
     */
    function validateTextInput(element){
      var regex = /^[a-zæøå0-9-_ ]+$/i; 
      // Regex that allows a - z, æøå, 0-9, _ and - (uppercase and lowercase)
      return validateInputElementWithRegex(element, regex);
    }
    /*
     *Validate Email input field
     */
    function validateEmailInput(element){
      var regex = /^[a-zæøå0-9-_.+%]+[@][a-zæøå0-9-_.+%]+[.][a-zæøå0-9-_.+%]+$/i
      // Alphanumeric letters and "_, -, ., +, %" followed by "@", 
      //followed by same characters followed by "."" followed by same type
      return validateInputElementWithRegex(element, regex);
    }
    /*
     * Validate Number input field
     */
    function validateNumberInput(element){
      var regex = /^[0-9]+$/; // All numbers only
      return validateInputElementWithRegex(element, regex);
    }
    /*
     * Event handler that is triggered whenever an input field is modified.
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

    function validateForm(event){
      var validForm = true;
      // "this" Can be interpreted as array of inputs
      // Loop through each input field and validate it
      for(var i = 0; i < this.length; i++){
        if(this[i].type === "text"){
          if(! validateTextInput(this[i])){
            // Input not valid
            validForm = false;
            break; // exit loop, no need to perform other checks
          }
        }else if(this[i].type === "email"){
          if(!validateEmailInput(this[i])){
            validForm = false;
            break; // exit loop, no need to perform other checks
          }
        }else if(this[i].type === "number"){
          if(!validateNumberInput(this[i])){
            validForm = false;
            break; // exit loop, no need to perform other checks
          }
        }
      }
        
      if(!validForm){
        // Form not valid
        event.preventDefault();
        alert("The form is not valid, please edit the boxes with a red border");
      }

    }

    orderform.addEventListener("submit", validateForm);
    // Attach input event listener to all input fields
    for(var i = 0; i < inputs.length; i++){
      inputs[i].addEventListener("input", validateInputField);
    }
  }
})();