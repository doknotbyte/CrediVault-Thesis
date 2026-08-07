// ======================================================
// INFLUENCE OF POPULARITY INTERACTIVE CHALLENGE
// ======================================================

const imageOptions = document.querySelectorAll(".image-option");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.querySelector(".feedback-text");


// ======================================================
// IMAGE CLICK
// ======================================================

imageOptions.forEach(option => {

    option.addEventListener("click", function () {

        const answer = this.dataset.answer;


        // ==============================================
        // REMOVE PREVIOUS STATES FROM ALL IMAGES
        // ==============================================

        imageOptions.forEach(card => {

            card.classList.remove("correct");
            card.classList.remove("wrong");
            card.classList.remove("fade");

        });


        // ==============================================
        // CORRECT ANSWER
        // ==============================================

        if (answer === "correct") {

            this.classList.add("correct");

            feedbackText.innerHTML = `

                <strong>Correct!</strong><br><br>

                Low popularity does not automatically mean false,
                just as high popularity does not automatically mean true.

                Every post should be verified using trusted sources,
                regardless of its number of likes, comments, or shares.

            `;

            feedbackBox.classList.remove("incorrect-feedback");
            feedbackBox.classList.add("correct-feedback");
            feedbackBox.classList.add("show");

        }


        // ==============================================
        // INCORRECT ANSWER
        // ==============================================

        else {

            this.classList.add("wrong");
            this.classList.add("fade");


            // Keep feedback hidden while image fades

            feedbackBox.classList.remove("show");


            setTimeout(() => {

                // Restore original image appearance

                this.classList.remove("wrong");
                this.classList.remove("fade");


                // Show incorrect feedback

                feedbackText.innerHTML = `

                    <strong>Incorrect.</strong><br><br>

                    Many people believe viral posts are automatically
                    trustworthy because thousands of users have shared
                    them. However, popularity reflects engagement—not
                    credibility. Even highly shared content can spread
                    misinformation.

                `;

                feedbackBox.classList.remove("correct-feedback");
                feedbackBox.classList.add("incorrect-feedback");
                feedbackBox.classList.add("show");

            }, 2000);

        }

    });

});


// ======================================================
// HOVER EFFECT
// ======================================================

imageOptions.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// ======================================================
// SCROLL REVEAL
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
// PROGRESS BAR
// ======================================================

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-fill");

    if (!progress) return;

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition = "1.2s ease";

        progress.style.width = "80%";

    }, 300);

});