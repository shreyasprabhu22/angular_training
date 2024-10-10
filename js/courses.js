function navigateToCourse() {
    const select = document.getElementById("course").value;
    if (select) {
        const courseElement = document.getElementById(select);
        if (courseElement) {
            courseElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}