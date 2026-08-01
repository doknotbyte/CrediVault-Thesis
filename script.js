document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
        EXTERNAL LINK MODAL
    ==================================================*/

    const modal = document.getElementById("externalModal");
    const modalTargetUrl = document.getElementById("modalTargetUrl");
    const proceedBtn = document.getElementById("proceedBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    const externalButtons = document.querySelectorAll(".btn-external");

    externalButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            const url = button.dataset.url;

            modalTargetUrl.textContent = url;
            proceedBtn.href = url;

            modal.classList.add("active");

        });

    });

    function closeModal() {

        modal.classList.remove("active");

    }

    closeModalBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeModal();

        }

    });

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeModal();

        }

    });

    /*==================================================
        NAVBAR SCROLL
    ==================================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        navbar.classList.toggle("scrolled", window.scrollY > 40);

    });

    /*==================================================
        SCROLL PROGRESS BAR
    ==================================================*/

    const progress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        progress.style.width = (scrollTop / height) * 100 + "%";

    });

    /*==================================================
        SMOOTH SCROLL
    ==================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*==================================================
        HERO FLOAT EFFECT (Desktop Only)
    ==================================================*/

    if (window.innerWidth > 992) {

        const hero = document.querySelector(".hero-section");
        const cards = document.querySelectorAll(".floating-card");

        if (hero) {

            hero.addEventListener("mousemove", (e) => {

                const x = (e.clientX / window.innerWidth - .5) * 20;
                const y = (e.clientY / window.innerHeight - .5) * 20;

                cards.forEach((card, index) => {

                    const speed = (index + 1) * .4;

                    card.style.transform =
                        `translate(${x * speed}px, ${y * speed}px)`;

                });

            });

            hero.addEventListener("mouseleave", () => {

                cards.forEach(card => {

                    card.style.transform = "";

                });

            });

        }

    }

    /*==================================================
        SCROLL REVEAL
    ==================================================*/

    const revealItems = document.querySelectorAll(

        ".feature-card, .developer-container, .hero-content, .hero-visual"

    );

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

    revealItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = ".8s ease";

        observer.observe(item);

    });

    /*==================================================
        COUNTER
    ==================================================*/

    const counters = document.querySelectorAll(".stat-box h2");

    counters.forEach(counter => {

        const original = counter.innerText;
        const number = parseInt(original);

        if (isNaN(number)) return;

        let count = 0;
        const speed = Math.ceil(number / 60);

        function animate() {

            count += speed;

            if (count >= number) {

                counter.innerText = original;

            } else {

                counter.innerText = count + "+";

                requestAnimationFrame(animate);

            }

        }

        animate();

    });

    /*==================================================
        ACTIVE NAVIGATION
    ==================================================*/

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" && current === "") {

                link.classList.add("active");

            }

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==================================================
        MOBILE MENU
    ==================================================*/

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("navLinks");

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", () => {

            mobileNav.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (mobileNav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

        mobileNav.querySelectorAll(".nav-item").forEach(item => {

            item.addEventListener("click", () => {

                mobileNav.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }

});