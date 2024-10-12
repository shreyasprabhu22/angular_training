function scholarship(){
    modal= document.getElementById("myModal")
    modal.style.display="block"
}


function closeModal() {
    modal= document.getElementById("myModal")
    modal.style.display = "none";
  }

function calc(){
    event.preventDefault();
    mark= document.getElementById("marks").value 
    if(mark==""){
        alert("marks cannot be empty")
        return
    }
    if(mark>100 || mark<0){
        alert("enter valid marks")
    }
    if(mark > 90){
        msg=" Congrats!! you can get 40% scholarship"
    }
    else if(mark < 90 && mark>80){
        msg=" Congrats!! you can get 30% scholarship"
    }
    else{
        msg="OOPS!! You cannot get scholarship."
    }
    document.getElementById("res").value=msg
}