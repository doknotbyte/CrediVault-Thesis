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

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

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

        const percentage = (scrollTop / height) * 100;

        progress.style.width = percentage + "%";

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
        HERO FLOAT EFFECT
    ==================================================*/

    const hero = document.querySelector(".hero-section");

    const cards = document.querySelectorAll(".floating-card");

    hero.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - .5) * 20;

        const y = (e.clientY / window.innerHeight - .5) * 20;

        cards.forEach((card, index) => {

            const speed = (index + 1) * 0.4;

            card.style.transform =
                `translate(${x * speed}px, ${y * speed}px)`;

        });

    });

    hero.addEventListener("mouseleave", () => {

        cards.forEach(card => {

            card.style.transform = "";

        });

    });

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
        COUNTER ANIMATION
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

    const navLinks = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

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

});