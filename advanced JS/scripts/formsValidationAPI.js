/*function myFunction() {
    const inpObj = document.getElementById("inp1");
    //console.log(inpObj)
    console.log(inpObj.checkValidity())
    if (!inpObj.checkValidity()) {
      console.log(inpObj.validationMessage); // For input less than 100 -> Value must be greater than or equal to 100. For input greater than 300 -> Value must be less than or equal to 300.
    }
  }*/
  function checkpwd(){
    const pwdObj=document.getElementById("pwd")
    if (!pwdObj.checkValidity().valueMissing) {
      pwdObj.setCustomValidity("password cant be empty"); // For input less than 100 -> Value must be greater than or equal to 100. For input greater than 300 -> Value must be less than or equal to 300.
      }
  }

  
