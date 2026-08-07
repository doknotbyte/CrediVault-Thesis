// ======================================================
// AI GENERATED MISINFORMATION INTERACTIVE ACTIVITY
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
        // CLEAR PREVIOUS IMAGE STATES
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
                This post is actually about AI-generated fake wildfire images
                being spread online — officials had to step in to warn the
                public. The dramatic, almost too-perfect imagery is a red flag:
                always check if a photo looks artificially polished or lacks
                a verifiable news source.
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


            // Keep the incorrect effect for 2 seconds
            setTimeout(() => {

                // Return image to original appearance
                this.classList.remove("wrong");
                this.classList.remove("fade");


                // Show incorrect feedback
                feedbackText.innerHTML = `
                    <strong>Incorrect.</strong><br><br>
                    This is real, verified reporting — a named journalist,
                    a credited outlet, an on-the-ground video, and a specific
                    dateline (Pacific Palisades, LA). Authentic disaster
                    coverage comes with real bylines and raw, imperfect
                    footage — not cinematic AI-generated visuals.
                `;

                feedbackBox.classList.remove("correct-feedback");
                feedbackBox.classList.add("incorrect-feedback");
                feedbackBox.classList.add("show");

            }, 2000);

        }

    });

});



// ======================================================
// HOVER ANIMATION
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
        progress.style.width = "100%";

    }, 300);

});