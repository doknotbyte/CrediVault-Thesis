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
            this.classList.toggle("selected");

            // Accessibility
            this.setAttribute(
                "aria-pressed",
                this.classList.contains("selected")
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
            let correctSelectedCount = 0;
            let totalCorrectAnswers = 0;
            let wrongSelectedCount = 0;


            // ==================================================
            // COUNT ANSWERS
            // ==================================================

            verificationOptions.forEach(function (option) {

                const answer =
                    option.getAttribute("data-answer");

                const selected =
                    option.classList.contains("selected");


                // Remove old result colors
                option.classList.remove(
                    "correct",
                    "wrong"
                );


                // Count total correct answers
                if (answer === "correct") {
                    totalCorrectAnswers++;
                }


                // Count selected answers
                if (selected) {

                    selectedCount++;


                    // Selected correct answer
                    if (answer === "correct") {

                        correctSelectedCount++;

                        option.classList.add("correct");

                    }


                    // Selected wrong answer
                    else if (answer === "wrong") {

                        wrongSelectedCount++;

                        option.classList.add("wrong");

                    }

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
            // WRONG ANSWER SELECTED
            // ==================================================
            //
            // RED FEEDBACK ONLY WHEN A WRONG CHOICE
            // WAS ACTUALLY SELECTED.
            //
            // This prevents a correct-but-incomplete answer
            // from being treated as completely wrong.
            // ==================================================

            if (wrongSelectedCount > 0) {

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
                        "You selected one or more verification steps " +
                        "that are not appropriate. Remember to check the " +
                        "original source, search for the claim using credible " +
                        "sources, verify the organization mentioned, examine " +
                        "the image, and check the date and context. Likes and " +
                        "shares do not determine whether information is true.";

                }


                // Lock answers
                checkAnswersBtn.classList.add("checked");

                return;
            }


            // ==================================================
            // ALL CORRECT ANSWERS SELECTED
            // ==================================================

            if (
                correctSelectedCount === totalCorrectAnswers
            ) {

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


                // Lock answers
                checkAnswersBtn.classList.add("checked");

                return;
            }


            // ==================================================
            // CORRECT BUT INCOMPLETE
            // ==================================================
            //
            // This happens when the user selected only some
            // of the correct answers and selected NO wrong answers.
            //
            // Feedback remains GREEN.
            // ==================================================

            if (correctSelectedCount === 1) {

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
                        "<strong>Good start! Your answer is correct.</strong><br>" +
                        "You identified one correct verification step, but " +
                        "you still need to improve your selection by identifying " +
                        "the other appropriate steps before trusting or sharing " +
                        "the post.";

                }


                // Lock answers
                checkAnswersBtn.classList.add("checked");

                return;
            }


            // ==================================================
            // TWO OR MORE CORRECT BUT INCOMPLETE
            // ==================================================

            if (correctSelectedCount >= 2) {

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
                        "<strong>You're on the right track!</strong><br>" +
                        "You selected several correct verification steps, " +
                        "but your answer is still incomplete. Review the " +
                        "remaining verification steps and make sure you check " +
                        "the original source, search for the claim, verify the " +
                        "organization mentioned, examine the image, and check " +
                        "the date and context.";

                }


                // Lock answers
                checkAnswersBtn.classList.add("checked");

                return;
            }


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


            // Reset feedback colors
            if (feedbackBox) {

                feedbackBox.classList.remove(
                    "correct-feedback",
                    "incorrect-feedback"
                );

            }


            // Reset feedback icon
            if (feedbackIcon) {

                feedbackIcon.className =
                    "fa-solid fa-circle-info";

            }


            // Reset feedback message
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
