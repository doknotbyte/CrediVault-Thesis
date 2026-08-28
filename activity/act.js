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
                "PLACEHOLDER: Digital manipulation question goes here.",

            choices: [
                "Choice A",
                "Choice B",
                "Choice C",
                "Choice D"
            ],

            answer: 0,

            explanation:
                "PLACEHOLDER: Add the explanation for the correct answer."
        },


        {
            question:
                "PLACEHOLDER: AI-generated misinformation question goes here.",

            choices: [
                "Choice A",
                "Choice B",
                "Choice C",
                "Choice D"
            ],

            answer: 0,

            explanation:
                "PLACEHOLDER: Add the explanation for the correct answer."
        }

    ],


    /* ======================================================
       CLICKBAIT
    ====================================================== */

    clickbait: [

        {
            question:
                "PLACEHOLDER: Clickbait question goes here.",

            choices: [
                "Choice A",
                "Choice B",
                "Choice C",
                "Choice D"
            ],

            answer: 0,

            explanation:
                "PLACEHOLDER: Add the explanation for the correct answer."
        }

    ],


    /* ======================================================
       INFLUENCE OF POPULARITY
    ====================================================== */

    popularity: [

        {
            question:
                "PLACEHOLDER: Influence of Popularity question goes here.",

            choices: [
                "Choice A",
                "Choice B",
                "Choice C",
                "Choice D"
            ],

            answer: 0,

            explanation:
                "PLACEHOLDER: Add the explanation for the correct answer."
        }

    ],


    /* ======================================================
       CROSS-CHECKING
    ====================================================== */

    cross: [

        {
            question:
                "PLACEHOLDER: Cross-Checking question goes here.",

            choices: [
                "Choice A",
                "Choice B",
                "Choice C",
                "Choice D"
            ],

            answer: 0,

            explanation:
                "PLACEHOLDER: Add the explanation for the correct answer."
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

    /* Prevent duplicate modal */

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

                Enter your name before starting
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


    /* Prevent empty name */

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


    /* Add actual participant */

    addParticipant(name);


    /* Close modal */

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

    /*
        Add ONLY the name actually entered.

        No default participants.
        No fake records.
        No localStorage.
    */

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


    /* Update count */

    if (count) {

        count.textContent =
            participants.length;

    }


    /*
        IMPORTANT:

        If there are NO participants,
        do not create a fake participant record.

        Keep the list empty.
    */

    if (
        participants.length === 0
    ) {

        list.innerHTML = "";

        return;

    }


    /* Generate ONLY actual participants */

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


    /*
        ALWAYS create a new modal
        when entering the Activity page.

        No localStorage.
        No sessionStorage.
        No "already entered" check.
    */

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


    /* Question number */

    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    }


    /* Progress */

    if (progressFill) {

        const progress =
            (currentQuestion /
                questions.length) * 100;


        progressFill.style.width =
            `${progress}%`;

    }


    /* Question text */

    if (questionText) {

        questionText.textContent =
            question.question;

    }


    /* Clear choices */

    if (choicesContainer) {

        choicesContainer.innerHTML =
            "";

    }


    /* Reset feedback */

    if (answerFeedback) {

        answerFeedback.classList.remove(
            "show"
        );

        answerFeedback.classList.remove(
            "wrong"
        );

    }


    /*
        VERY IMPORTANT:

        Every new question starts
        with Next disabled.
    */

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

    /*
        Prevent answering twice.
    */

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


    /*
        Disable all answer choices.
    */

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


    /* Explanation */

    if (feedbackText) {

        feedbackText.textContent =
            question.explanation;

    }


    /* Show feedback */

    if (answerFeedback) {

        answerFeedback.classList.add(
            "show"
        );

    }


    /*
        ======================================================
        ENABLE NEXT BUTTON
        ======================================================

        This is the important fix.

        We explicitly remove the disabled
        property AND the disabled class.
    */

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


            /*
                Next cannot work until
                an answer has been selected.
            */

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


            /*
                If there are no more questions,
                show result screen.
            */

            if (
                currentQuestion >=
                questions.length
            ) {

                finishActivity();

                return;

            }


            /*
                Otherwise load next question.
            */

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

            /*
                Don't close the name modal
                with Escape.
            */

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

        /*
            Participant list starts empty.
            No default records.
        */

        updateParticipantPanel();


        /*
            Name modal is created when
            Activity page loads.
        */

        initializeActivityEntry();

    }
);