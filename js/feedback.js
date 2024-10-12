function showFeedbackForm(selectedForm){
    const forms = document.querySelectorAll('.feedback-form');
            forms.forEach(form => {
                form.style.display = 'none';
            });
    const selected = document.getElementById(selectedForm);
    if (selected) {
        selected.style.display = 'block';
    }
}