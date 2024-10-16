function navigateToCourse() {
    const select = document.getElementById("course").value;
    if (select) {
        const courseElement = document.getElementById(select);
        if (courseElement) {
            courseElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}


function go_to_course(){
    var url = document.pre_requisites.selectname.options[document.pre_requisites.selectname.selectedIndex].value
    window.location.href = url        
}


