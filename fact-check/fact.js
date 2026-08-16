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


        /* CLOSE MENU AFTER CLICKING NAV ITEM */

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


    /* =========================================================
       FACT-CHECKING TOOLS
    ========================================================= */

    const infoButtons = document.querySelectorAll(".info-btn");
    const modal = document.getElementById("toolInfoModal");
    const modalContent = document.getElementById("toolInfoContent");
    const closeButton = document.getElementById("closeToolInfo");
    const infoData = document.querySelector(".tool-info-data");

    /* Safety check */
    if (!modal || !modalContent || !closeButton || !infoData) {
        console.error("Fact-check modal elements are missing.");
        return;
    }


    /* =========================================================
       OPEN MORE INFO
    ========================================================= */

    infoButtons.forEach(button => {

        button.addEventListener("click", function () {

            const toolId = this.getAttribute("data-tool");

            console.log("More Info clicked:", toolId);

            if (!toolId) {
                console.error("No data-tool found on button.");
                return;
            }


            /* Find matching information */
            const selectedInfo = infoData.querySelector(
                `[data-info="${toolId}"]`
            );


            if (!selectedInfo) {
                console.error(
                    `No information found for tool: ${toolId}`
                );

                modalContent.innerHTML = `
                    <div class="tool-info-error">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <h2>Information Not Available</h2>
                        <p>
                            More information for this tool is
                            currently unavailable.
                        </p>
                    </div>
                `;

            } else {

                /* Clone content so original hidden data stays untouched */
                modalContent.innerHTML = selectedInfo.innerHTML;

            }


            /* Open modal */
            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");

            /* Prevent background scrolling */
            document.body.classList.add("modal-open");

        });

    });


    /* =========================================================
       CLOSE MODAL — X BUTTON
    ========================================================= */

    closeButton.addEventListener("click", closeModal);


    /* =========================================================
       CLOSE MODAL — CLICK OUTSIDE CARD
    ========================================================= */

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal();
        }

    });


    /* =========================================================
       CLOSE MODAL — ESC KEY
    ========================================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" &&
            modal.classList.contains("active")) {

            closeModal();

        }

    });


    /* =========================================================
       CLOSE FUNCTION
    ========================================================= */

    function closeModal() {

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

        /* Clear old content */
        setTimeout(() => {
            if (!modal.classList.contains("active")) {
                modalContent.innerHTML = "";
            }
        }, 300);

    }



    /* =========================================================
       TOOL FILTERS
    ========================================================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const toolCards = document.querySelectorAll(".tool-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const filter = this.getAttribute("data-filter");

            /* Active button */
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");


            /* Filter cards */
            toolCards.forEach(card => {

                const category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {

                    card.style.display = "";

                    /* Small animation reset */
                    card.classList.remove("filter-hide");

                    requestAnimationFrame(() => {
                        card.classList.add("filter-show");
                    });

                } else {

                    card.classList.remove("filter-show");
                    card.classList.add("filter-hide");

                    card.style.display = "none";

                }

            });

        });

    });



    /* =========================================================
       MORE TOOLS BUTTON
    ========================================================= */

    const moreToolsButton = document.getElementById("moreToolsBtn");

    if (moreToolsButton) {

        moreToolsButton.addEventListener("click", function () {

            /*
             * Currently all 14 tools are already displayed.
             * This button can be connected to additional tools later.
             */

            console.log("More Tools clicked.");

        });

    }

});

