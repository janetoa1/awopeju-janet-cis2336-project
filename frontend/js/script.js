document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const artCards = document.querySelectorAll(".art-card");

    function updateGallery() {
        const selectedCategory = categoryFilter.value;
        const sortBy = sortFilter.value;

        artCards.forEach(card => {
            // --- PART 1: GET DATA FROM THE CARD ---
            const cardCategory = card.getAttribute("data-category");
            const priceAttr = card.getAttribute("data-price"); 
            const price = parseFloat(priceAttr);
            
            const title = card.querySelector("h3").textContent.trim().toUpperCase();
            const letterCode = title.charCodeAt(0);

            // --- PART 2: FILTERING LOGIC (Show / Hide) ---
            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

            // --- PART 3: SORTING LOGIC (Rearrange Order) ---
            if (sortBy === "default") {
                card.style.order = "0"; 
            } 
            else if (sortBy === "low-high") {
                // FIX: If not for sale, give it a HUGE order number so it goes to the very end
                if (priceAttr === "Not for sale" || isNaN(price)) {
                    card.style.order = "999999"; 
                } else {
                    card.style.order = Math.round(price); 
                }
            } 
            else if (sortBy === "high-low") {
                // FIX: If not for sale, make sure it still goes to the very end
                if (priceAttr === "Not for sale" || isNaN(price)) {
                    card.style.order = "9999999"; 
                } else {
                    // FIX: Changed 10,000 to 1,000,000 just in case you have art worth more than $10k!
                    card.style.order = Math.round(1000000 - price); 
                }
            } 
            else if (sortBy === "a-z") {
                card.style.order = letterCode; 
            } 
            else if (sortBy === "z-a") {
                card.style.order = 200 - letterCode; 
            }
        });
    }

    categoryFilter.addEventListener("change", updateGallery);
    sortFilter.addEventListener("change", updateGallery);
});




document.addEventListener("DOMContentLoaded", function () {
    // 1. Get all the event cards on the page
    const eventCards = document.querySelectorAll(".art-card");

    // 2. Loop through each card one by one
    eventCards.forEach(function (card) {
        
        // When the user's mouse enters the card, change the style
        card.addEventListener("mouseenter", function () {
            card.style.backgroundColor = "#f0f8ff"; // Light blue tint
            card.style.borderColor = "#007bff";     // Add an accent border
            card.style.transform = "scale(1.02)";   // Tiny pop-out effect
            card.style.transition = "all 0.2s";     // Make it smooth
        });

        // When the user's mouse leaves the card, reset it back to normal
        card.addEventListener("mouseleave", function () {
            card.style.backgroundColor = "#ffffff"; // Reset to white
            card.style.borderColor = "transparent"; // Remove border
            card.style.transform = "scale(1)";      // Reset size
        });
        
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("artwork-form");
    const errorBox = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        // Stop the form from reloading the page
        event.preventDefault();

        // Get all the input values
        const name = document.getElementById("artist-name").value.trim();
        const email = document.getElementById("artist-email").value.trim();
        const title = document.getElementById("artwork-title").value.trim();
        const category = document.getElementById("artwork-category").value;
        const price = document.getElementById("artwork-price").value.trim();
        const description = document.getElementById("artwork-description").value.trim();

        // Array to collect any validation errors
        let errors = [];

        // 1. Empty Field Validation
        if (name === "") {
            errors.push("Artist Name is required.");
        }
        if (email === "") {
            errors.push("Email Address is required.");
        }
        if (title === "") {
            errors.push("Artwork Title is required.");
        }
        if (category === "") {
            errors.push("Please select a Category.");
        }
        if (price === "") {
            errors.push("Price is required.");
        }
        if (description === "") {
            errors.push("Description is required.");
        }

        // 2. Email Validation (checks if email contains '@' and a '.')
        if (email !== "" && (!email.includes("@") || !email.includes("."))) {
            errors.push("Please enter a valid email address.");
        }

        // 3. Numeric Validation (checks if price is a valid, positive number)
        if (price !== "") {
            const parsedPrice = Number(price);
            if (isNaN(parsedPrice) || parsedPrice <= 0) {
                errors.push("Price must be a valid positive number.");
            }
        }

        // --- Check if there are errors ---
        if (errors.length > 0) {
            // Show the errors in our error box
            errorBox.style.display = "block";
            errorBox.style.backgroundColor = "#ffdddd"; // Light red alert
            errorBox.style.color = "#990000"; // Dark red text
            errorBox.style.border = "1px solid #ff9999";
            
            // Join all errors with line breaks (<br>)
            errorBox.innerHTML = "<strong>Please correct the following:</strong><br>" + errors.join("<br>");
        } else {
            // Success! No errors found.
            errorBox.style.display = "block";
            errorBox.style.backgroundColor = "#ddffdd"; // Light green success box
            errorBox.style.color = "#006600"; // Dark green text
            errorBox.style.border = "1px solid #99ff99";
            errorBox.innerHTML = "<strong>Success!</strong> Your artwork has been submitted (Client-side validation passed).";
            
            // Reset the form inputs
            form.reset();
        }
    });
});

// =========================================
// BULLETPROOF FAQ TOGGLE
// =========================================
// =========================================
// BULLETPROOF FAQ TOGGLE
// =========================================
document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // 1. Toggle the "active" class on the button to turn the arrow (▼ to ▲)
            button.classList.toggle("active");
            
            // 2. Find the answer block right next to this button
            const answer = button.nextElementSibling;
            
            if (answer) {
                // 3. Toggle the "show" class on the answer block
                answer.classList.toggle("show");
            }
        });
    });
});