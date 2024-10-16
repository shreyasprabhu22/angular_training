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
            document.getElementById("name").select()
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
            document.getElementById("email").select()
            return
            
        }
    }
 
 
    var checkbox_choices = 0;
    for (counter = 0;  counter < frm1.checkbox.length; counter++)
    {
        if (frm1.checkbox[counter].checked)
        { 
            checkbox_choices = checkbox_choices + 1; }
            

    }


    if (checkbox_choices >  2 )
    {
        msg="You're limited to only two selections.\n"
        msg=msg + "You have made " + checkbox_choices + " selections.\n"
        msg=msg + "Please remove " + (checkbox_choices-2)  + " selection(s)."
        alert(msg)
        hasErrors=true;
        
    }


    if (checkbox_choices < 2 )
    {

        alert("Please make two selections. \n" + checkbox_choices + " entered so far.")
        hasErrors=true
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


function scaleButton(element){
    element.style.transform="scale(1.1) "
}

function resetScale(element){
    element.style.transform="scale(1)"
}