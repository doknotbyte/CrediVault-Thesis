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


/*==================================================
    CHECK HOW THE PAGE WAS OPENED
==================================================*/

/*
 * Navigation type:
 *
 * reload  = browser refresh
 * navigate = clicking a link / opening another page
 * back_forward = browser back/forward
 *
 * Loader should appear when:
 * 1. The page is opened directly
 * 2. The page is refreshed
 *
 * Loader should NOT appear when navigating
 * between pages of CrediVault.
 */

let navigationType = "navigate";

if (performance.getEntriesByType) {

    const navigationEntries =
        performance.getEntriesByType("navigation");

    if (
        navigationEntries.length > 0
    ) {

        navigationType =
            navigationEntries[0].type;

    }

}


/*==================================================
    DETERMINE IF LOADER SHOULD SHOW
==================================================*/

/*
 * sessionStorage remembers that the user has
 * already entered the website during this tab session.
 */

const hasVisited =
    sessionStorage.getItem(
        "crediVaultVisited"
    );


/*
 * Show loader when:
 *
 * - This is the first page visit in this tab
 * OR
 * - The browser page was refreshed
 *
 * Otherwise skip loader.
 */

const shouldShowLoader =
    !hasVisited ||
    navigationType === "reload";


/*==================================================
    PAGE LOADER
==================================================*/

if (
    pageLoader &&
    shouldShowLoader
) {

    let progress = 0;


    /*==================================================
        MARK WEBSITE AS VISITED
    ==================================================*/

    sessionStorage.setItem(
        "crediVaultVisited",
        "true"
    );


    /*==================================================
        INITIAL STATE — 0%
    ==================================================*/

    pageLoader.classList.remove(
        "loader-hidden"
    );


    if (loaderPercentage) {

        loaderPercentage.textContent =
            "0%";

    }


    /*==================================================
        SVG CIRCLE CIRCUMFERENCE
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
                INCREASE PROGRESS
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


            /*------------------------------------------
                FINISHED
            ------------------------------------------*/

            if (progress >= 100) {

                clearInterval(
                    loadingInterval
                );


                /*
                 * Keep 100% visible briefly.
                 */

                setTimeout(() => {


                    /*----------------------------------
                        FADE OUT LOADER
                    ----------------------------------*/

                    pageLoader.classList.add(
                        "loader-hidden"
                    );


                    /*
                     * Wait for loader fade-out.
                     */

                    setTimeout(() => {


                        /*------------------------------
                            REMOVE LOADER
                        ------------------------------*/

                        pageLoader.style.display =
                            "none";


                        /*------------------------------
                            HOME ENTRANCE
                        ------------------------------*/

                        const heroSection =
                            document.querySelector(
                                ".hero-section"
                            );


                        if (heroSection) {

                            heroSection.classList.add(
                                "page-enter"
                            );

                        }

                    }, 600);

                }, 400);

            }

        }, 50);

}


/*==================================================
    SKIP LOADER
    INTERNAL PAGE NAVIGATION
==================================================*/

/*
 * If the user is moving between CrediVault pages
 * and the loader should not appear, hide it immediately.
 */

else if (pageLoader) {

    pageLoader.style.display =
        "none";


    /*----------------------------------------------
        SHOW HOME PAGE IMMEDIATELY
    ----------------------------------------------*/

    const heroSection =
        document.querySelector(
            ".hero-section"
        );


    if (heroSection) {

        heroSection.style.opacity =
            "1";

        heroSection.style.transform =
            "none";

    }

}

});