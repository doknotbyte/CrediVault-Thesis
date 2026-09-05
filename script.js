document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
        EXTERNAL LINK MODAL
    ==================================================*/

    const modal = document.getElementById("externalModal");
    const modalTargetUrl = document.getElementById("modalTargetUrl");
    const proceedBtn = document.getElementById("proceedBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    const externalButtons =
        document.querySelectorAll(".btn-external");

    externalButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            const url = button.dataset.url;

            if (modal && modalTargetUrl && proceedBtn) {

                modalTargetUrl.textContent = url;
                proceedBtn.href = url;

                modal.classList.add("active");

            }

        });

    });


    function closeModal() {

        if (modal) {

            modal.classList.remove("active");

        }

    }


    if (closeModalBtn) {

        closeModalBtn.addEventListener(
            "click",
            closeModal
        );

    }


    if (modal) {

        modal.addEventListener("click", (e) => {

            if (e.target === modal) {

                closeModal();

            }

        });

    }


    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeModal();

        }

    });


    /*==================================================
        NAVBAR SCROLL
    ==================================================*/

    const navbar =
        document.querySelector(".navbar");


    if (navbar) {

        window.addEventListener("scroll", () => {

            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

        });

    }


    /*==================================================
        SCROLL PROGRESS BAR
    ==================================================*/

    const progress =
        document.querySelector(".scroll-progress");


    if (progress) {

        window.addEventListener("scroll", () => {

            const scrollTop =
                window.scrollY;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            if (height > 0) {

                progress.style.width =
                    (scrollTop / height) * 100 + "%";

            }

        });

    }


    /*==================================================
        SMOOTH SCROLL
    ==================================================*/

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            });

        });


    /*==================================================
        HERO FLOAT EFFECT
        DESKTOP ONLY
    ==================================================*/

    if (window.innerWidth > 992) {

        const hero =
            document.querySelector(".hero-section");

        const cards =
            document.querySelectorAll(".floating-card");


        if (hero && cards.length) {

            hero.addEventListener(
                "mousemove",
                (e) => {

                    const x =
                        (e.clientX /
                            window.innerWidth -
                            .5) * 20;

                    const y =
                        (e.clientY /
                            window.innerHeight -
                            .5) * 20;


                    cards.forEach(
                        (card, index) => {

                            const speed =
                                (index + 1) * .4;

                            card.style.transform =
                                `translate(
                                    ${x * speed}px,
                                    ${y * speed}px
                                )`;

                        }
                    );

                }
            );


            hero.addEventListener(
                "mouseleave",
                () => {

                    cards.forEach(card => {

                        card.style.transform = "";

                    });

                }
            );

        }

    }


    /*==================================================
        SCROLL REVEAL
    ==================================================*/

    const revealItems =
        document.querySelectorAll(
            ".feature-card, " +
            ".developer-container, " +
            ".hero-content, " +
            ".hero-visual"
        );


    if (revealItems.length) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    });

                },
                {
                    threshold: .15
                }
            );


        revealItems.forEach(item => {

            item.style.opacity = "0";

            item.style.transform =
                "translateY(40px)";

            item.style.transition =
                ".8s ease";

            observer.observe(item);

        });

    }


    /*==================================================
        COUNTER
    ==================================================*/

    const counters =
        document.querySelectorAll(
            ".stat-box h2"
        );


    counters.forEach(counter => {

        const original =
            counter.innerText;

        const number =
            parseInt(original);


        if (isNaN(number)) return;


        let count = 0;

        const speed =
            Math.ceil(number / 60);


        function animate() {

            count += speed;


            if (count >= number) {

                counter.innerText =
                    original;

            } else {

                counter.innerText =
                    count + "+";

                requestAnimationFrame(
                    animate
                );

            }

        }


        animate();

    });


    /*==================================================
        ACTIVE NAVIGATION
    ==================================================*/

    const sections =
        document.querySelectorAll("section");

    const navItems =
        document.querySelectorAll(".nav-item");


    if (sections.length && navItems.length) {

        window.addEventListener(
            "scroll",
            () => {

                let current = "";


                sections.forEach(section => {

                    const sectionTop =
                        section.offsetTop - 150;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.getAttribute(
                                "id"
                            );

                    }

                });


                navItems.forEach(link => {

                    link.classList.remove(
                        "active"
                    );


                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        href === "#" &&
                        current === ""
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }


                    if (
                        href === "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            }
        );

    }


    /*==================================================
        MOBILE MENU
        HAMBURGER NAVIGATION
    ==================================================*/

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const mobileNav =
        document.getElementById(
            "navLinks"
        );


    if (menuToggle && mobileNav) {


        /*------------------------------------------
            HAMBURGER CLICK
        ------------------------------------------*/

        menuToggle.addEventListener(
            "click",
            (e) => {

                e.preventDefault();

                e.stopPropagation();


                mobileNav.classList.toggle(
                    "active"
                );


                const icon =
                    menuToggle.querySelector(
                        "i"
                    );


                if (icon) {

                    if (
                        mobileNav.classList
                            .contains("active")
                    ) {

                        icon.classList.remove(
                            "fa-bars"
                        );

                        icon.classList.add(
                            "fa-xmark"
                        );

                    } else {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }
        );


        /*------------------------------------------
            CLOSE MENU AFTER NAV ITEM CLICK
        ------------------------------------------*/

        mobileNav
            .querySelectorAll(".nav-item")
            .forEach(item => {

                item.addEventListener(
                    "click",
                    () => {

                        mobileNav.classList.remove(
                            "active"
                        );


                        const icon =
                            menuToggle.querySelector(
                                "i"
                            );


                        if (icon) {

                            icon.classList.remove(
                                "fa-xmark"
                            );

                            icon.classList.add(
                                "fa-bars"
                            );

                        }

                    }
                );

            });


        /*------------------------------------------
            CLOSE MENU WHEN CLICKING OUTSIDE
        ------------------------------------------*/

        document.addEventListener(
            "click",
            (e) => {

                if (
                    !mobileNav.contains(e.target) &&
                    !menuToggle.contains(e.target)
                ) {

                    mobileNav.classList.remove(
                        "active"
                    );


                    const icon =
                        menuToggle.querySelector(
                            "i"
                        );


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }
        );

    }


    /*==================================================
        CHECK BEFORE YOU SHARE
    ==================================================*/

    const checkSteps =
        document.querySelectorAll(
            ".check-step"
        );

    const checkDetail =
        document.getElementById(
            "checkDetail"
        );


    const detailStep =
        checkDetail
            ? checkDetail.querySelector(
                ".check-detail-top > span:first-child"
            )
            : null;


    const detailProgress =
        checkDetail
            ? checkDetail.querySelector(
                ".detail-progress-fill"
            )
            : null;


    const detailCount =
        checkDetail
            ? checkDetail.querySelector(
                ".detail-count"
            )
            : null;


    const detailIcon =
        checkDetail
            ? checkDetail.querySelector(
                ".check-detail-icon i"
            )
            : null;


    const detailTitle =
        checkDetail
            ? checkDetail.querySelector(
                ".check-detail-content h3"
            )
            : null;


    const detailText =
        checkDetail
            ? checkDetail.querySelector(
                ".check-detail-content p"
            )
            : null;


    const detailFooter =
        checkDetail
            ? checkDetail.querySelector(
                ".check-detail-footer span"
            )
            : null;


    /*==================================================
        CHECK STEP DATA
    ==================================================*/

    const checkData = {

        1: {

            icon: "fa-pause",

            step: "STEP 01",

            title:
                "Stop before you share.",

            text:
                "Give yourself a moment to pause. Avoid reacting based only on emotion, popularity, or urgency.",

            footer:
                "Credibility starts with a pause."

        },


        2: {

            icon:
                "fa-magnifying-glass",

            step:
                "STEP 02",

            title:
                "Check the source and evidence.",

            text:
                "Look at who published the information and examine whether the claim is supported by reliable evidence.",

            footer:
                "Look beyond the headline."

        },


        3: {

            icon:
                "fa-code-compare",

            step:
                "STEP 03",

            title:
                "Verify with trusted sources.",

            text:
                "Compare the information with reliable and independent sources before accepting or sharing the claim.",

            footer:
                "Verification strengthens your decision."

        }

    };


    /*==================================================
        UPDATE CHECK STEP
    ==================================================*/

    function updateCheckStep(
        stepNumber
    ) {

        const selected =
            checkData[stepNumber];


        if (
            !selected ||
            !checkDetail
        ) {

            return;

        }


        /*------------------------------------------
            ACTIVE STEP
        ------------------------------------------*/

        checkSteps.forEach(step => {

            const stepValue =
                Number(
                    step.dataset.step
                );


            const stateIcon =
                step.querySelector(
                    ".step-state i"
                );


            const isActive =
                stepValue === stepNumber;


            step.classList.toggle(
                "active-step",
                isActive
            );


            step.setAttribute(
                "aria-expanded",
                isActive
                    ? "true"
                    : "false"
            );


            if (stateIcon) {

                stateIcon.classList.toggle(
                    "fa-solid",
                    isActive
                );

                stateIcon.classList.toggle(
                    "fa-regular",
                    !isActive
                );

                stateIcon.classList.add(
                    "fa-circle"
                );

            }

        });


        /*------------------------------------------
            DETAIL STEP
        ------------------------------------------*/

        if (detailStep) {

            detailStep.textContent =
                selected.step;

        }


        /*------------------------------------------
            PROGRESS
        ------------------------------------------*/

        if (detailProgress) {

            detailProgress.style.width =
                `${(stepNumber / 3) * 100}%`;

        }


        /*------------------------------------------
            STEP COUNT
        ------------------------------------------*/

        if (detailCount) {

            detailCount.textContent =
                `${stepNumber} / 3`;

        }


        /*------------------------------------------
            ICON
        ------------------------------------------*/

        if (detailIcon) {

            detailIcon.className =
                `fa-solid ${selected.icon}`;

        }


        /*------------------------------------------
            TITLE
        ------------------------------------------*/

        if (detailTitle) {

            detailTitle.textContent =
                selected.title;

        }


        /*------------------------------------------
            DESCRIPTION
        ------------------------------------------*/

        if (detailText) {

            detailText.textContent =
                selected.text;

        }


        /*------------------------------------------
            FOOTER
        ------------------------------------------*/

        if (detailFooter) {

            detailFooter.textContent =
                selected.footer;

        }

    }


    /*==================================================
        CHECK STEP CLICK
    ==================================================*/

    checkSteps.forEach(step => {

        step.addEventListener(
            "click",
            () => {

                const stepNumber =
                    Number(
                        step.dataset.step
                    );

                updateCheckStep(
                    stepNumber
                );

            }
        );

    });


    /*==================================================
        INITIAL CHECK STEP
    ==================================================*/

    if (checkSteps.length) {

        updateCheckStep(1);

    }

/*==================================================
    CREDIVAULT PAGE LOADER
==================================================*/

const pageLoader =
    document.getElementById("pageLoader");

const loaderPercentage =
    document.getElementById("loaderPercentage");

const loaderRing =
    document.querySelector(".loader-ring-fill");


if (pageLoader) {

    /*==================================================
        NAVIGATION TYPE
    ==================================================*/

    const navigationEntry =
        performance.getEntriesByType("navigation")[0];

    const navigationType =
        navigationEntry
            ? navigationEntry.type
            : "navigate";


    /*==================================================
        SESSION CHECK
    ==================================================*/

    const loaderAlreadyShown =
        sessionStorage.getItem(
            "crediVaultLoaderShown"
        );


    /*
     * LOADER WILL SHOW:
     *
     * 1. First opening of the website
     * 2. Manual page refresh
     *
     * LOADER WILL NOT SHOW:
     *
     * 1. Moving from one navigation page to another
     * 2. Returning to Home from another page
     * 3. Browser back / forward navigation
     */

    const shouldShowLoader =
        !loaderAlreadyShown ||
        navigationType === "reload";


    /*==================================================
        DO NOT SHOW LOADER
    ==================================================*/

    if (!shouldShowLoader) {

        pageLoader.style.display = "none";

    }


    /*==================================================
        SHOW LOADER
    ==================================================*/

    else {

        /*
         * Save loader state immediately.
         *
         * This prevents the loader from appearing
         * again when navigating between pages.
         */

        sessionStorage.setItem(
            "crediVaultLoaderShown",
            "true"
        );


        /*==================================================
            INITIAL STATE
        ==================================================*/

        let progress = 0;


        pageLoader.classList.remove(
            "loader-hidden"
        );

        pageLoader.style.display = "flex";


        if (loaderPercentage) {

            loaderPercentage.textContent =
                "0%";

        }


        /*==================================================
            SVG CIRCLE
        ==================================================*/

        const circumference = 282.74;


        if (loaderRing) {

            loaderRing.style.strokeDasharray =
                circumference;

            loaderRing.style.strokeDashoffset =
                circumference;

        }


        /*==================================================
            LOADING COUNTER
        ==================================================*/

        const loadingInterval =
            setInterval(() => {


                /*------------------------------------------
                    PROGRESS SPEED
                ------------------------------------------*/

                if (progress < 70) {

                    progress += 2;

                }

                else if (progress < 90) {

                    progress += 1;

                }

                else if (progress < 100) {

                    progress += 1;

                }


                if (progress > 100) {

                    progress = 100;

                }


                /*------------------------------------------
                    UPDATE PERCENTAGE
                ------------------------------------------*/

                if (loaderPercentage) {

                    loaderPercentage.textContent =
                        progress + "%";

                }


                /*------------------------------------------
                    UPDATE RING
                ------------------------------------------*/

                if (loaderRing) {

                    const offset =
                        circumference -
                        (progress / 100) *
                        circumference;

                    loaderRing.style.strokeDashoffset =
                        offset;

                }


                /*==================================================
                    LOADING COMPLETE
                ==================================================*/

                if (progress >= 100) {

                    clearInterval(
                        loadingInterval
                    );


                    /*
                     * Keep 100% visible briefly
                     */

                    setTimeout(() => {

                        pageLoader.classList.add(
                            "loader-hidden"
                        );


                        /*
                         * Completely remove loader
                         * after fade-out animation.
                         */

                        setTimeout(() => {

                            pageLoader.style.display =
                                "none";

                        }, 400);


                    }, 200);

                }


            }, 30);
            

    }
        /*==================================================
        CREDIBOT
        PRE-PROGRAMMED DIGITAL LITERACY ASSISTANT
    ==================================================*/

    const credibotInput =
        document.getElementById("credibotInput");

    const credibotSend =
        document.getElementById("credibotSend");

    const credibotResponse =
        document.getElementById("credibotResponse");

    const credibotQuestions =
        document.querySelectorAll(".credibot-question");


    /*==================================================
        CREDIBOT ANSWERS
    ==================================================*/

    const credibotAnswers = {

        "what should i do before sharing a post?":

            "Before sharing a post, stop and check the information first. Look at the original source, examine the evidence, compare the claim with reliable and independent sources, and check the date and context.",


        "how can i tell if information is credible?":

            "Check who published the information, whether the source is trustworthy, whether evidence is provided, and whether other reliable sources support the same claim. Do not rely only on popularity, likes, or shares.",


        "why should i check the original source?":

            "Checking the original source helps you see where the information actually came from. It allows you to examine the original context, evidence, author, and date instead of relying only on someone else's post or interpretation.",


        "why should i compare information from different sources?":

            "Comparing information from different reliable sources helps you identify whether a claim is consistently supported. It can also reveal missing context, conflicting information, or misleading claims.",


        "can i trust a post because it has many likes and shares?":

            "No. Likes and shares show that content is popular or widely circulated, but they do not prove that the information is accurate or trustworthy.",


        "does a viral post mean that the information is true?":

            "No. A viral post can still contain misinformation. Virality measures how widely content spreads, not whether the information is accurate.",


        "how can i identify clickbait?":

            "Look for exaggerated, emotional, shocking, or misleading headlines designed mainly to make you click. Clickbait may create curiosity without providing enough evidence or context for its claims.",


        "what is misinformation?":

            "Misinformation is false or inaccurate information that is shared without necessarily intending to deceive others. It can spread when people share information without checking whether it is accurate.",


        "what is ai-generated content?":

            "AI-generated content is text, images, audio, video, or other material created or significantly produced using artificial intelligence. It can look realistic, so it is important to verify the information and source before trusting or sharing it.",


        "can ai-generated images look real?":

            "Yes. AI-generated images can look highly realistic and may be difficult to identify at first glance. When an image is connected to an important claim, check its source, context, date, and supporting evidence.",


        "how can i verify a claim i see online?":

            "Start by checking the original source and looking for evidence supporting the claim. Then compare it with reliable and independent sources, verify the organization or person mentioned, examine the image if one is used, and check the date and context.",


        "what makes a source reliable?":

            "A reliable source provides credible information, identifies its author or organization, supports claims with evidence, and provides relevant context. It should also be consistent with information from other trustworthy sources.",


        "why shouldn't i believe information just because it looks professional?":

            "Professional-looking content does not automatically mean the information is accurate. Misleading or false content can also use polished designs, convincing language, and realistic images. Always check the source and evidence.",


        "what does stop, check, and verify mean?":

            "Stop means pause before reacting or sharing. Check means examine the source and evidence. Verify means compare the information with reliable and independent sources before deciding whether to trust or share it.",


        "what is the difference between a fact and an opinion?":

            "A fact is a statement that can be checked or supported with evidence. An opinion expresses a person's belief, interpretation, or judgment. Identifying the difference helps you evaluate online information more carefully.",


        "why is it important to check the date of a post?":

            "Checking the date helps you determine whether the information is current and whether the context has changed. Old information can sometimes be reshared as if it were new, which can make it misleading.",


        "what should i do if i cannot find evidence supporting a claim?":

            "Be cautious and avoid treating the claim as confirmed. Look for reliable sources that can support or challenge it. If credible evidence cannot be found, it is better not to share the claim as though it were true.",


        "why can misinformation spread quickly on social media?":

            "Misinformation can spread quickly because social media makes it easy for people to share content with large audiences. Emotional, surprising, or controversial content can attract attention and encourage rapid sharing before people verify the information."

    };


    /*==================================================
        NORMALIZE QUESTION
    ==================================================*/

    function normalizeCrediBotQuestion(question) {

        return question
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");

    }


    /*==================================================
        SHOW QUESTION IN INPUT
    ==================================================*/

    credibotQuestions.forEach(questionButton => {

        questionButton.addEventListener(
            "click",
            () => {

                if (!credibotInput) return;


                const question =
                    questionButton.dataset.question;


                if (!question) return;


                /*
                 * Put the selected question
                 * into the typing area.
                 *
                 * It will NOT send automatically.
                 */

                credibotInput.value =
                    question;


                credibotInput.focus();


                /*
                 * Move cursor to the end
                 */

                credibotInput.setSelectionRange(
                    credibotInput.value.length,
                    credibotInput.value.length
                );

            }
        );

    });


    /*==================================================
        DISPLAY CREDIBOT RESPONSE
    ==================================================*/

    function displayCrediBotResponse(
        question,
        answer
    ) {

        if (!credibotResponse) return;


        credibotResponse.innerHTML = `

            <div class="credibot-message user-message">

                <div class="message-avatar">

                    <i class="fa-solid fa-user"></i>

                </div>


                <div class="message-content">

                    <span class="message-name">
                        You
                    </span>

                    <p>
                        ${escapeCrediBotHTML(question)}
                    </p>

                </div>

            </div>


            <div class="credibot-message bot-message">

                <div class="message-avatar">

                    <i class="fa-solid fa-robot"></i>

                </div>


                <div class="message-content">

                    <span class="message-name">
                        CrediBot
                    </span>

                    <p>
                        ${escapeCrediBotHTML(answer)}
                    </p>

                </div>

            </div>

        `;


        /*
         * Scroll the response into view
         */

        credibotResponse.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    /*==================================================
        ESCAPE CREDIBOT HTML
    ==================================================*/

    function escapeCrediBotHTML(text) {

        const div =
            document.createElement("div");


        div.textContent =
            text;


        return div.innerHTML;

    }


    /*==================================================
        SEND QUESTION
    ==================================================*/

    function sendCrediBotQuestion() {

        if (!credibotInput) return;


        const originalQuestion =
            credibotInput.value.trim();


        /*
         * Do nothing if input is empty
         */

        if (!originalQuestion) {

            credibotInput.focus();

            return;

        }


        const normalizedQuestion =
            normalizeCrediBotQuestion(
                originalQuestion
            );


        const answer =
            credibotAnswers[
                normalizedQuestion
            ];


        /*==================================================
            SUPPORTED QUESTION
        ==================================================*/

        if (answer) {

            displayCrediBotResponse(
                originalQuestion,
                answer
            );


            /*
             * Clear input after sending
             */

            credibotInput.value = "";


            return;

        }


        /*==================================================
            UNSUPPORTED QUESTION
        ==================================================*/

        if (credibotResponse) {

            credibotResponse.innerHTML = `

                <div class="credibot-message user-message">

                    <div class="message-avatar">

                        <i class="fa-solid fa-user"></i>

                    </div>


                    <div class="message-content">

                        <span class="message-name">
                            You
                        </span>

                        <p>
                            ${escapeCrediBotHTML(
                                originalQuestion
                            )}
                        </p>

                    </div>

                </div>


                <div class="credibot-message bot-message">

                    <div class="message-avatar">

                        <i class="fa-solid fa-robot"></i>

                    </div>


                    <div class="message-content">

                        <span class="message-name">
                            CrediBot
                        </span>

                        <p>
                            I'm currently programmed to
                            answer the supported digital
                            literacy questions provided
                            above. Please choose one of the
                            Common Questions or type a
                            supported question.
                        </p>

                    </div>

                </div>

            `;


            credibotResponse.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        }


        /*
         * Clear unsupported question
         */

        credibotInput.value = "";

    }


    /*==================================================
        SEND BUTTON
    ==================================================*/

    if (credibotSend) {

        credibotSend.addEventListener(
            "click",
            sendCrediBotQuestion
        );

    }


    /*==================================================
        ENTER KEY
        SEND QUESTION
    ==================================================*/

    if (credibotInput) {

        credibotInput.addEventListener(
            "keydown",
            (e) => {

                if (e.key === "Enter") {

                    e.preventDefault();

                    sendCrediBotQuestion();

                }

            }
        );

    }

}

});