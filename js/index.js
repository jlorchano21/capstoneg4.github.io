// Function to check if passwords match and display error message
function checkPasswordsMatch() {
    var passwordInput = document.getElementById('passwords');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var passwordError = document.getElementById('passwordError');

    // Check if the passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
      passwordError.textContent = "Passwords don't match.";
      passwordError.style.display = 'block';
    } else {
      // If passwords match, clear the error message
      passwordError.textContent = '';
      passwordError.style.display = 'none';
    }
  }

  // Add event listeners for real-time validation
  document.getElementById('passwords').addEventListener('input', checkPasswordsMatch);
  document.getElementById('confirmPassword').addEventListener('input', checkPasswordsMatch);

  // Add event listener for form submission
  document.getElementById('regform').addEventListener('submit', function (event) {
    // Perform any additional form submission validation here if needed
    // For the password match validation, we already handle it in the input event.
  });

  
  //ajax
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginform").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission and page reload

        // Get form data
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Set up the request
        xhr.open("POST", "login.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // Set up the event listener for when the AJAX response is received
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                if (response === "success") {
                    // Redirect to home.php on successful login
                    window.location.href = "home.php";
                } else {
                    // Display the error message in the span element
                    document.getElementById("error-msg").textContent = response;
                }
            }
        };

        // Send the form data via AJAX to login.php
        xhr.send("email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password));
    });
});