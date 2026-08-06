// ======================================================
// CROSS CHECKING CHECKLIST ACTIVITY
// ======================================================

const checkButton = document.getElementById("checkAnswers");
const feedbackBox = document.getElementById("feedbackBox");

let answered = false;

checkButton.addEventListener("click", () => {

    if (answered) return;

    answered = true;

    const checks = document.querySelectorAll(".check-item input");

    const wrongChoice = checks[4].checked;

    const hasCorrect =
        checks[0].checked ||
        checks[1].checked ||
        checks[2].checked ||
        checks[3].checked;

    feedbackBox.classList.add("show");

    if (wrongChoice) {

        feedbackBox.innerHTML = `

            <h3>❌ Be Careful!</h3>

            <p>

                Information should never be shared simply because many
                people have already posted it. Popularity does not
                guarantee accuracy. Always verify information using
                reliable sources before sharing.

            </p>

        `;

    }

    else if (hasCorrect) {

        feedbackBox.innerHTML = `

            <h3>✅ Good Choice!</h3>

            <p>

                Great! Cross checking helps verify whether information
                is accurate and trustworthy. Checking the original
                source, publication date, other reliable websites,
                or performing a reverse image search are all responsible
                verification practices.

            </p>

        `;

    }

    else {

        feedbackBox.innerHTML = `

            <h3>⚠ Select at least one option.</h3>

            <p>

                Choose at least one action that you would perform
                before believing or sharing the information.

            </p>

        `;

    }

    checkButton.disabled = true;

    setTimeout(() => {

        checks.forEach(box => {

            box.checked = false;

        });

        feedbackBox.classList.remove("show");

        feedbackBox.innerHTML = "";

        checkButton.disabled = false;

        answered = false;

    }, 10000);

});


// ======================================================
// OPTIONAL HOVER EFFECT
// ======================================================

document.querySelectorAll(".check-item").forEach(item => {

    item.addEventListener("mouseenter", () => {

        if (answered) return;

        item.style.transform = "translateX(6px)";

    });

    item.addEventListener("mouseleave", () => {

        if (answered) return;

        item.style.transform = "";

    });

});


// ======================================================
// SCROLL REVEAL
// ======================================================

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

document.querySelectorAll(".content-card, .activity-card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s ease";

    observer.observe(card);

});


// ======================================================
// PROGRESS BAR
// ======================================================

window.addEventListener("load", () => {

    const progress = document.querySelector(".progress-fill");

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition = "1.2s ease";
        progress.style.width = "100%";

    }, 300);

});