// ======================================================
// INFLUENCE OF POPULARITY INTERACTIVE CHALLENGE
// ======================================================

const imageOptions = document.querySelectorAll(".image-option");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.querySelector(".feedback-text");

let answered = false;

imageOptions.forEach(option => {

    option.addEventListener("click", function () {

        if (answered) return;

        answered = true;

        const answer = this.dataset.answer;

        imageOptions.forEach(card => {

            card.style.pointerEvents = "none";

        });

        if(answer === "correct"){

            this.classList.add("correct");

            feedbackText.innerHTML = `

            <strong>Correct!</strong><br><br>

            Low popularity does not automatically mean false,
            just as high popularity does not automatically mean true.

            Every post should be verified using trusted sources,
            regardless of its number of likes, comments, or shares.

            `;

        }

        else{

            this.classList.add("wrong");
            this.classList.add("fade");

            setTimeout(()=>{

                feedbackText.innerHTML = `

                <strong>Incorrect.</strong><br><br>

                Many people believe viral posts are automatically
                trustworthy because thousands of users have shared
                them. However, popularity reflects engagement—not
                credibility. Even highly shared content can spread
                misinformation.

                `;

            },10000);

        }

        feedbackBox.classList.add("show");

        // ============================================
        // AUTO RESET
        // ============================================

        setTimeout(()=>{

            imageOptions.forEach(card=>{

                card.classList.remove("correct");
                card.classList.remove("wrong");
                card.classList.remove("fade");

                card.style.pointerEvents="auto";

            });

            feedbackBox.classList.remove("show");

            feedbackText.innerHTML="Feedback will appear here.";

            answered=false;

        },10000);

    });

});

// ======================================================
// HOVER EFFECT
// ======================================================

imageOptions.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(answered) return;

        card.style.transform="translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        if(answered) return;

        card.style.transform="";

    });

});

// ======================================================
// SCROLL REVEAL
// ======================================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".content-card,.activity-card").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".7s ease";

    observer.observe(card);

});

// ======================================================
// PROGRESS BAR
// ======================================================

window.addEventListener("load",()=>{

    const progress=document.querySelector(".progress-fill");

    progress.style.width="0%";

    setTimeout(()=>{

        progress.style.transition="1.2s ease";
        progress.style.width="80%";

    },300);

});