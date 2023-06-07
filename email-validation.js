const form = document.getElementById("form-1");
const emailInput = document.getElementById('valid-email');
const emailText = document.querySelector('#email-text');
// Event listener for form submission
form.addEventListener('submit', function(event){
    event.preventDefault();
    if (validateEmail(emailInput.value)){
        //redirect to second page
        localStorage.setItem('email', emailInput.value);
        window.location.href ="second-page.html";
    } else {
        removeErrorMessage();
        let p = document.createElement('p');
        p.innerHTML = "Valid email required";
        p.classList.add("error-text");
        emailInput.classList.add("invalid-input")
        emailText.appendChild(p);
    }
});

// Email validation
function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.split(',').length === 1;
}
function removeErrorMessage() {
    const errorMessages = emailText.getElementsByClassName("error-text");
    if (errorMessages.length > 0) {
        emailText.removeChild(errorMessages[0]);
    }
}