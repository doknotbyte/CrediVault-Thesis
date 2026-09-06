// ======================================================
// SOURCE & EVIDENCE VERIFICATION
// INTERACTIVE ACTIVITY
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const imageOptions =
        document.querySelectorAll(".image-option");

    const feedbackBox =
        document.getElementById("feedbackBox");

    const feedbackText =
        document.querySelector(".feedback-text");

    const feedbackIcon =
        document.querySelector(".feedback-icon i");


    // ==================================================
    // SOURCE-SPECIFIC FEEDBACK
    // ==================================================

    const sourceFeedback = {

        // SOURCE A
        0: {
        type: "wrong",

        title: "Incorrect.",

        message:
            "This source is not a reliable choice because " +
            "the information cannot be sufficiently verified " +
            "from the source itself. A credible source should " +
            "provide identifiable information and evidence that " +
            "can be checked."
    },


    // SOURCE B
    1: {
        type: "wrong",

        title: "Not the Best Choice.",

        message:
            "This source should be treated with caution because " +
            "it does not provide enough clear and identifiable " +
            "evidence to establish the credibility of the claim. " +
            "Before accepting the information, check the original " +
            "source and compare the claim with credible sources."
    },


    // SOURCE C
    2: {
        type: "correct",

        title: "Correct!",

        message:
            "This is the most credible source because its " +
            "information can be checked and evaluated using " +
            "identifiable evidence. When evaluating online " +
            "information, look at the source, supporting evidence, " +
            "and context instead of relying only on popularity, " +
            "likes, shares, or presentation."
    }

    };


    // ==================================================
    // RESET ALL IMAGE STATES
    // ==================================================

    function resetImageStates() {

        imageOptions.forEach(function (card) {

            card.classList.remove(
                "correct",
                "wrong",
                "selected",
                "fade"
            );

            card.style.removeProperty("transform");
            card.style.removeProperty("border-color");
            card.style.removeProperty("box-shadow");
            card.style.removeProperty("background");

        });

    }


    // ==================================================
    // IMAGE OPTION CLICK
    // ==================================================

    imageOptions.forEach(function (option, index) {

        option.addEventListener("click", function () {

            // ------------------------------------------
            // RESET ALL PREVIOUS IMAGE STATES
            // ------------------------------------------

            resetImageStates();


            // ------------------------------------------
            // GET ANSWER
            // ------------------------------------------

            const answer =
                this.getAttribute("data-answer");


            // ------------------------------------------
            // SELECT CURRENT SOURCE
            // ------------------------------------------

            this.classList.add("selected");


            // ------------------------------------------
            // GET SOURCE-SPECIFIC FEEDBACK
            // ------------------------------------------

            let feedback =
                sourceFeedback[index];


            // ------------------------------------------
            // FALLBACK
            // ------------------------------------------

            if (!feedback) {

                if (answer === "correct") {

                    feedback = {

                        type: "correct",

                        title: "Correct!",

                        message:
                            "This source provides information " +
                            "that can be checked and verified. " +
                            "Always examine the source and evidence " +
                            "before trusting or sharing information."

                    };

                } else {

                    feedback = {

                        type: "wrong",

                        title: "Incorrect.",

                        message:
                            "This source does not provide enough " +
                            "evidence to confidently verify the claim. " +
                            "Check the original source and compare " +
                            "the information with credible sources."

                    };

                }

            }


            // ==================================================
            // APPLY RESULT TO CLICKED IMAGE ONLY
            // ==================================================

            if (feedback.type === "correct") {

                this.classList.add("correct");

            } else {

                this.classList.add("wrong");

            }


            // ==================================================
            // SHOW FEEDBACK IMMEDIATELY
            // ==================================================

            if (feedbackBox) {

                feedbackBox.classList.remove(
                    "correct-feedback",
                    "incorrect-feedback"
                );


                if (feedback.type === "correct") {

                    feedbackBox.classList.add(
                        "correct-feedback"
                    );

                } else {

                    feedbackBox.classList.add(
                        "incorrect-feedback"
                    );

                }

                feedbackBox.classList.add("show");

            }


            // ==================================================
            // FEEDBACK ICON
            // ==================================================

            if (feedbackIcon) {

                if (feedback.type === "correct") {

                    feedbackIcon.className =
                        "fa-solid fa-circle-check";

                } else {

                    feedbackIcon.className =
                        "fa-solid fa-circle-xmark";

                }

            }


            // ==================================================
            // FEEDBACK TEXT
            // ==================================================

            if (feedbackText) {

                feedbackText.innerHTML =
                    "<strong>" +
                    feedback.title +
                    "</strong><br><br>" +
                    feedback.message;

            }

        });

    });


    // ==================================================
    // HOVER ANIMATION
    // ==================================================

    imageOptions.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            // ------------------------------------------
            // CORRECT SOURCE = BLUE HOVER
            // ------------------------------------------

            if (card.classList.contains("correct")) {

                card.style.transform =
                    "translateY(-6px)";

                card.style.setProperty(
                    "border-color",
                    "#38bdf8",
                    "important"
                );

                card.style.setProperty(
                    "box-shadow",
                    "0 10px 25px rgba(56,189,248,.18)",
                    "important"
                );

                return;
            }


            // ------------------------------------------
            // WRONG SOURCES = RED HOVER
            // ------------------------------------------

            if (card.classList.contains("wrong")) {

                card.style.transform =
                    "translateY(-6px)";

                card.style.setProperty(
                    "border-color",
                    "#ef4444",
                    "important"
                );

                card.style.setProperty(
                    "box-shadow",
                    "0 10px 25px rgba(239,68,68,.18)",
                    "important"
                );

                return;
            }


            // ------------------------------------------
            // NORMAL HOVER
            // ------------------------------------------

            card.style.transform =
                "translateY(-6px)";

        });


        // ==================================================
        // HOVER RESET
        // ==================================================

        card.addEventListener("mouseleave", function () {

            card.style.removeProperty("transform");

            /*
             * Keep the result color after clicking.
             * Only remove hover styling when the card
             * does NOT have a result.
             */

            if (
                !card.classList.contains("correct") &&
                !card.classList.contains("wrong")
            ) {

                card.style.removeProperty("border-color");
                card.style.removeProperty("box-shadow");

            }

        });

    });


    // ======================================================
    // SCROLL REVEAL ANIMATION
    // ======================================================

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        /*
                         * Do not interfere with image-option
                         * transform/hover behavior.
                         */

                        if (
                            !entry.target.classList.contains(
                                "image-option"
                            )
                        ) {

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    // ======================================================
    // APPLY SCROLL REVEAL
    // ======================================================

    document
        .querySelectorAll(
            ".content-card, .activity-card"
        )
        .forEach(function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(40px)";

            card.style.transition =
                "opacity .7s ease, transform .7s ease";

            observer.observe(card);

        });


    // ======================================================
    // PROGRESS BAR ANIMATION
    // ======================================================

    window.addEventListener(
        "load",
        function () {

            const progress =
                document.querySelector(".progress-fill");


            if (!progress) {

                return;

            }


            progress.style.width = "0%";


            setTimeout(
                function () {

                    progress.style.transition =
                        "width 1.2s ease";

                    progress.style.width = "50%";

                },
                300
            );

        }
    );


    // ======================================================
    // MOBILE QUICK NAVIGATION
    // ======================================================

    const mobileMenuBtn =
        document.querySelector(".mobile-menu-btn");

    const quickNav =
        document.querySelector(".quick-nav");


    if (mobileMenuBtn && quickNav) {

        mobileMenuBtn.addEventListener(
            "click",
            function () {

                quickNav.classList.toggle("open");

            }
        );

    }


    // ======================================================
    // CLOSE MOBILE NAVIGATION
    // ======================================================

    const quickNavLinks =
        document.querySelectorAll(".quick-nav a");


    quickNavLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (quickNav) {

                    quickNav.classList.remove("open");

                }

            }
        );

    });

});