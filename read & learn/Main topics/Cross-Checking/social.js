document.addEventListener("DOMContentLoaded", function () {

    // ======================================================
    // SOCIAL VALIDATION
    // ======================================================

    const verificationOptions =
        document.querySelectorAll(".verification-option");

    const checkAnswersBtn =
        document.getElementById("checkAnswersBtn");

    const resetAnswersBtn =
        document.getElementById("resetAnswersBtn");

    const feedbackBox =
        document.getElementById("feedbackBox");

    const feedbackText =
        document.getElementById("feedbackText");

    const feedbackIcon =
        document.getElementById("feedbackIcon");


    // ======================================================
    // SELECT VERIFICATION OPTIONS
    // ======================================================

    verificationOptions.forEach(function (option) {

        option.addEventListener("click", function () {

            // Do not allow changes after checking
            if (
                checkAnswersBtn &&
                checkAnswersBtn.classList.contains("checked")
            ) {
                return;
            }

            // Toggle selected state
            option.classList.toggle("selected");

            // Accessibility
            option.setAttribute(
                "aria-pressed",
                option.classList.contains("selected")
                    ? "true"
                    : "false"
            );

        });

    });


    // ======================================================
    // CHECK MY ANSWERS
    // ======================================================

    if (checkAnswersBtn) {

        checkAnswersBtn.addEventListener("click", function () {

            let selectedCount = 0;
            let allCorrect = true;


            // ==================================================
            // COUNT SELECTED ANSWERS
            // ==================================================

            verificationOptions.forEach(function (option) {

                if (option.classList.contains("selected")) {
                    selectedCount++;
                }

            });


            // ==================================================
            // NOTHING SELECTED
            // ==================================================

            if (selectedCount === 0) {

                verificationOptions.forEach(function (option) {

                    option.classList.remove(
                        "correct",
                        "wrong"
                    );

                });

                if (feedbackBox) {

                    feedbackBox.classList.remove(
                        "correct-feedback",
                        "incorrect-feedback"
                    );

                }

                if (feedbackIcon) {

                    feedbackIcon.className =
                        "fa-solid fa-circle-info";

                }

                if (feedbackText) {

                    feedbackText.innerHTML =
                        "<strong>Select your answers first.</strong><br>" +
                        "Choose the verification steps you would take " +
                        "before trusting or sharing this post.";

                }

                return;
            }


            // ==================================================
            // CHECK EACH OPTION
            // ==================================================

            verificationOptions.forEach(function (option) {

                const answer =
                    option.getAttribute("data-answer");

                const selected =
                    option.classList.contains("selected");


                // Clear previous result colors
                option.classList.remove(
                    "correct",
                    "wrong"
                );


                // ==================================================
                // CORRECT ANSWER
                // ==================================================

                if (answer === "correct") {

                    if (selected) {

                        // Selected + correct = GREEN
                        option.classList.add("correct");

                    } else {

                        // Correct but not selected:
                        // KEEP DEFAULT COLOR
                        // DO NOT MAKE IT RED
                        allCorrect = false;

                    }

                }


                // ==================================================
                // WRONG ANSWER
                // ==================================================

                else if (answer === "wrong") {

                    if (selected) {

                        // Selected wrong answer = RED
                        option.classList.add("wrong");

                        allCorrect = false;

                    }

                }

            });


            // ==================================================
            // ALL ANSWERS CORRECT
            // ==================================================

            if (allCorrect) {

                if (feedbackBox) {

                    feedbackBox.classList.remove(
                        "incorrect-feedback"
                    );

                    feedbackBox.classList.add(
                        "correct-feedback"
                    );

                }

                if (feedbackIcon) {

                    feedbackIcon.className =
                        "fa-solid fa-circle-check";

                }

                if (feedbackText) {

                    feedbackText.innerHTML =
                        "<strong>Excellent! All your answers are correct.</strong><br>" +
                        "You correctly identified the steps needed to verify " +
                        "the post. Check the original source, search for the " +
                        "claim, verify the organization mentioned, examine the " +
                        "image, and check the date and context. Likes and shares " +
                        "do not prove that a claim is accurate.";

                }

            }


            // ==================================================
            // SOME ANSWERS ARE WRONG / MISSING
            // ==================================================

            else {

                if (feedbackBox) {

                    feedbackBox.classList.remove(
                        "correct-feedback"
                    );

                    feedbackBox.classList.add(
                        "incorrect-feedback"
                    );

                }

                if (feedbackIcon) {

                    feedbackIcon.className =
                        "fa-solid fa-circle-xmark";

                }

                if (feedbackText) {

                    feedbackText.innerHTML =
                        "<strong>Some of your answers need review.</strong><br>" +
                        "The correct verification steps are to check the " +
                        "original source, search for the claim using credible " +
                        "sources, verify the organization mentioned, examine " +
                        "the image, and check the date and context. Likes and " +
                        "shares do not determine whether information is true.";

                }

            }


            // ==================================================
            // LOCK ANSWERS AFTER CHECKING
            // ==================================================

            checkAnswersBtn.classList.add("checked");

        });

    }


    // ======================================================
    // RESET ANSWERS
    // ======================================================

    if (resetAnswersBtn) {

        resetAnswersBtn.addEventListener("click", function () {

            verificationOptions.forEach(function (option) {

                option.classList.remove(
                    "selected",
                    "correct",
                    "wrong"
                );

                option.setAttribute(
                    "aria-pressed",
                    "false"
                );

            });


            // Unlock Check button
            if (checkAnswersBtn) {

                checkAnswersBtn.classList.remove(
                    "checked"
                );

            }


            // Reset feedback
            if (feedbackBox) {

                feedbackBox.classList.remove(
                    "correct-feedback",
                    "incorrect-feedback"
                );

            }


            if (feedbackIcon) {

                feedbackIcon.className =
                    "fa-solid fa-circle-info";

            }


            if (feedbackText) {

                feedbackText.innerHTML =
                    "Select the verification steps you would take, " +
                    "then click <strong>Check My Answers</strong>.";

            }

        });

    }


    // ======================================================
    // SCROLL REVEAL
    // ======================================================

    const cards =
        document.querySelectorAll(
            ".content-card, .activity-card"
        );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        cards.forEach(function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(35px)";

            card.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        });

    }


    // ======================================================
    // PROGRESS BAR
    // ======================================================

    const progress =
        document.querySelector(".progress-fill");

    if (progress) {

        progress.style.width = "0%";

        setTimeout(function () {

            progress.style.transition =
                "width 1.2s ease";

            progress.style.width = "100%";

        }, 300);

    }


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
            function (event) {

                event.stopPropagation();

                quickNav.classList.toggle("active");

            }
        );

    }


    // ======================================================
    // CLOSE MOBILE NAV AFTER LINK CLICK
    // ======================================================

    const quickNavLinks =
        document.querySelectorAll(".quick-nav a");


    quickNavLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (quickNav) {

                quickNav.classList.remove("active");

            }

        });

    });


    // ======================================================
    // CLOSE MOBILE NAV WHEN CLICKING OUTSIDE
    // ======================================================

    document.addEventListener(
        "click",
        function (event) {

            if (!quickNav || !mobileMenuBtn) {
                return;
            }

            if (
                !quickNav.contains(event.target) &&
                !mobileMenuBtn.contains(event.target)
            ) {

                quickNav.classList.remove("active");

            }

        }
    );

});
