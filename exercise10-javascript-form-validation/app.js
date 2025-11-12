let form=document.getElementById("signupForm");
console.log(form);
let nameInput=document.getElementById("nameInput");
console.log(nameInput);
let emailInput=document.getElementById("emailInput");
console.log(emailInput);
let passwordInput=document.getElementById("passwordInput");
console.log(passwordInput);
let btn=document.getElementById("btn");
console.log(btn);

//  errors
let nameError=document.getElementById("nameError");
console.log(nameError);
let emailError=document.getElementById("emailError");
console.log(emailError);
let passwordError=document.getElementById("passwordError");
console.log(passwordError);

// form submit
form.addEventListener("submit", function(event){
    event.preventDefault()  // stop the form from submitting automatically..

    nameError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";

    let isValid=true; 

    if(nameInput.value.trim()===""){
        nameError.textContent = "Name is required";
        isValid=false;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailInput.value.trim()===""){
        emailError.textContent="Email is required";
        isValid=false;
    }else if(!emailPattern.test(emailInput.value.trim())){
        emailError.textContent="Please enter a valid email address";
        isValid=false;
    }

    // passwrod validation

    if(passwordInput.value.trim()===""){
        passwordError.textContent="Password is required";
        isValid=false
    }else if(passwordInput.value.length<6){
        passwordError.textContent="Password must be at least 6 characters";
        isValid=false;
    }

    if(isValid){
        alert("Form submitted successfully!");
        form.reset();
    }

})