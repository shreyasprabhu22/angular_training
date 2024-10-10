function validateForm() {
    event.preventDefault();
    hasErrors=false
    const emailField = document.getElementById("email")

    const nameField = document.getElementById("name")
    if(nameField){
        const nameLen = nameField.value.trim();
        const namePattern = /^[a-zA-Z._ ]*$/;
        if (nameLen.length < 3 || !namePattern.test(nameLen)) {
            hasErrors=true
            alert("Name cannot be less than 3 characters and should only contains letters")
            document.getElementById("name").style.boxShadow= "0 0 5px red"
            return
        }

    }

    
    if (emailField) {
        const emailValue = emailField.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailValue)) {
            hasErrors=true
            alert("It is not a valid email")
            document.getElementById("email").style.boxShadow= "0 0 5px red"
            return
            
        }
    }
 
    const passwordField = document.getElementById("pwd")
    if (passwordField) {
        const passwordLen = passwordField.value.trim();
        if (passwordLen.length < 8) {
            hasErrors=true
            alert("password should be more than 8 charecters ")
            document.getElementById("pwd").style.boxShadow= "0 0 5px red"
        } 
    }
 
    
 
    if (!hasErrors) {
        document.getElementById("myForm").reset(); 
        alert("forms submitted successful")
    }
}
 
function handleFocus(element) {
    element.style.border = "1px solid #4CAF50"; 
    element.style.boxShadow = "0 0 5px rgba(76, 175, 80, 0.5)"; 
    element.style.outline = "none"; 
}

function handleBlur(element) {
    element.style.border = ""; 
    element.style.boxShadow = ""; 
    element.style.outline = ""; 
}