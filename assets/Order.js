// Function to validate the order form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;

    // Check if required fields are empty
    if (name === "" || email === "" || phone === "" || product === "" || quantity === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    // Validate email format
    var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,})+$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone number format (optional)
    // Example: allow only digits and dashes
    var phoneRegex = /^[\d-]+$/;
    if (!phone.match(phoneRegex)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // Validate quantity (optional)
    // Example: allow only positive integers
    if (isNaN(quantity) || quantity <= 0 || Math.floor(quantity) !== +quantity) {
        alert("Please enter a valid quantity.");
        return false;
    }

    // Form is valid
    return true;
}

// Add event listener to the form submit button
document.getElementById("order-form").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
        // If form is valid, submit the form
        this.submit();
    }
});