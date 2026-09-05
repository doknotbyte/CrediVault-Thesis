// ======================================================
// AI MANIPULATION INTERACTIVE ACTIVITY
// ======================================================

const imageOptions = document.querySelectorAll(".image-option");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.querySelector(".feedback-text");


// ======================================================
// IMAGE OPTION CLICK
// ======================================================

imageOptions.forEach(option => {

    option.addEventListener("click", function () {

        const answer = this.dataset.answer;


        // --------------------------------------------------
        // REMOVE PREVIOUS CORRECT / WRONG STATES
        // --------------------------------------------------

        imageOptions.forEach(card => {

            card.classList.remove("correct");
            card.classList.remove("wrong");
            card.classList.remove("fade");

        });


        // --------------------------------------------------
        // CORRECT ANSWER
        // --------------------------------------------------

        if (answer === "correct") {

            this.classList.add("correct");

            feedbackText.innerHTML = `
                <strong>Correct!</strong><br><br>
                Excellent observation. This image appears authentic because
                its lighting, facial details, proportions, and background
                elements remain consistent. Real photographs generally
                maintain natural textures and realistic visual patterns.
            `;

            feedbackBox.classList.remove("incorrect-feedback");
            feedbackBox.classList.add("correct-feedback");
            feedbackBox.classList.add("show");

        }


        // --------------------------------------------------
        // INCORRECT ANSWER
        // --------------------------------------------------

        else {

            this.classList.add("wrong");
            this.classList.add("fade");

            // Show the incorrect visual state for 2 seconds
            setTimeout(() => {

                // Return the image to its original appearance
                this.classList.remove("wrong");
                this.classList.remove("fade");


                // Show incorrect feedback
                feedbackText.innerHTML = `
                    <strong>Incorrect.</strong><br><br>
                    This image contains characteristics commonly found
                    in AI-generated content such as unnatural textures,
                    inconsistent lighting, distorted edges, or unrealistic
                    visual details. Always inspect images carefully before
                    believing or sharing them online.
                `;

                feedbackBox.classList.remove("correct-feedback");
                feedbackBox.classList.add("incorrect-feedback");
                feedbackBox.classList.add("show");

            }, 2000);

        }

    });

});


// ======================================================
// OPTIONAL HOVER ANIMATION
// ======================================================

imageOptions.forEach(card => {

    card.addEventListener("mouseenter", () => {

        if (
            card.classList.contains("correct") ||
            card.classList.contains("wrong")
        ) return;

        card.style.transform = "translateY(-8px) scale(1.02)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// ======================================================
// SCROLL REVEAL ANIMATION
// ======================================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});


document.querySelectorAll(".content-card, .activity-card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s ease";

    observer.observe(card);

});


// ======================================================
// PROGRESS BAR ANIMATION
// ======================================================

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-fill");

    if (!progress) return;

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition = "1.2s ease";
        progress.style.width = "50%";

    }, 300);

});

// ======================================================
// MOBILE QUICK NAVIGATION
// ======================================================

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const quickNav = document.querySelector(".quick-nav");

if (mobileMenuBtn && quickNav) {

    mobileMenuBtn.addEventListener("click", () => {

        quickNav.classList.toggle("open");

    });

}


// ======================================================
// CLOSE MOBILE NAVIGATION AFTER SELECTING SECTION
// ======================================================

const quickNavLinks = document.querySelectorAll(".quick-nav a");

quickNavLinks.forEach(link => {

    link.addEventListener("click", () => {

        quickNav.classList.remove("open");

    });

});