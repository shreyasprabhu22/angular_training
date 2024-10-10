function loadHeader() {
    fetch('./header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}
 
function loadFooter() {
    fetch('./footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}
 
// Load header and footer when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();

    
});