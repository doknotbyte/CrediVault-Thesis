// ======================================================
// INFLUENCE OF POPULARITY INTERACTIVE CHALLENGE
// ======================================================

const imageOptions = document.querySelectorAll(".image-option");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.getElementById("feedbackText");
const actionChoices = document.querySelectorAll(".action-btn");

let selectedImage = null;


// ======================================================
// IMAGE SELECTION
// ======================================================

imageOptions.forEach(option => {

    option.addEventListener("click", function () {

        // ----------------------------------------------
        // REMOVE SELECTED STATE FROM ALL IMAGES
        // ----------------------------------------------

        imageOptions.forEach(card => {

            card.classList.remove("selected");

            card.style.transform = "";

        });


        // ----------------------------------------------
        // SELECT CLICKED IMAGE
        // ----------------------------------------------

        this.classList.add("selected");

        selectedImage = this.dataset.image;


        // ----------------------------------------------
        // RESET ACTION CHOICES
        // ----------------------------------------------

        actionChoices.forEach(choice => {

            choice.classList.remove("selected");
            choice.classList.remove("correct");
            choice.classList.remove("wrong");

        });


        // ----------------------------------------------
        // SHOW IMAGE SELECTION FEEDBACK
        // ----------------------------------------------

        if (selectedImage === "high") {

            feedbackText.innerHTML = `

                <strong>High Popularity Post selected.</strong><br>

                What would you do before trusting this post? Select one or more actions.

            `;

        }

        else if (selectedImage === "low") {

            feedbackText.innerHTML = `

                <strong>Low Popularity Post selected.</strong><br>

                What would you do before trusting this post? Select one or more actions.

            `;

        }

        feedbackBox.classList.add("show");

    });

});


// ======================================================
// ACTION CHOICES
// ======================================================

actionChoices.forEach(choice => {

    choice.addEventListener("click", function () {

        // ----------------------------------------------
        // REQUIRE IMAGE SELECTION FIRST
        // ----------------------------------------------

        if (!selectedImage) {

            feedbackText.innerHTML = `

                <strong>Select a post first.</strong><br><br>

                Click either the High Popularity or Low
                Popularity post before choosing an action.

            `;

            feedbackBox.classList.add("show");

            return;

        }


        // ----------------------------------------------
        // GET SELECTED ACTION
        // ----------------------------------------------

        const action = this.dataset.action;


        // ----------------------------------------------
        // TOGGLE ACTION
        // ----------------------------------------------

        this.classList.toggle("selected");


        // ----------------------------------------------
        // REMOVE PREVIOUS RESULT STATE
        // ----------------------------------------------

        this.classList.remove("correct");
        this.classList.remove("wrong");


        // ----------------------------------------------
        // POPULARITY ACTION
        // ----------------------------------------------

        if (action === "popularity") {

            this.classList.add("wrong");


            if (selectedImage === "low") {

                feedbackText.innerHTML = `

                    <strong>Incorrect action.</strong><br>

                    The Low Popularity Post should not be trusted
                    or rejected based on its engagement level.
                    Having fewer likes does not automatically mean
                    that the information is false.


                `;

            }

            else if (selectedImage === "high") {

                feedbackText.innerHTML = `

                    <strong>Incorrect action.</strong><br>

                    A large number of likes, comments, and shares
                    does not prove that the information is accurate.
                    Popularity shows engagement, not credibility.

                    

                `;

            }

        }


        // ----------------------------------------------
        // RESPONSIBLE VERIFICATION ACTIONS
        // ----------------------------------------------

        else {

            this.classList.add("correct");


            if (selectedImage === "low") {

                feedbackText.innerHTML = `

                    <strong>Good verification choice!</strong><br><br>

                    This is a responsible action because the number
                    of likes, comments, or shares should not determine
                    whether information is trustworthy.

                    <br><br>

                    For a low-engagement post, checking the original
                    source, publication date, and other reliable sources
                    helps evaluate the information itself.

                `;

            }

            else if (selectedImage === "high") {

                feedbackText.innerHTML = `

                    <strong>Good verification choice!</strong><br><br>

                    This is a responsible action because popularity
                    does not guarantee accuracy. A highly shared post
                    can still contain false or misleading information.

                    <br><br>

                    Checking the original source, publication date,
                    and other reliable sources helps determine whether
                    the information is actually trustworthy.

                `;

            }

        }


        // ----------------------------------------------
        // SHOW FEEDBACK
        // ----------------------------------------------

        feedbackBox.classList.add("show");

    });

});


// ======================================================
// HOVER EFFECT — IMAGE
// ======================================================

imageOptions.forEach(card => {

    card.addEventListener("mouseenter", () => {

        if (card.classList.contains("selected")) return;

        card.style.transform =
            "translateY(-8px) scale(1.02)";

    });


    card.addEventListener("mouseleave", () => {

        if (card.classList.contains("selected")) return;

        card.style.transform = "";

    });

});


// ======================================================
// HOVER EFFECT — ACTION CHOICES
// ======================================================

actionChoices.forEach(choice => {

    choice.addEventListener("mouseenter", () => {

        choice.style.transform =
            "translateY(-3px)";

    });


    choice.addEventListener("mouseleave", () => {

        choice.style.transform = "";

    });

});


// ======================================================
// SCROLL REVEAL
// ======================================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

}, {

    threshold: .15

});


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
// PROGRESS BAR
// ======================================================

window.addEventListener("load", () => {

    const progress =
        document.querySelector(".progress-fill");

    if (!progress) return;

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition =
            "1.2s ease";

        progress.style.width = "80%";

    }, 300);

});

