/* ==========================================================
   ACTIVITY JAVASCRIPT
========================================================== */


/* ==========================================================
   QUESTION DATA
========================================================== */

const activities = {

    /* ======================================================
       AI-MANIPULATION IDENTIFICATION
       TWO CONTENT AREAS:
       1. Digital Manipulation
       2. AI-Generated Misinformation
    ====================================================== */

    ai: [

        {
            question:
                "Look at the image. What is the main concern with digitally manipulated content?",

            choices: [
                "It may change or distort the original information.",
                "It is always created for entertainment.",
                "It cannot influence people's opinions.",
                "It is automatically verified by social media."
            ],

            answer: 0,

            explanation:
                "Digital manipulation can alter images or information, making people believe something that may not accurately represent reality.",

            image:
                "images/digital.jpg"
        },


        {
            question:
                "The image is an example of information involving AI-generated content. What should you do before believing or sharing it?",

            choices: [
                "Share it immediately because it looks realistic.",
                "Check the information using reliable and independent sources.",
                "Believe it if many people are commenting on it.",
                "Assume that all AI-generated images are true."
            ],

            answer: 1,

            explanation:
                "AI-generated images can look realistic even when they are false. Always verify the information through reliable and independent sources before sharing it.",

            image:
                "images/ai-text.jpg"
        }

    ],


    /* ======================================================
       CLICKBAIT
    ====================================================== */

    clickbait: [

        {
            question:
                "What makes the headline in the image an example of clickbait?",

            choices: [
                "It uses attention-grabbing language to encourage people to click.",
                "It provides complete evidence for every claim.",
                "It comes from a government website.",
                "It avoids emotional or exaggerated wording."
            ],

            answer: 0,

            explanation:
                "Clickbait commonly uses exaggerated, emotional, or surprising wording to attract attention and encourage people to click on the content.",

            image:
                "images/clickbait.jpg"
        }

    ],


    /* ======================================================
       INFLUENCE OF POPULARITY
    ====================================================== */

    popularity: [

        {
            question:
                "Why should popularity or the number of views not be treated as proof that information is true?",

            choices: [
                "Popular content is always false.",
                "Information becomes true when many people share it.",
                "A large number of views or shares does not guarantee accuracy.",
                "Only unpopular information can be trusted."
            ],

            answer: 2,

            explanation:
                "Popularity shows how widely content is viewed or shared, but it does not prove that the information is accurate or reliable.",

            image:
                "images/popularity.png"
        }

    ],


    /* ======================================================
       CROSS-CHECKING
       TWO SUBTOPICS:
       1. Source & Evidence Verification
       2. Social Validation & Verification Effort
    ====================================================== */

    cross: [

    /* ==================================================
       SOURCE & EVIDENCE VERIFICATION
    ================================================== */

    {
        question:
            "You see a health-related video making a strong claim but the creator does not provide any credible source or evidence. What should you do first to verify the claim?",

        choices: [
            "Believe the claim because the video looks professional.",
            "Check the creator’s credibility and look for reliable sources supporting the claim.",
            "Share the video and wait for others to confirm it.",
            "Assume the claim is true because it has many views."
        ],

        answer: 1,

        explanation:
            "The first step is to check the creator’s credibility and look for reliable sources that support the claim. This helps determine whether the information is supported by trustworthy evidence.",

        image:
            "images/source.jpeg"
    },


    /* ==================================================
       SOCIAL VALIDATION & VERIFICATION EFFORT
    ================================================== */

    {
        question:
            "A YouTube video makes a viral claim and has over 1.2 million views. What should you understand about the number of views?",

        choices: [
            "The claim must be true because millions of people watched it.",
            "The high number of views proves that the information came from an expert.",
            "The views show that the video is popular, but they do not prove that the claim is accurate.",
            "The claim is reliable because YouTube allows the video to remain online."
        ],

        answer: 2,

        explanation:
            "A high number of views shows that the video is popular and has reached many people, but popularity does not prove that the claim is accurate or trustworthy.",

        image:
            "images/social.jpeg"
    }
    

    ]

};


/* ==========================================================
   TOPIC NAMES
========================================================== */

const topicNames = {

    ai: "AI-Manipulation Identification",

    clickbait: "Clickbait",

    popularity: "Influence of Popularity",

    cross: "Cross-Checking"

};


/* ==========================================================
   VARIABLES
========================================================== */

let currentTopic = null;

let currentQuestion = 0;

let score = 0;

let answered = false;

let participantName = "";


/* ==========================================================
   ELEMENTS
========================================================== */

const homeScreen =
    document.getElementById("home");

const questionScreen =
    document.getElementById("questionScreen");

const resultScreen =
    document.getElementById("resultScreen");


const topicCards =
    document.querySelectorAll(".topic-card");


const topicTitle =
    document.getElementById("topicTitle");


const questionNumber =
    document.getElementById("questionNumber");


const progressFill =
    document.getElementById("progressFill");


const questionText =
    document.getElementById("questionText");


const choicesContainer =
    document.getElementById("choicesContainer");


const answerFeedback =
    document.getElementById("answerFeedback");


const feedbackTitle =
    document.getElementById("feedbackTitle");


const feedbackText =
    document.getElementById("feedbackText");


const nextButton =
    document.getElementById("nextButton");


const finalScore =
    document.getElementById("finalScore");


const backToTopics =
    document.getElementById("backToTopics");


const retryButton =
    document.getElementById("retryButton");


const topicsButton =
    document.getElementById("topicsButton");


/* ==========================================================
   QUESTION IMAGE
========================================================== */

const questionImage =
    document.querySelector(".question-image");


/* ==========================================================
   SESSION PARTICIPANTS
========================================================== */

/*
    SESSION ONLY

    - No localStorage
    - Resets after refresh
    - Unlimited participant entries
    - Only names actually entered are displayed
*/

let participants = [];


/* ==========================================================
   ACTIVITY NAME ENTRY MODAL
========================================================== */

function createNameModal() {

    if (
        document.getElementById("nameEntryModal")
    ) {

        return;

    }


    const modal =
        document.createElement("div");


    modal.id =
        "nameEntryModal";


    modal.className =
        "name-entry-modal";


    modal.innerHTML = `

        <div class="name-entry-box">

            <div class="name-entry-icon">

                <i class="fa-solid fa-gamepad"></i>

            </div>


            <span class="name-entry-label">

                INTERACTIVE ACTIVITY

            </span>


            <h2>

                Welcome!

            </h2>


            <p>

                Enter your name/nickname before starting
                the activity.

            </p>


            <div class="name-input-wrapper">

                <i class="fa-solid fa-user"></i>

                <input
                    type="text"
                    id="participantNameInput"
                    placeholder="Enter your name"
                    maxlength="40"
                    autocomplete="off"
                >

            </div>


            <button
                class="name-entry-button"
                id="enterActivityButton"
                type="button"
            >

                Enter Activity

                <i class="fa-solid fa-arrow-right"></i>

            </button>

        </div>

    `;


    document.body.appendChild(modal);


    const input =
        document.getElementById(
            "participantNameInput"
        );


    const enterButton =
        document.getElementById(
            "enterActivityButton"
        );


    if (input) {

        setTimeout(() => {

            input.focus();

        }, 100);


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    enterActivity();

                }

            }
        );

    }


    if (enterButton) {

        enterButton.addEventListener(
            "click",
            enterActivity
        );

    }

}


/* ==========================================================
   ENTER ACTIVITY
========================================================== */

function enterActivity() {

    const input =
        document.getElementById(
            "participantNameInput"
        );


    if (!input) return;


    const name =
        input.value.trim();


    if (!name) {

        input.classList.add(
            "input-error"
        );

        input.focus();

        return;

    }


    input.classList.remove(
        "input-error"
    );


    participantName =
        name;


    addParticipant(name);


    const modal =
        document.getElementById(
            "nameEntryModal"
        );


    if (modal) {

        modal.classList.add(
            "hide"
        );


        setTimeout(() => {

            modal.remove();

        }, 250);

    }

}


/* ==========================================================
   ADD PARTICIPANT
========================================================== */

function addParticipant(name) {

    if (!name) return;


    participants.push(name);


    updateParticipantPanel();

}


/* ==========================================================
   UPDATE PARTICIPANT PANEL
========================================================== */

function updateParticipantPanel() {

    const list =
        document.querySelector(
            ".participants-list"
        );


    const count =
        document.querySelector(
            ".participants-count"
        );


    if (!list) return;


    if (count) {

        count.textContent =
            participants.length;

    }


    if (
        participants.length === 0
    ) {

        list.innerHTML = "";

        return;

    }


    list.innerHTML =
        participants.map(
            name => `

                <div class="participant-item">

                    <div class="participant-avatar">

                        <i class="fa-solid fa-user"></i>

                    </div>


                    <div class="participant-info">

                        <strong>

                            ${escapeHTML(name)}

                        </strong>


                        <span>

                            Joined the activity

                        </span>

                    </div>

                </div>

            `
        ).join("");

}


/* ==========================================================
   ESCAPE HTML
========================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;

}


/* ==========================================================
   SHOW NAME MODAL
========================================================== */

function initializeActivityEntry() {

    const activityPage =
        document.querySelector(
            ".activity-app"
        );


    if (!activityPage) return;


    createNameModal();

}


/* ==========================================================
   SHOW SCREEN
========================================================== */

function showScreen(screen) {

    if (!screen) return;


    document
        .querySelectorAll(".activity-screen")
        .forEach(section => {

            section.classList.remove(
                "active"
            );

        });


    screen.classList.add(
        "active"
    );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ==========================================================
   START TOPIC
========================================================== */

topicCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const topic =
                card.dataset.topic;


            startActivity(topic);

        }
    );

});


/* ==========================================================
   START ACTIVITY
========================================================== */

function startActivity(topic) {

    if (
        !activities[topic] ||
        !activities[topic].length
    ) {

        return;

    }


    currentTopic =
        topic;


    currentQuestion =
        0;


    score =
        0;


    answered =
        false;


    if (topicTitle) {

        topicTitle.textContent =
            topicNames[topic];

    }


    showScreen(
        questionScreen
    );


    loadQuestion();

}


/* ==========================================================
   LOAD QUESTION
========================================================== */

function loadQuestion() {

    const questions =
        activities[currentTopic];


    if (!questions) return;


    const question =
        questions[currentQuestion];


    if (!question) return;


    answered =
        false;


    /* ======================================================
       QUESTION NUMBER
    ====================================================== */

    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    }


    /* ======================================================
       PROGRESS
    ====================================================== */

    if (progressFill) {

        const progress =
            (currentQuestion /
                questions.length) * 100;


        progressFill.style.width =
            `${progress}%`;

    }


    /* ======================================================
       QUESTION IMAGE
    ====================================================== */

    if (questionImage) {

        if (question.image) {

            questionImage.innerHTML = `

                <img
                    src="${escapeHTML(question.image)}"
                    alt="Activity question image"
                >

            `;

        }

        else {

            questionImage.innerHTML = `

                <span class="image-placeholder">

                    <i class="fa-solid fa-image"></i>

                    <small>
                        Image placeholder
                    </small>

                </span>

            `;

        }

    }


    /* ======================================================
       QUESTION TEXT
    ====================================================== */

    if (questionText) {

        questionText.textContent =
            question.question;

    }


    /* ======================================================
       CLEAR CHOICES
    ====================================================== */

    if (choicesContainer) {

        choicesContainer.innerHTML =
            "";

    }


    /* ======================================================
       RESET FEEDBACK
    ====================================================== */

    if (answerFeedback) {

        answerFeedback.classList.remove(
            "show"
        );

        answerFeedback.classList.remove(
            "wrong"
        );

    }


    /* ======================================================
       RESET NEXT BUTTON
    ====================================================== */

    if (nextButton) {

        nextButton.disabled =
            true;

        nextButton.classList.add(
            "disabled"
        );

    }


    /* ======================================================
       QUESTION INSTRUCTION
    ====================================================== */

    let questionInstruction =
        document.getElementById(
            "questionInstruction"
        );


    if (
        !questionInstruction &&
        questionText
    ) {

        questionInstruction =
            document.createElement("p");


        questionInstruction.id =
            "questionInstruction";


        questionInstruction.className =
            "question-instruction";


        questionText.insertAdjacentElement(
            "afterend",
            questionInstruction
        );

    }


    if (questionInstruction) {

        questionInstruction.textContent =
            "Choose the best answer below to continue.";

    }


    /* ======================================================
       CREATE CHOICES
    ====================================================== */

    if (!choicesContainer) return;


    question.choices.forEach(
        (choice, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice-button";


            button.type =
                "button";


            button.innerHTML = `

                <span class="choice-letter">

                    ${String.fromCharCode(
                        65 + index
                    )}

                </span>


                <span>

                    ${escapeHTML(choice)}

                </span>

            `;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            choicesContainer.appendChild(
                button
            );

        }
    );

}


/* ==========================================================
   SELECT ANSWER
========================================================== */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) return;


    const question =
        activities[
            currentTopic
        ][currentQuestion];


    if (!question) return;


    answered =
        true;


    const choiceButtons =
        document.querySelectorAll(
            ".choice-button"
        );


    /* ======================================================
       DISABLE ALL CHOICES
    ====================================================== */

    choiceButtons.forEach(
        button => {

            button.classList.add(
                "disabled"
            );


            button.disabled =
                true;

        }
    );


    /* ======================================================
       CORRECT ANSWER
    ====================================================== */

    if (
        selectedIndex ===
        question.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        score++;


        if (feedbackTitle) {

            feedbackTitle.textContent =
                "Correct!";

        }


        if (answerFeedback) {

            answerFeedback.classList.remove(
                "wrong"
            );

        }

    }


    /* ======================================================
       WRONG ANSWER
    ====================================================== */

    else {

        selectedButton.classList.add(
            "wrong"
        );


        if (
            choiceButtons[
                question.answer
            ]
        ) {

            choiceButtons[
                question.answer
            ].classList.add(
                "correct"
            );

        }


        if (feedbackTitle) {

            feedbackTitle.textContent =
                "Not quite!";

        }


        if (answerFeedback) {

            answerFeedback.classList.add(
                "wrong"
            );

        }

    }


    /* ======================================================
       EXPLANATION
    ====================================================== */

    if (feedbackText) {

        feedbackText.textContent =
            question.explanation;

    }


    /* ======================================================
       SHOW FEEDBACK
    ====================================================== */

    if (answerFeedback) {

        answerFeedback.classList.add(
            "show"
        );

    }


    /* ======================================================
       ENABLE NEXT BUTTON
    ====================================================== */

    if (nextButton) {

        nextButton.disabled =
            false;


        nextButton.classList.remove(
            "disabled"
        );


        nextButton.removeAttribute(
            "disabled"
        );

    }

}


/* ==========================================================
   NEXT QUESTION
========================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            if (!answered) {

                return;

            }


            if (!currentTopic) {

                return;

            }


            const questions =
                activities[currentTopic];


            if (!questions) {

                return;

            }


            currentQuestion++;


            /* =================================================
               FINISH ACTIVITY
            ================================================= */

            if (
                currentQuestion >=
                questions.length
            ) {

                finishActivity();

                return;

            }


            /* =================================================
               LOAD NEXT QUESTION
            ================================================= */

            loadQuestion();

        }
    );

}


/* ==========================================================
   FINISH ACTIVITY
========================================================== */

function finishActivity() {

    if (!currentTopic) return;


    const questions =
        activities[currentTopic];


    if (!questions) return;


    if (finalScore) {

        finalScore.textContent =
            `${score} / ${questions.length}`;

    }


    if (progressFill) {

        progressFill.style.width =
            "100%";

    }


    showScreen(
        resultScreen
    );

}


/* ==========================================================
   BACK TO TOPICS
========================================================== */

function goBackToTopics() {

    currentTopic =
        null;


    currentQuestion =
        0;


    score =
        0;


    answered =
        false;


    showScreen(
        homeScreen
    );

}


/* ==========================================================
   BACK TO TOPICS BUTTON
========================================================== */

if (backToTopics) {

    backToTopics.addEventListener(
        "click",
        goBackToTopics
    );

}


/* ==========================================================
   TOPICS BUTTON
========================================================== */

if (topicsButton) {

    topicsButton.addEventListener(
        "click",
        goBackToTopics
    );

}


/* ==========================================================
   RETRY
========================================================== */

if (retryButton) {

    retryButton.addEventListener(
        "click",
        () => {

            if (currentTopic) {

                startActivity(
                    currentTopic
                );

            }

        }
    );

}


/* ==========================================================
   FLOATING MAIN NAVIGATION
========================================================== */

const floatingMenuBtn =
    document.getElementById(
        "floatingMenuBtn"
    );


const floatingNav =
    document.getElementById(
        "floatingNav"
    );


const floatingNavClose =
    document.getElementById(
        "floatingNavClose"
    );


const navOverlay =
    document.getElementById(
        "navOverlay"
    );


/* ==========================================================
   OPEN NAVIGATION
========================================================== */

if (floatingMenuBtn) {

    floatingMenuBtn.addEventListener(
        "click",
        () => {

            if (floatingNav) {

                floatingNav.classList.add(
                    "active"
                );

            }


            if (navOverlay) {

                navOverlay.classList.add(
                    "active"
                );

            }


            document.body.style.overflow =
                "hidden";

        }
    );

}


/* ==========================================================
   CLOSE NAVIGATION
========================================================== */

function closeFloatingNav() {

    if (floatingNav) {

        floatingNav.classList.remove(
            "active"
        );

    }


    if (navOverlay) {

        navOverlay.classList.remove(
            "active"
        );

    }


    document.body.style.overflow =
        "";

}


/* ==========================================================
   CLOSE NAV BUTTON
========================================================== */

if (floatingNavClose) {

    floatingNavClose.addEventListener(
        "click",
        closeFloatingNav
    );

}


/* ==========================================================
   CLOSE OVERLAY
========================================================== */

if (navOverlay) {

    navOverlay.addEventListener(
        "click",
        closeFloatingNav
    );

}


/* ==========================================================
   ESC KEY
========================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            const nameModal =
                document.getElementById(
                    "nameEntryModal"
                );


            if (
                nameModal &&
                !nameModal.classList.contains(
                    "hide"
                )
            ) {

                return;

            }


            closeFloatingNav();

        }

    }
);


/* ==========================================================
   INITIALIZE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {



        updateParticipantPanel();


        initializeActivityEntry();

    }
);