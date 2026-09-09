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
    },


    /* ==================================================
       QUESTION 3
    ================================================== */

    {
        question:
            "A student sees an image claiming that a major disaster has just occurred in a familiar city. The scene looks realistic, but several details—such as shadows, faces, and emergency signs—appear inconsistent. No local news organization has reported the event yet. Which conclusion is the most defensible?",

        choices: [
            "The image is probably false because several visual details appear inconsistent with a real event.",
            "The image may be credible because the lack of local reports does not automatically disprove the event.",
            "The claim should remain unverified because the available clues raise concerns but do not establish whether the event actually occurred.",
            "The event likely did not happen because major disasters would normally receive immediate local coverage."
        ],

        answer: 2,

        explanation:
            "The visual inconsistencies and lack of independent reporting provide reasons for further investigation, but they do not automatically prove that the event is false. A careful evaluator separates suspicious evidence from conclusive evidence and seeks reliable independent confirmation."
    },


    /* ==================================================
       QUESTION 4
    ================================================== */

    {
        question:
            "You encounter two versions of a photo being used to support the same political claim. One shows a large crowd, while the other shows noticeably fewer people. Both versions are widely shared and each is presented as the original image. Which investigation would be most useful?",

        choices: [
            "Compare the engagement on both versions and determine which image received stronger public support.",
            "Examine the visual quality of both versions and choose the one that appears more natural and less edited.",
            "Trace both versions to their earliest identifiable sources, compare their dates and contexts, and check whether either was cropped or altered.",
            "Prefer the version posted by an established news account because professional organizations are generally more reliable."
        ],

        answer: 2,

        explanation:
            "Conflicting versions should be investigated through source tracing and contextual comparison. The earliest identifiable source, publication date, original context, and possible cropping or editing provide stronger evidence than engagement, appearance, or account reputation alone."
    },


    /* ==================================================
       QUESTION 5
    ================================================== */

    {
        question:
            "An AI-generated video appears to show a public figure making a controversial statement. The face, voice, and setting appear convincing. However, the post does not identify the original source. A second account uploads a longer version with slightly different wording. What should you examine first?",

        choices: [
            "Compare both versions and favor the longer video if it contains fewer obvious signs of manipulation.",
            "Search for an original recording, transcript, or verified statement and compare it with the circulating versions.",
            "Treat the statement as potentially authentic because two accounts show the same person saying similar words.",
            "Wait for an AI-detection expert or fact-checker to label the video before evaluating the statement."
        ],

        answer: 1,

        explanation:
            "The existence of multiple versions does not establish that the statement is authentic. The strongest approach is to locate verifiable evidence, such as an original recording, transcript, or reliable statement, and compare it with the circulating footage and wording."
    }

],


    /* ======================================================
       CLICKBAIT
    ====================================================== */

    clickbait: [

    /* ==================================================
       EXISTING CLICKBAIT QUESTION
       KEEP THIS — WITH IMAGE
    ================================================== */

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
    },


/* ==================================================
   CLICKBAIT QUESTION 2
================================================== */

{
    question:
        "A widely shared post uses the headline \"SHOCKING NEW GOVERNMENT RULE WILL CHANGE THE LIVES OF EVERY FILIPINO!\" The article linked in the post explains that the policy actually applies only to a specific government program and a limited group of beneficiaries. If you were evaluating the post's credibility rather than simply deciding whether the policy itself is real, which interpretation is most justified?",

    choices: [
        "The claim is unreliable because government policies should be explained without emotional or dramatic language.",
        "The headline is misleading because it expands a limited policy into a claim about every Filipino, creating a broader impression than the evidence in the article supports.",
        "The headline is acceptable because attention-grabbing language does not affect the factual accuracy of the policy described in the article.",
        "The claim should be considered credible because the linked article provides enough information to show that a real government policy exists."
    ],

    answer: 1,

    explanation:
        "The issue is the mismatch between the scope suggested by the headline and the scope supported by the article. A real policy can still be presented misleadingly when a limited measure is framed as something affecting everyone. Evaluating credibility therefore requires comparing the headline's implied claim with the actual evidence and context provided."
},


/* ==================================================
   CLICKBAIT QUESTION 3
================================================== */

{
    question:
        "A post warns, \"DOCTORS ARE WARNING ABOUT THIS EVERYDAY HABIT,\" but the headline never identifies the habit. The linked article reports on a preliminary study conducted under specific conditions. The study itself describes limitations and does not conclude that the habit is dangerous for everyone. Before deciding whether the social media post is justified, which reasoning is strongest?",

    choices: [
        "The post should be considered credible because it refers to doctors and a scientific study, even if the study's conditions differ from the claim.",
        "The post should be rejected immediately because preliminary studies cannot provide useful information about health risks.",
        "The broader warning should be evaluated against the original study's methods, population, limitations, and actual findings to determine whether the evidence supports the conclusion being presented.",
        "The post can be accepted provisionally because the study may eventually prove the broader claim once more researchers investigate the issue."
    ],

    answer: 2,

    explanation:
        "The important issue is whether the evidence actually supports the conclusion made by the post. A critical reader must examine what the original study investigated, who or what it applied to, what limitations it identified, and whether its findings justify extending the conclusion to everyone."
},


/* ==================================================
   CLICKBAIT QUESTION 4
================================================== */

{
    question:
        "Two posts discuss the same issue. Post A uses the headline \"THE TRUTH THEY DON'T WANT YOU TO KNOW!\" and has thousands of shares but provides no identifiable source. Post B has far fewer interactions but links to an original report, explains the relevant evidence, and acknowledges limitations. A classmate argues that Post A is more trustworthy because its large audience suggests that many people have already evaluated the information. Which response best evaluates the classmate's reasoning?",

    choices: [
        "The classmate is correct because information shared by many people has already undergone a form of public verification.",
        "The classmate is partly correct because high engagement is useful evidence that the information is important, even if it cannot prove every detail.",
        "The classmate's reasoning confuses social popularity with evidentiary support; credibility should be judged by the quality, traceability, and context of the evidence rather than the number of people who interacted with the post.",
        "The classmate is incorrect only because Post B has fewer interactions, since low engagement is generally a sign of higher-quality information."
    ],

    answer: 2,

    explanation:
        "High engagement can show that content attracted attention, but it does not establish that the underlying claim was independently evaluated or verified. The stronger basis for credibility is traceable evidence, identifiable sources, appropriate context, and acknowledgment of limitations—not the number of people who shared or reacted to the post."
}
],


/* ======================================================
   INFLUENCE OF POPULARITY
====================================================== */

popularity: [

    {
        question:
            "A viral post claims that several public figures are involved in a major scam. It has thousands of shares and comments, and many users express confidence in the allegation. However, the post provides no original documents or identifiable evidence. What is the most defensible response?",

        choices: [
            "The claim is credible enough because widespread discussion suggests that many users have examined it.",
            "The claim should be dismissed because viral allegations about public figures are usually unreliable.",
            "The claim deserves attention, but its accuracy still depends on evidence that can be traced and independently checked.",
            "The comments provide useful confirmation because many users reached similar conclusions about the allegation."
        ],

        answer: 2,

        explanation:
            "Popularity can show that a claim has attracted attention, but it cannot establish its accuracy. The specific allegation still needs to be supported by identifiable and independently verifiable evidence.",

        image:
            "images/popularity1.jpg"
    },


    {
        question:
            "A widely shared post promotes a supposed healing method. Hundreds of commenters say that they tried it and experienced positive results, while the creator presents these comments as proof that the method works. No clinical research or qualified health source is provided. Which evidence should influence your judgment most?",

        choices: [
            "The number of positive experiences reported by users who tried the method.",
            "The confidence of the creator combined with the large amount of positive engagement.",
            "The consistency of comments from users who describe similar results.",
            "Independent evidence from qualified professionals, health organizations, or reliable research."
        ],

        answer: 3,

        explanation:
            "Personal experiences and engagement can make a health claim persuasive, but they cannot establish whether the method is medically effective. Independent professional or research-based evidence provides a stronger basis for evaluating the claim.",

        image:
            "images/popularity2.jpg"
    },


    /* ==================================================
       QUESTION 3
    ================================================== */

    {
        question:
            "A controversial post has received over 500,000 views and has been reposted by several large accounts. Another post has very little engagement but links to official records and explains the limits of the available evidence. A student argues that the viral post deserves more trust because more people have already seen it. How should this reasoning be evaluated?",

        choices: [
            "It is reasonable because widespread exposure increases the chance that inaccurate claims have been challenged.",
            "It is weak because the number of viewers shows reach, not whether the underlying claim was actually verified.",
            "It is convincing because large audiences provide a broader basis for judging whether information is accurate.",
            "It is partly valid because repeated attention can make a claim more reliable than information from smaller accounts."
        ],

        answer: 1,

        explanation:
            "The student's reasoning confuses visibility with verification. A claim can receive enormous attention without its evidence ever being examined. Audience size measures circulation, while credibility depends on the quality and verifiability of the supporting evidence."
    },


    /* ==================================================
       QUESTION 4
    ================================================== */

    {
        question:
            "A student sees a post claiming that a new government policy has already been implemented nationwide. The post has thousands of reactions, and most comments confidently support the claim. However, the student cannot find an official announcement confirming the policy. What is the most appropriate conclusion at this point?",

        choices: [
            "The claim is likely true because widespread public agreement suggests that the policy has already been confirmed.",
            "The claim is false because legitimate government policies should always appear on social media first.",
            "The claim remains uncertain and should be checked against appropriate official records before being accepted.",
            "The claim is probably accurate because users would likely correct a major policy error if enough people saw it."
        ],

        answer: 2,

        explanation:
            "High engagement and public agreement do not establish that a government policy exists. The lack of confirmation from an appropriate official source means the claim should not yet be accepted, but it also does not automatically prove that the claim is false."
    },


    /* ==================================================
       QUESTION 5
    ================================================== */

    {
        question:
            "Two posts make the same scientific claim. Post A has millions of views and thousands of comments but does not identify the original study. Post B has little engagement but links to the original research and explains that the findings have specific limitations. Which post provides the stronger basis for evaluating the claim?",

        choices: [
            "Post A, because extensive public attention makes it more likely that the claim has been examined.",
            "Post B, because its source can be traced and its interpretation can be compared with the actual research.",
            "Both posts, because popularity and source information provide different but equally useful forms of evidence.",
            "Post A, because scientific claims with high engagement are more likely to be noticed when they are inaccurate."
        ],

        answer: 1,

        explanation:
            "Post B provides a stronger basis for evaluation because the original research can be examined directly. Its limited engagement does not weaken the evidentiary value of a traceable source, while Post A's popularity only demonstrates how widely the claim circulated."
    }


],


/* ======================================================
   CROSS-CHECKING
====================================================== */

cross: [

    {
        question:
    "A Philstar Fact Check post reports that an AI-generated photo falsely depicts Vice President Sara Duterte giving food packs. If you want to determine whether the claim is credible, which sequence of actions is strongest?",

        choices: [
            "Check the reactions and comments first, then accept the claim if most users agree that the photo looks real.",
            "Trace the original source of the image and claim, check the date and context, compare the evidence with the fact-check, and confirm the finding using another credible source.",
            "Look for other posts using the same photo and treat the repeated use of the image as evidence that the event really happened.",
            "Focus on the quality and realism of the photo, since a professionally presented image is more likely to represent an actual event."
        ],

        answer: 1,

        explanation:
            "Strong cross-checking goes beyond how convincing or popular a post appears. Trace the original source, examine the date and context, compare the available evidence with the fact-check, and confirm the finding using another credible and independent source.",

        image:
            "images/source.png"
    },


    /* ==================================================
       QUESTION 2
    ================================================== */

    {
        question:
            "A viral video claims that a recent event occurred and has more than 1.2 million views. Six other accounts repeat the same claim, but five of them copied the original video and caption, while the sixth refers to the same unidentified source. What should this pattern tell you about the claim?",

        choices: [
            "The claim is stronger because several accounts have independently chosen to report the same event.",
            "The claim is weaker because repeated posts may reflect the same source rather than separate confirmation.",
            "The claim is probably false because unidentified sources cannot provide useful information about an event.",
            "The claim is more credible because the large number of views suggests that many users have checked the video."
        ],

        answer: 1,

        explanation:
            "The number of accounts does not necessarily indicate independent confirmation. If the posts ultimately rely on the same source, they represent repeated circulation of the same information rather than separate evidence.",

        image:
            "images/social.jpeg"
    },


    /* ==================================================
       QUESTION 3
    ================================================== */

    {
        question:
            "A post claims that a government agency recently changed a policy. Three news articles appear to support the claim, but all three were published after quoting the same social media post. An older official document describes a different policy. Which step would best clarify the conflict?",

        choices: [
            "Compare the wording of the three articles to see whether their agreement provides enough support for the claim.",
            "Use the newest article because recent reporting is more likely to reflect the agency's current position.",
            "Check the official document's date and scope, then look for a later announcement that may have changed the policy.",
            "Compare the social media post with the three articles to determine whether their descriptions of the policy are consistent."
        ],

        answer: 2,

        explanation:
            "The three articles are not independent confirmation if they all rely on the same social media post. The older official document also needs to be placed in its proper timeline and compared with any newer official announcement.",

        // NO IMAGE
    },


    /* ==================================================
       QUESTION 4
    ================================================== */

    {
        question:
            "A viral post states, '80% OF STUDENTS SUPPORT THE NEW POLICY.' You locate the original survey and confirm that the 80% figure is correct. However, the survey included only 200 students from one school, while the post presents the result as representing students nationwide. How should the claim be evaluated?",

        choices: [
            "The claim is supported because the percentage in the post matches the percentage in the original survey.",
            "The survey is unreliable because 200 respondents are too few to provide any meaningful information.",
            "The claim may be valid for the surveyed students but requires further evidence to represent students nationwide.",
            "The nationwide claim becomes stronger if other students online express similar opinions about the policy."
        ],

        answer: 2,

        explanation:
            "Confirming the percentage does not automatically confirm the broader interpretation. The survey may accurately describe its participants while still being insufficient to support a nationwide conclusion.",

        // NO IMAGE
    },


    /* ==================================================
       QUESTION 5
    ================================================== */

    {
        question:
            "Two reports describe the same breaking-news event but disagree about several details. Report A was published first and relies on an eyewitness post. Report B appeared several hours later and cites an official statement that confirms some details but contradicts others. What is the best way to evaluate the conflicting reports?",

        choices: [
            "Prefer Report B because an official statement automatically makes every detail more reliable.",
            "Prefer Report A because eyewitness information was collected closer to the event.",
            "Choose the version that received more public support after comparing the reactions to both reports.",
            "Examine each disputed detail using the timing, source, and later evidence before deciding what is supported."
        ],

        answer: 3,

        explanation:
            "Neither source type nor publication order automatically settles every disagreement. Each detail should be evaluated using the circumstances in which it was reported, the reliability of the source, and whether later evidence confirms or contradicts it.",

        // NO IMAGE
    }

]

};


/* ==========================================================
   TOPIC NAMES
========================================================== */

const topicNames = {

    ai: "AI-Generated Content",

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

        questionImage.innerHTML = "";

        const image =
            document.createElement("img");

        image.src =
            question.image;

        image.alt =
            "Activity question image";

        /* ==============================================
           INDIVIDUAL IMAGE CLASS BASED ON FILE NAME
        ============================================== */

        const imageName =
            question.image
                .split("/")
                .pop()
                .split(".")[0]
                .toLowerCase();

        image.classList.add(
            "activity-image"
        );

        if (imageName === "digital") {

            image.classList.add(
                "image-digital"
            );

        }

        else if (imageName === "ai-text") {

            image.classList.add(
                "image-ai-text"
            );

        }

        else if (imageName === "clickbait") {

            image.classList.add(
                "image-clickbait"
            );

        }

        else if (imageName === "popularity1") {

            image.classList.add(
                "image-popularity1"
            );

        }

        else if (imageName === "popularity2") {

            image.classList.add(
                "image-popularity2"
            );

        }

        else if (imageName === "source") {

            image.classList.add(
                "image-source"
            );

        }

        else if (imageName === "social") {

            image.classList.add(
                "image-social"
            );

        }

        questionImage.appendChild(
            image
        );

        questionImage.style.display =
            "block";

    }

    else {

        /* ==============================================
           NO IMAGE
           COMPLETELY HIDE THE IMAGE CONTAINER
        ============================================== */

        questionImage.innerHTML = "";

        questionImage.style.display =
            "none";

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