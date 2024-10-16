function calc(event) {
    event.preventDefault();
    const mark = document.getElementById("marks").value;
    let msg = '';

    if (mark === "") {
        alert("Marks cannot be empty");
        return;
    }
    if (mark > 100 || mark < 0) {
        alert("Enter valid marks");
        return;
    }
    if (mark > 90) {
        msg = "Congrats!! You can get a 40% scholarship.";
    } else if (mark > 80) {
        msg = "Congrats!! You can get a 30% scholarship.";
    } else {
        msg = "OOPS!! You cannot get a scholarship.";
    }
    document.getElementById("res").value = msg;
}