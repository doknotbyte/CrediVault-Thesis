document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
        NAVBAR SCROLL
    ==================================================*/

    const navbar = document.querySelector(".navbar");

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

    const progress = document.querySelector(".scroll-progress");

    if (progress) {

        window.addEventListener("scroll", () => {

            const scrollTop = window.scrollY;

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
        MOBILE MENU
    ==================================================*/

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("navLinks");

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", () => {

            mobileNav.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (!icon) return;

            if (mobileNav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a navigation item */

        mobileNav.querySelectorAll(".nav-item").forEach(item => {

            item.addEventListener("click", () => {

                mobileNav.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                if (!icon) return;

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /*==================================================
        CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ==================================================*/

    document.addEventListener("click", (e) => {

        if (!menuToggle || !mobileNav) return;

        if (
            !mobileNav.contains(e.target) &&
            !menuToggle.contains(e.target)
        ) {

            mobileNav.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    /*==================================================
        SMOOTH SCROLL
    ==================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});