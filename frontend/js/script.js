document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const artCards = document.querySelectorAll(".art-card");

    function updateGallery() {
        const selectedCategory = categoryFilter.value;
        const sortBy = sortFilter.value;

        artCards.forEach(card => {
            
            const cardCategory = card.getAttribute("data-category");
            const priceAttr = card.getAttribute("data-price"); 
            const price = parseFloat(priceAttr);
            
            const title = card.querySelector("h3").textContent.trim().toUpperCase();
            const letterCode = title.charCodeAt(0);

            
            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

            
            if (sortBy === "default") {
                card.style.order = "0"; 
            } 
            else if (sortBy === "low-high") {
                
                if (priceAttr === "Not for sale" || isNaN(price)) {
                    card.style.order = "999999"; 
                } else {
                    card.style.order = Math.round(price); 
                }
            } 
            else if (sortBy === "high-low") {
                
                if (priceAttr === "Not for sale" || isNaN(price)) {
                    card.style.order = "9999999"; 
                } else {
                    
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
    
    const eventCards = document.querySelectorAll(".art-card");

    
    eventCards.forEach(function (card) {
        
        
        card.addEventListener("mouseenter", function () {
            card.style.backgroundColor = "#f0f8ff"; 
            card.style.borderColor = "#007bff";     
            card.style.transform = "scale(1.02)";   
            card.style.transition = "all 0.2s";     
        });

        
        card.addEventListener("mouseleave", function () {
            card.style.backgroundColor = "#ffffff"; 
            card.style.borderColor = "transparent"; 
            card.style.transform = "scale(1)";     
        });
        
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("artwork-form");
    const errorBox = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        
        const name = document.getElementById("artist-name").value.trim();
        const email = document.getElementById("artist-email").value.trim();
        const title = document.getElementById("artwork-title").value.trim();
        const category = document.getElementById("artwork-category").value;
        const price = document.getElementById("artwork-price").value.trim();
        const description = document.getElementById("artwork-description").value.trim();

        
        let errors = [];

        
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


        if (email !== "" && (!email.includes("@") || !email.includes("."))) {
            errors.push("Please enter a valid email address.");
        }

        
        if (price !== "") {
            const parsedPrice = Number(price);
            if (isNaN(parsedPrice) || parsedPrice <= 0) {
                errors.push("Price must be a valid positive number.");
            }
        }

        
        if (errors.length > 0) {
            
            errorBox.style.display = "block";
            errorBox.style.backgroundColor = "#ffdddd"; // Light red alert
            errorBox.style.color = "#990000"; // Dark red text
            errorBox.style.border = "1px solid #ff9999";
            
            
            errorBox.innerHTML = "<strong>Please correct the following:</strong><br>" + errors.join("<br>");
        } else {
            
            errorBox.style.display = "block";
            errorBox.style.backgroundColor = "#ddffdd"; // Light green success box
            errorBox.style.color = "#006600"; // Dark green text
            errorBox.style.border = "1px solid #99ff99";
            errorBox.innerHTML = "<strong>Success!</strong> Your artwork has been submitted (Client-side validation passed).";
            
    
            form.reset();
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("active");
            
            
            const answer = button.nextElementSibling;
            
            if (answer) {
                answer.classList.toggle("show");
            }
        });
    });
});