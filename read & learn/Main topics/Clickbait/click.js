// ======================================================
// CLICKBAIT INTERACTIVE CHALLENGE
// ======================================================

const imageOptions = document.querySelectorAll(".image-option");
const techniqueButtons = document.querySelectorAll(".technique-btn");

const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.getElementById("feedbackText");
const feedbackIcon = document.querySelector(".feedback-icon");


// ======================================================
// CURRENT SELECTION
// ======================================================

let selectedImage = null;


// ======================================================
// CORRECT ANSWERS
// ======================================================

const correctAnswers = {

    bait1: "sensationalism",

    bait2: "curiosity"

};


// ======================================================
// FEEDBACK CONTENT
// ======================================================

const feedback = {

    bait1: {

        correct: `
            <strong>Correct!</strong><br><br>

            This post uses <strong>sensationalism</strong>.
            The headline uses dramatic and exaggerated wording
            to make the story appear more shocking and encourage
            people to click.
        `,

        incorrect: `
            <strong>Incorrect.</strong><br><br>

            The main clickbait technique used in this post is
            <strong>sensationalism</strong>. The headline relies
            on dramatic or exaggerated wording to attract attention
            and encourage clicks.
        `

    },


    bait2: {

        correct: `
            <strong>Correct!</strong><br><br>

            This post uses a <strong>curiosity gap</strong>.
            Important information is left out, making the reader
            curious about what happened and encouraging them to
            click to find out more.
        `,

        incorrect: `
            <strong>Incorrect.</strong><br><br>

            The main clickbait technique used in this post is
            <strong>curiosity gap</strong>. The post withholds
            important information so readers feel compelled to
            click to discover the missing details.
        `

    }

};


// ======================================================
// IMAGE SELECTION
// ======================================================

imageOptions.forEach(image => {

    image.addEventListener("click", function () {

        const imageName = this.dataset.image;

        selectedImage = imageName;


        // Remove previous selection

        imageOptions.forEach(card => {

            card.classList.remove("selected");

        });


        // Highlight selected image

        this.classList.add("selected");


        // Reset technique buttons

        techniqueButtons.forEach(button => {

            button.classList.remove("correct");
            button.classList.remove("wrong");

        });


        // Update feedback

        feedbackBox.classList.remove(
            "correct-feedback",
            "incorrect-feedback"
        );

        feedbackIcon.innerHTML =
            '<i class="fa-solid fa-circle-info"></i>';

        feedbackIcon.style.color = "#38bdf8";

        feedbackText.innerHTML = `
            Image selected. Now choose the clickbait
            technique you think is being used.
        `;

        feedbackBox.classList.add("show");

    });

});


// ======================================================
// TECHNIQUE SELECTION
// ======================================================

techniqueButtons.forEach(button => {

    button.addEventListener("click", function () {

        // User must select an image first

        if (!selectedImage) {

            feedbackBox.classList.remove(
                "correct-feedback",
                "incorrect-feedback"
            );

            feedbackIcon.innerHTML =
                '<i class="fa-solid fa-circle-info"></i>';

            feedbackIcon.style.color = "#38bdf8";

            feedbackText.innerHTML = `
                <strong>Select an image first.</strong><br><br>

                Click one of the posts above before choosing
                a clickbait technique.
            `;

            feedbackBox.classList.add("show");

            return;

        }


        const selectedTechnique =
            this.dataset.technique;

        const correctTechnique =
            correctAnswers[selectedImage];


        // Remove previous result from all buttons

        techniqueButtons.forEach(btn => {

            btn.classList.remove(
                "correct",
                "wrong"
            );

        });


        // ==================================================
        // CORRECT
        // ==================================================

        if (selectedTechnique === correctTechnique) {

            this.classList.add("correct");


            feedbackBox.classList.remove(
                "incorrect-feedback"
            );

            feedbackBox.classList.add(
                "correct-feedback"
            );


            feedbackIcon.innerHTML =
                '<i class="fa-solid fa-circle-check"></i>';

            feedbackIcon.style.color = "#22c55e";


            feedbackText.innerHTML =
                feedback[selectedImage].correct;

        }


        // ==================================================
        // INCORRECT
        // ==================================================

        else {

            this.classList.add("wrong");


            feedbackBox.classList.remove(
                "correct-feedback"
            );

            feedbackBox.classList.add(
                "incorrect-feedback"
            );


            feedbackIcon.innerHTML =
                '<i class="fa-solid fa-circle-xmark"></i>';

            feedbackIcon.style.color = "#ef4444";


            feedbackText.innerHTML =
                feedback[selectedImage].incorrect;

        }


        // Keep feedback visible

        feedbackBox.classList.add("show");

    });

});


// ======================================================
// HOVER EFFECT
// ======================================================

imageOptions.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-6px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// ======================================================
// SCROLL REVEAL
// ======================================================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(".content-card, .activity-card")
    .forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(40px)";

        card.style.transition =
            ".7s ease";

        observer.observe(card);

    });


// ======================================================
// PROGRESS BAR ANIMATION
// ======================================================

window.addEventListener("load", () => {

    const progress =
        document.querySelector(".progress-fill");


    if (!progress) return;


    progress.style.width = "0%";


    setTimeout(() => {

        progress.style.transition =
            "1.2s ease";

        progress.style.width = "100%";

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