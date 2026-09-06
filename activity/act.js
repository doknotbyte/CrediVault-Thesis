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
            "A student posts an AI-generated image showing a supposed disaster in a familiar city. Several details look convincing, but the shadows, faces, and emergency signs appear unusual. A local news page has not reported the event. What should you conclude at this stage?",
        choices: [
            "The image is probably false because AI-generated images commonly contain unusual details.",
            "The claim remains unverified until the image and event can be supported by independent evidence.",
            "The image can still be accepted because unusual visual details do not necessarily affect the event being shown.",
            "The absence of a news report is enough to establish that the event shown in the image never occurred."
        ],
        answer: 1,
        explanation:
            "Suspicious visual details are reasons to investigate, not automatic proof that an image is fake. The strongest conclusion is that the claim remains unverified until reliable independent evidence supports it."
    },
    


    /* ==================================================
       QUESTION 4
    ================================================== */

    {
        question:
            "You find two versions of a photo showing the same supposed political event. One version contains a large crowd, while another has noticeably fewer people. Both versions are being shared as evidence of the same event. What should you investigate first?",
        choices: [
            "Determine which version receives more engagement before deciding which image is more trustworthy.",
            "Compare the image quality and choose the version with clearer details and fewer visible distortions.",
            "Trace both versions to their earliest available sources and determine whether either image was edited.",
            "Use the version shared by established accounts because reputable users are less likely to post altered images."
        ],
        answer: 2,
        explanation:
            "Different versions of the same image require source tracing and comparison. Identifying the earliest source and checking for alterations is more reliable than using popularity, image quality, or the reputation of the account alone."
    },


    /* ==================================================
       QUESTION 5
    ================================================== */

    {
        question:
            "An AI-generated video appears to show a public figure making a controversial statement. The speaker's face and voice look convincing, but the video has no identifiable original source. Another post provides a longer version with slightly different wording. Which approach is strongest?",
        choices: [
            "Compare the videos with verified recordings or statements from reliable sources and examine whether the original footage exists.",
            "Accept the longer video because additional footage generally provides more context than a shorter edited clip.",
            "Treat the statement as authentic unless experts publicly identify the video as AI-generated or manipulated.",
            "Use the version with more views because widespread attention makes major manipulated claims easier to detect."
        ],
        answer: 0,
        explanation:
            "Convincing faces and voices are not sufficient evidence of authenticity. Comparing the footage with verified recordings or statements and tracing the original source provides a stronger basis for evaluating the claim."
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
       NEW CLICKBAIT QUESTION 2
    ================================================== */

    {
        question:
            "You see a widely shared post with the headline \"SHOCKING NEW GOVERNMENT RULE WILL CHANGE THE LIVES OF EVERY FILIPINO!\" When you read the article, you discover that the policy only applies to a specific program and a limited group of people. What is the strongest reason the headline should be treated cautiously?",

        choices: [
            "The post has many reactions and shares, which automatically makes it unreliable.",

            "The headline exaggerates the scope of the information and creates an impression that the article does not actually support.",

            "Government policies should not be discussed on social media.",

            "Capital letters automatically make a headline misleading."
        ],

        answer: 1,

        explanation:
            "The headline exaggerates the scope of the policy by making it appear that every Filipino will be affected, even though the article only applies it to a specific program and limited group. This mismatch between the headline and the actual information is a warning sign of clickbait."

    },


    /* ==================================================
       NEW CLICKBAIT QUESTION 3
    ================================================== */

    {
        question:
            "A post claims that \"DOCTORS ARE WARNING ABOUT THIS EVERYDAY HABIT\" but does not identify the habit in the headline. The linked article discusses a preliminary study under specific conditions, while the post presents the findings as proof that the habit is dangerous for everyone. What should you do to properly evaluate the claim?",

        choices: [
            "Trust it because the post refers to doctors and scientific research.",

            "Share it with others while warning them that the study may be important.",

            "Examine the original study, its limitations, and whether it supports the broader claim made by the post.",

            "Reject it immediately because curiosity-based headlines are always false."
        ],

        answer: 2,

        explanation:
            "The post makes a broader claim than what the preliminary study actually establishes. You should examine the original study, its limitations, and whether the evidence really supports the broader claim made by the social media post."

    },


    /* ==================================================
       NEW CLICKBAIT QUESTION 4
    ================================================== */

    {
        question:
            "A post titled \"THE TRUTH THEY DON'T WANT YOU TO KNOW!\" has thousands of shares but provides no identifiable sources, while another post with fewer interactions links to an original report and explains the evidence and its limitations. Although the first post appears more convincing because of its popularity, you need to determine which information is more credible. What is the best approach?",

        choices: [
            "Trust the first post because more people have shared it.",

            "Trust the second post because posts with fewer interactions are usually accurate.",

            "Compare the sources, evidence, and context instead of using popularity or engagement as proof of accuracy.",

            "Trust the first post because strong emotional reactions indicate important information."
        ],

        answer: 2,

        explanation:
            "Popularity and emotional reactions do not prove that information is accurate. The better approach is to compare the sources, examine the evidence, and consider the context before deciding which information is more credible."

    }

],


/* ======================================================
   INFLUENCE OF POPULARITY
====================================================== */

popularity: [

    {
        question:
            "A viral post claims that several public figures are involved in a major scam. The post has thousands of shares and many comments, but it provides no clear evidence or reliable source. What is the most appropriate way to evaluate the claim?",

        choices: [
            "Consider the claim credible because many people have already shared and discussed it.",
            "Assume the claim is false because viral posts about public figures are usually misleading.",
            "Treat the popularity as evidence that the claim deserves attention, but verify the specific allegation using reliable sources and supporting evidence.",
            "Accept the claim if several comments describe similar experiences, even if they do not provide independent evidence."
        ],

        answer: 2,

        explanation:
            "High engagement shows that the claim has attracted attention, but it does not prove that the claim is accurate. A responsible evaluation requires checking reliable sources, looking for supporting evidence, and determining whether the information comes from independent and credible reporting.",

        image:
            "images/popularity1.jpg"
    },


    {
        question:
            "A widely shared post promotes a supposed healing method and shows a large number of reactions and comments from people who claim it worked for them. Which factor should carry the most weight when deciding whether the health claim is trustworthy?",

        choices: [
            "The number of people who reacted positively because widespread agreement suggests that the method is effective.",
            "The personal experiences in the comments because real users can provide stronger evidence than professional sources.",
            "The popularity of the post together with the confidence of the person presenting it.",
            "Evidence from qualified health professionals, credible health organizations, or reliable research that independently supports the claim."
        ],

        answer: 3,

        explanation:
            "Personal experiences, positive comments, and high engagement can make a health claim appear convincing, but they do not establish that the claim is medically reliable. Stronger evidence comes from qualified professionals, credible health organizations, and research that can independently support the claim.",

        image:
            "images/popularity2.jpg"
    },


    /* ==================================================
       QUESTION 3
    ================================================== */

    {
        question:
            "A social media post about a controversial issue has received over 500,000 views and is being repeatedly reposted. Another post from a less-followed account provides links to official records and explains limitations in the available evidence. Which approach best demonstrates responsible evaluation?",

        choices: [
            "Prioritize the viral post because a large number of views indicates that the information has already been widely examined.",
            "Give greater weight to the less-popular post if its evidence can be independently checked, regardless of the difference in engagement.",
            "Compare the number of views and comments first, then accept whichever post has stronger public agreement.",
            "Treat both posts as equally credible because popularity and evidence are separate forms of public validation."
        ],

        answer: 1,

        explanation:
            "Popularity measures how widely information has circulated, not whether it is accurate. Evidence should be evaluated based on its quality, relevance, source, and whether it can be independently verified. A less-popular post may still provide stronger support for a claim.",

    },


    /* ==================================================
       QUESTION 4
    ================================================== */

    {
        question:
            "A student sees a post claiming that a new government policy has already been implemented nationwide. The post has thousands of reactions, while most comments express confidence that the claim is true. However, the student cannot find the policy on the official government website. What should the student conclude?",

        choices: [
            "The claim is probably accurate because a large number of users would likely notice if the information were completely wrong.",
            "The claim should be accepted temporarily because public agreement can serve as preliminary confirmation.",
            "The engagement should not be treated as proof; the student should verify whether an official government source confirms the policy before accepting the claim.",
            "The claim is definitely false because information that is not immediately available on social media cannot be considered reliable."
        ],

        answer: 2,

        explanation:
            "Public agreement and high engagement do not replace primary-source verification. When a post makes a specific claim about a government policy, checking an appropriate official source is more reliable than relying on reactions, comments, or the number of people repeating the claim.",

    },


    /* ==================================================
       QUESTION 5
    ================================================== */

    {
        question:
            "Two posts make the same scientific claim. Post A has millions of views and thousands of comments but cites no original study. Post B has far fewer interactions but links to the original research and explains where the findings may not apply. Which conclusion is most justified?",

        choices: [
            "Post A is more trustworthy because widespread exposure increases the likelihood that inaccurate information would have been corrected.",
            "Post B deserves closer consideration because the presence of traceable evidence allows the claim to be evaluated beyond its popularity.",
            "Both posts should be considered equally reliable because neither the number of interactions nor the presence of a source can establish accuracy by itself.",
            "Post A should be preferred because scientific information becomes more credible when it receives strong public engagement."
        ],

        answer: 1,

        explanation:
            "Popularity is a measure of reach and engagement, not a measure of truth. Post B provides traceable evidence and acknowledges the limits of the research, allowing readers to examine whether the claim is actually supported. Responsible evaluation focuses on evidence and source quality rather than audience size.",

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
        },

/* ==================================================
   QUESTION 3
================================================== */

{
    question:
        "A post claims that a government agency recently changed a policy. You find three articles supporting the claim, but all three were published after quoting the same social media post. You also find an older official document that appears to describe a different policy. What should you examine first?",

    choices: [
        "Look at how closely the three articles agree before deciding whether their accounts provide sufficient confirmation.",
        "Check the official document's date, scope, and whether a newer announcement has replaced or modified the policy it describes.",
        "Compare the publication dates of the articles and use the most recent report as the strongest indication of what happened.",
        "Trace the claim back to the social media post and determine whether its details explain the similarities among the three reports."
    ],

    answer: 1,

    explanation:
        "The three articles do not necessarily provide independent confirmation because they rely on the same original post. The older official document must also be checked for its date, scope, and possible replacement by a newer official announcement. Cross-checking requires examining the relationship between sources and determining which evidence is authoritative and current.",

    // NO IMAGE
},


/* ==================================================
   QUESTION 4
================================================== */

{
    question:
        "A viral post presents a statistic claiming that '80% of students support the new policy.' When you search for the figure, you find a survey with the same percentage, but the original report states that only 200 students from one school participated. What is the most defensible evaluation of the post?",

    choices: [
        "The figure has limited value because the survey involved only 200 respondents and therefore cannot represent student opinions at all.",
        "Since the percentage matches the original report, the post is supported even if it leaves out information about the participants.",
        "It may be accurate for the surveyed students, but applying the result to students more broadly requires evidence that the sample supports that conclusion.",
        "Similar reactions from students on social media would make the reported percentage more convincing as an estimate of wider student opinion."
    ],

    answer: 2,

    explanation:
        "Cross-checking involves more than confirming whether a number appears in an original source. The scope and methodology of the source must also be considered. A statistic may accurately describe the surveyed participants while still being misleading when generalized to a much larger population.",

    // NO IMAGE
},


/* ==================================================
   QUESTION 5
================================================== */

{
    question:
        "Two reports describe the same breaking-news event but provide different details about what happened. Report A cites an eyewitness post, while Report B cites an official statement released several hours later. You also discover that Report A was published before the official statement was available. Which evaluation is most appropriate?",

    choices: [
        "Give greater weight to Report B simply because an official statement was eventually released by the agency involved.",
        "Report A may still contain useful information, particularly if its eyewitness account includes details that the later statement does not address.",
        "The timing and source of each report should be considered together, including whether later information confirms, clarifies, or contradicts the earlier account.",
        "Public reaction can help resolve the disagreement when readers have enough time to compare which version appears more convincing."
    ],

    answer: 2,

    explanation:
        "Conflicting information should be evaluated in context rather than decided through popularity or publication order alone. The timing of each report, the type of source used, and whether later information clarifies or changes the earlier account are important when assessing which details are better supported.",

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