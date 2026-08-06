const options = document.querySelectorAll(".image-option");
const feedbackBox = document.getElementById("feedbackBox");
const feedbackText = document.querySelector(".feedback-text");

let answered = false;

options.forEach(option => {

    option.addEventListener("click", () => {

        if(answered) return;

        answered = true;

        const answer = option.dataset.answer;

        options.forEach(card => {

            card.style.pointerEvents = "none";

        });

        if(answer === "correct"){

            option.classList.add("correct");

            feedbackText.innerHTML = `

                <strong>Correct!</strong><br><br>

                This image appears to be authentic and does not show obvious
                signs of AI-generated misinformation. Always verify content
                using trusted sources before sharing online.

            `;

        }

        else{

            option.classList.add("wrong");

            option.classList.add("fade");

            setTimeout(()=>{

                feedbackText.innerHTML = `

                    <strong>Not Quite!</strong><br><br>

                    This image represents AI-generated misinformation.
                    AI can create convincing but misleading content that
                    appears real at first glance. Always verify information,
                    inspect the source, and compare it with reliable
                    references before believing or sharing it.

                `;

            },3000);

        }

        feedbackBox.classList.add("show");

        feedbackBox.scrollIntoView({

            behavior:"smooth",
            block:"center"

        });

    });

});