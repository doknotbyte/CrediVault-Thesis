// ======================================================
// AI MANIPULATION INTERACTIVE ACTIVITY
// ======================================================

const imageOptions = document.querySelectorAll(".image-option");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.querySelector(".feedback-text");

let isProcessing = false;

imageOptions.forEach(option => {

    option.addEventListener("click", function () {

        if (isProcessing) return;

        isProcessing = true;

        const answer = this.dataset.answer;

        if (answer === "correct") {

            this.classList.add("correct");

            feedbackText.innerHTML = `
                <strong>Correct!</strong><br><br>
                Excellent observation. This image appears authentic because
                its lighting, facial details, proportions, and background
                elements remain consistent. Real photographs generally
                maintain natural textures and realistic visual patterns.
            `;

            feedbackBox.classList.add("show");

            setTimeout(resetActivity, 3000);

        }

        else {

            this.classList.add("wrong");
            this.classList.add("fade");

            setTimeout(() => {

                feedbackText.innerHTML = `
                    <strong>Incorrect.</strong><br><br>
                    This image contains characteristics commonly found
                    in AI-generated content such as unnatural textures,
                    inconsistent lighting, distorted edges, or unrealistic
                    visual details. Always inspect images carefully before
                    believing or sharing them online.
                `;

                feedbackBox.classList.add("show");

                setTimeout(resetActivity, 3000);

            }, 3000);

        }

    });

});

// ======================================================
// RESET ACTIVITY
// ======================================================

function resetActivity() {

    feedbackBox.classList.remove("show");

    imageOptions.forEach(card => {

        card.classList.remove("correct");
        card.classList.remove("wrong");
        card.classList.remove("fade");
        card.style.transform = "";

    });

    isProcessing = false;

}

// ======================================================
// OPTIONAL HOVER ANIMATION
// ======================================================

imageOptions.forEach(card => {

    card.addEventListener("mouseenter", () => {

        if (isProcessing) return;

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        if (isProcessing) return;

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

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition = "1.2s ease";
        progress.style.width = "50%";

    }, 300);

});