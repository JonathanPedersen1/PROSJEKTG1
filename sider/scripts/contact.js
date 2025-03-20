document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const form = event.target;
        const formData = new FormData(form);

        fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Show the response box
                    const responseBox = document.getElementById("form-response");
                    responseBox.style.display = "block";
                    responseBox.textContent =
                        "Thank you! Your message has been received. We will get back to you shortly."; // Success message
                    form.reset(); // Clear the form fields

                    // Hide the response box after 10 seconds
                    setTimeout(() => {
                        responseBox.style.display = "none";
                    }, 10000); // 10 seconds
                } else {
                    alert("There was an error submitting the form. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("There was an error submitting the form. Please try again.");
            });
    });
});
