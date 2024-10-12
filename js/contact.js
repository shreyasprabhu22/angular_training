function validateForm(form) {
    event.preventDefault();

    const nameField = document.getElementById("name")
    if(nameField){
        const nameLen = nameField.value.trim();
        const namePattern = /^[a-zA-Z._ ]*$/;
        if (nameLen.length < 3 || !namePattern.test(nameLen)) {
            hasErrors=true
            alert("Name cannot be less than 3 charecters and should only contains letters")
        } 
    }
    
    hasErrors=false
    const emailField = document.getElementById("email")
    if (emailField) {
        const emailValue = emailField.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailValue)) {
            hasErrors=true
            alert("It is not a valid email")
            
        }
    }

 
    if (!hasErrors) {
        document.getElementById("myForm").reset(); 
        alert("forms submitted successful")
    }
}
 
 
