// ======================================================
// CLICKBAIT INTERACTIVE CHALLENGE
// ======================================================

const imageOptions = document.querySelectorAll(".image-option");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.querySelector(".feedback-text");

let answered = false;

imageOptions.forEach(option => {

    option.addEventListener("click", function () {

        if (answered) return;

        answered = true;

        imageOptions.forEach(card => {

            card.style.pointerEvents = "none";

        });

        const answer = this.dataset.answer;

        if (answer === "correct") {

            this.classList.add("correct");

            feedbackText.innerHTML = `

                <strong>Correct!</strong><br><br>

                This headline uses emotional trigger words ("SURPRISE," "Mind-BLOWING") and exaggerated claims to bait clicks.


            `;

            feedbackBox.classList.add("show");

            setTimeout(resetActivity, 5000);

        }

        else {

            this.classList.add("wrong");

            this.classList.add("fade");

            setTimeout(() => {

                feedbackText.innerHTML = `

                    <strong>Incorrect.</strong><br><br>

                    This headline is factual and uses neutral language from a credible source.


                `;

                feedbackBox.classList.add("show");

            }, 3000);

            setTimeout(resetActivity, 8000);

        }

    });

});

// ======================================================
// RESET ACTIVITY
// ======================================================

function resetActivity(){

    answered = false;

    imageOptions.forEach(card => {

        card.classList.remove("correct");
        card.classList.remove("wrong");
        card.classList.remove("fade");

        card.style.pointerEvents = "auto";
        card.style.transform = "";

    });

    feedbackBox.classList.remove("show");

    feedbackText.innerHTML = "Feedback will appear here.";

}

// ======================================================
// HOVER EFFECT
// ======================================================

imageOptions.forEach(card => {

    card.addEventListener("mouseenter", () => {

        if(answered) return;

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        if(answered) return;

        card.style.transform = "";

    });

});

// ======================================================
// SCROLL REVEAL
// ======================================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(".content-card, .activity-card").forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s ease";

    observer.observe(card);

});

// ======================================================
// PROGRESS BAR ANIMATION
// ======================================================

window.addEventListener("load",()=>{

    const progress=document.querySelector(".progress-fill");

    if(!progress) return;

    progress.style.width="0%";

    setTimeout(()=>{

        progress.style.transition="1.2s ease";

        progress.style.width="100%";

    },300);

});