/* ==========================================================
   ACTIVITY JAVASCRIPT
   SUPABASE DATABASE INTEGRATION
========================================================== */


/* ==========================================================
   SUPABASE CONNECTION
========================================================== */

const SUPABASE_URL =
    "https://tetluvszrzwzpgkibxjt.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_952Ywf1o9aNmRF3_n7Pg_w_JsJCLuq3";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* ==========================================================
   QUESTION DATA
========================================================== */

const activities = {

    /* ======================================================
       AI-MANIPULATION IDENTIFICATION
    ====================================================== */

    ai: [

        {
            question:
                "The image appears realistic and is presented as evidence of an event. However, you are unsure whether the image is authentic. Which action would provide the strongest basis for deciding whether the image should be trusted?",

            choices: [
                "Check whether the image appears realistic enough to be genuine.",
                "Look for the original source, compare the image with credible reports, and check whether the event is independently documented.",
                "Trust the image if several social media users describe the same event in the comments.",
                "Assume the image is authentic because digitally manipulated images are usually easy to recognize."
            ],

            answer: 1,

            explanation:
                "A realistic appearance is not enough to establish authenticity. The stronger approach is to trace the original source, compare the claim with credible independent reporting, and determine whether the event is supported by reliable evidence.",

            image:
                "images/digital.jpg"
        },


        {
            question:
                "An image contains text claiming that a major event happened at a specific location and date. The post provides no original source, but the image looks convincing. What is the most appropriate next step before sharing it?",

            choices: [
                "Search for the same image and claim using independent and credible sources, then compare the date, location, and available evidence.",
                "Share the image with a warning because people can decide for themselves whether it is true.",
                "Accept the claim because adding specific details such as a location and date makes the post more credible.",
                "Check how many reactions the post has and use the audience's response as an indication of accuracy."
            ],

            answer: 0,

            explanation:
                "Specific details can make misinformation appear convincing, but they do not prove that the claim is true. Searching for independent evidence and comparing the date, location, and original source provides a stronger basis for verification.",

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
                "A headline claims that a surprising political event happened and uses dramatic wording to encourage readers to click. The article preview provides little evidence and does not clearly identify the original source. What should make you cautious about the post?",

            choices: [
                "The headline uses emotional language and creates urgency while providing insufficient evidence or context for the claim.",
                "The headline is suspicious only because political topics should never be discussed on social media.",
                "The article is probably accurate because dramatic headlines are commonly used by professional news organizations.",
                "The claim can be considered reliable if the headline is repeated by several social media accounts."
            ],

            answer: 0,

            explanation:
                "Clickbait often combines emotional or sensational wording with limited context to encourage users to click. A dramatic headline should prompt you to examine the source, evidence, and full context instead of accepting the claim immediately.",

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
                "A social media post has millions of views, thousands of comments, and many shares. Some users argue that the large audience proves the information is trustworthy. Which evaluation is most accurate?",

            choices: [
                "The information is likely accurate because a large number of people have already accepted it.",
                "The number of views is useful evidence of accuracy because false information rarely becomes popular.",
                "The engagement shows that the content spread widely, but its accuracy still needs to be evaluated using evidence and credible sources.",
                "The information should be considered unreliable because popular content is usually misinformation."
            ],

            answer: 2,

            explanation:
                "Views, likes, comments, and shares measure how widely content spreads, not whether the information is accurate. Popularity can increase exposure to both reliable information and misinformation, so the claim still needs to be verified using credible evidence.",

            image:
                "images/popularity.png"
        }

    ],


    /* ======================================================
       CROSS-CHECKING
    ====================================================== */

    cross: [

        {
            question:
                "A creator posts a health-related claim and cites no study or organization. The video has a professional presentation and thousands of positive comments. If you want to evaluate the claim responsibly, which sequence of actions is strongest?",

            choices: [
                "Check the number of views, read the comments, and decide whether most viewers seem convinced.",
                "Search for the exact claim, identify whether credible health organizations or research support it, and compare the evidence with the creator's statement.",
                "Trust the claim temporarily because the creator appears knowledgeable, then wait for the video to become more popular.",
                "Look for another social media post making the same claim and treat repeated posts as confirmation."
            ],

            answer: 1,

            explanation:
                "A strong verification process focuses on evidence rather than presentation or popularity. Search for the specific claim, consult credible health organizations or research, and compare the available evidence with what the creator is saying.",

            image:
                "images/source.jpeg"
        },


        {
            question:
                "A viral video claims that a recent event occurred and has more than 1.2 million views. You find several accounts repeating the same claim, but most of them appear to have copied the original post. What does this tell you?",

            choices: [
                "The claim is confirmed because multiple accounts are reporting the same information.",
                "The large number of views and repeated posts make the claim more reliable than information from a less popular source.",
                "The repeated posts may indicate that the claim spread widely, but they do not independently verify it if the accounts are relying on the same original source.",
                "The claim should automatically be considered false because viral information is usually manipulated."
            ],

            answer: 2,

            explanation:
                "Multiple posts do not necessarily represent independent confirmation. If several accounts copied the same original claim, they may all be relying on the same unverified information. Independent evidence from credible sources is needed to strengthen verification.",

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

/*
   Prevents double submission of the name modal.
*/
let isEnteringActivity = false;


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
   SESSION / DATABASE PARTICIPANTS
========================================================== */

let participants = [];


/* ==========================================================
   SAVE PARTICIPANT TO SUPABASE
========================================================== */

async function saveParticipant(
    name,
    activity
) {

    if (!name) {

        return false;

    }


    try {

        const {
            data,
            error
        } = await supabaseClient
            .from("activity_participants")
            .insert([
                {
                    name: name,
                    activity: activity
                }
            ])
            .select()
            .single();


        if (error) {

            console.error(
                "Supabase participant insert error:",
                error
            );

            return false;

        }


        console.log(
            "Participant successfully saved:",
            data
        );


        return true;

    }

    catch (error) {

        console.error(
            "Unexpected Supabase error:",
            error
        );


        return false;

    }

}


/* ==========================================================
   LOAD PARTICIPANTS FROM SUPABASE
========================================================== */

async function loadParticipants() {

    try {

        const {
            data,
            error
        } = await supabaseClient
            .from("activity_participants")
            .select(
                "id, name, activity, joined_at"
            )
            .order(
                "joined_at",
                {
                    ascending: false
                }
            );


        if (error) {

            console.error(
                "Supabase participant load error:",
                error
            );

            return;

        }


        participants =
            data || [];


        updateParticipantPanel();

    }

    catch (error) {

        console.error(
            "Unexpected participant loading error:",
            error
        );

    }

}


/* ==========================================================
   ACTIVITY NAME ENTRY MODAL
========================================================== */

function createNameModal() {

    if (
        document.getElementById(
            "nameEntryModal"
        )
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

        setTimeout(
            () => {

                input.focus();

            },
            100
        );


        input.addEventListener(
            "input",
            () => {

                input.classList.remove(
                    "input-error"
                );

            }
        );


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

async function enterActivity() {

    /*
       IMPORTANT:
       Stop duplicate clicks immediately.
    */

    if (isEnteringActivity) {

        return;

    }


    const input =
        document.getElementById(
            "participantNameInput"
        );


    const enterButton =
        document.getElementById(
            "enterActivityButton"
        );


    if (!input) {

        return;

    }


    const name =
        input.value.trim();


    /* ======================================================
       VALIDATE NAME
    ====================================================== */

    if (!name) {

        input.classList.add(
            "input-error"
        );


        input.focus();


        return;

    }


    /*
       LOCK THE SUBMISSION IMMEDIATELY.

       This happens BEFORE any Supabase request,
       so clicking the button multiple times will
       not create multiple records.
    */

    isEnteringActivity =
        true;


    input.disabled =
        true;


    if (enterButton) {

        enterButton.disabled =
            true;


        enterButton.classList.add(
            "disabled"
        );


        enterButton.innerHTML = `

            Entering Activity

            <i class="fa-solid fa-spinner fa-spin"></i>

        `;

    }


    participantName =
        name;


    /* ======================================================
       ADD TO LOCAL DISPLAY
    ====================================================== */

    addParticipantLocally(
        name
    );


    /* ======================================================
       HIDE MODAL IMMEDIATELY
       DO NOT WAIT FOR SUPABASE.
    ====================================================== */

    const modal =
        document.getElementById(
            "nameEntryModal"
        );


    if (modal) {

        modal.classList.add(
            "hide"
        );


        /*
           Remove it after the CSS transition.
           The user does NOT have to wait for this.
        */

        setTimeout(
            () => {

                if (
                    modal &&
                    modal.parentNode
                ) {

                    modal.remove();

                }

            },
            250
        );

    }


    /* ======================================================
       SAVE TO SUPABASE IN BACKGROUND
       The activity continues immediately.
    ====================================================== */

    saveParticipant(
        name,
        "Activity Started"
    ).then(
        success => {

            if (success) {

                console.log(
                    `Participant "${name}" saved to Supabase.`
                );

            }

            else {

                console.error(
                    `Participant "${name}" was not saved to Supabase.`
                );

            }

        }
    );


    /*
       No await here.

       This prevents the Supabase connection time
       from delaying the activity.
    */

}


/* ==========================================================
   ADD PARTICIPANT LOCALLY
========================================================== */

function addParticipantLocally(name) {

    if (!name) {

        return;

    }


    /*
       Prevent duplicate local entries
       from the same submission.
    */

    const alreadyExists =
        participants.some(
            participant =>
                participant.name === name &&
                participant.id &&
                String(
                    participant.id
                ).startsWith("local-")
        );


    if (alreadyExists) {

        return;

    }


    participants.unshift({

        id:
            "local-" +
            Date.now() +
            "-" +
            Math.random()
                .toString(36)
                .slice(2),

        name:
            name,

        activity:
            "Activity Started",

        joined_at:
            new Date().toISOString()

    });


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


    if (!list) {

        return;

    }


    if (count) {

        count.textContent =
            participants.length;

    }


    if (
        participants.length === 0
    ) {

        list.innerHTML = `

            <div class="participant-item">

                <div class="participant-avatar">

                    <i class="fa-solid fa-user"></i>

                </div>


                <div class="participant-info">

                    <strong>

                        No participants yet

                    </strong>


                    <span>

                        Be the first to join.

                    </span>

                </div>

            </div>

        `;

        return;

    }


    list.innerHTML =
        participants.map(
            participant => `

                <div class="participant-item">

                    <div class="participant-avatar">

                        <i class="fa-solid fa-user"></i>

                    </div>


                    <div class="participant-info">

                        <strong>

                            ${escapeHTML(
                                participant.name
                            )}

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


    if (!activityPage) {

        return;

    }


    createNameModal();

}


/* ==========================================================
   SHOW SCREEN
========================================================== */

function showScreen(screen) {

    if (!screen) {

        return;

    }


    document
        .querySelectorAll(
            ".activity-screen"
        )
        .forEach(
            section => {

                section.classList.remove(
                    "active"
                );

            }
        );


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

topicCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                const topic =
                    card.dataset.topic;


                startActivity(
                    topic
                );

            }
        );

    }
);


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


    if (!questions) {

        return;

    }


    const question =
        questions[currentQuestion];


    if (!question) {

        return;

    }


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
            (
                currentQuestion /
                questions.length
            ) * 100;


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
                    src="${escapeHTML(
                        question.image
                    )}"
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
            document.createElement(
                "p"
            );


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

    if (!choicesContainer) {

        return;

    }


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

                    ${escapeHTML(
                        choice
                    )}

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

    if (answered) {

        return;

    }


    const question =
        activities[
            currentTopic
        ][currentQuestion];


    if (!question) {

        return;

    }


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

    if (!currentTopic) {

        return;

    }


    const questions =
        activities[currentTopic];


    if (!questions) {

        return;

    }


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

        /*
           Load existing participant records
           from Supabase.
        */

        loadParticipants();


        /*
           Show name-entry modal.
        */

        initializeActivityEntry();

    }
);