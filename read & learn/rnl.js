document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".lesson-link");
    const panels = document.querySelectorAll(".lesson-panel");

    function showPanel(id) {

        panels.forEach(panel => {

            panel.classList.remove("active");

        });

        const target = document.getElementById(id);

        if(target){

            target.classList.add("active");

        }

    }

    // ==========================
    // DEFAULT PAGE
    // ==========================

    showPanel("home");

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });

    // ==========================
    // MODULE BUTTONS
    // ==========================

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn => {

                btn.classList.remove("active");

            });

            tab.classList.add("active");

            showPanel(tab.dataset.target);

        });

    });

});