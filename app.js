// ==========================================================================
// 1. ROADMAP DATA
// ==========================================================================

const dataAnalyticsTasks = [
    {
        number: "Task 01",
        day: "Day 01",
        title: "Data Cleaning Basics",
        description: "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.",
        difficulty: "Beginner",
        badgeClass: "phase-beginner"
    },
    {
        number: "Task 02",
        day: "Day 04",
        title: "Formulas & Pivot Tables",
        description: "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.",
        difficulty: "Beginner",
        badgeClass: "phase-beginner"
    },
    {
        number: "Task 03",
        day: "Day 08",
        title: "Data Visualization",
        description: "Create charts and a simple dashboard that communicate useful insights from a dataset.",
        difficulty: "Beginner → Intermediate",
        badgeClass: "phase-intermediate-bg"
    },
    {
        number: "Task 04",
        day: "Day 11",
        title: "Introduction to SQL",
        description: "Practice basic SQL queries and use them to answer real-world questions about data.",
        difficulty: "Beginner → Intermediate",
        badgeClass: "phase-intermediate-bg"
    },
    {
        number: "Task 05",
        day: "Day 15",
        title: "SQL Joins & Aggregations",
        description: "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    },
    {
        number: "Task 06",
        day: "Day 19",
        title: "Lookup Functions & Data Wrangling",
        description: "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    },
    {
        number: "Task 07",
        day: "Day 22",
        title: "Mini Analysis Project",
        description: "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    },
    {
        number: "Task 08",
        day: "Day 26",
        title: "Capstone Project",
        description: "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    }
];


const webDevTasks = [
    {
        number: "Task 01",
        day: "Day 01",
        title: "Build the TechBridge Homepage",
        description: "Create the first version of the TechBridge website using HTML and CSS.",
        difficulty: "Beginner",
        badgeClass: "phase-beginner"
    },
    {
        number: "Task 02",
        day: "Day 04",
        title: "Build the TechBridge Programs Experience",
        description: "Create a Programs experience presenting TechBridge's available learning programs.",
        difficulty: "Beginner",
        badgeClass: "phase-beginner"
    },
    {
        number: "Task 03",
        day: "Day 08",
        title: "Build the Internship Tasks Experience",
        description: "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.",
        difficulty: "Beginner → Intermediate",
        badgeClass: "phase-intermediate-bg"
    },
    {
        number: "Task 04",
        day: "Day 11",
        title: "Build an Interactive Internship Roadmap",
        description: "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.",
        difficulty: "Beginner → Intermediate",
        badgeClass: "phase-intermediate-bg"
    },
    {
        number: "Task 05",
        day: "Day 15",
        title: "Build the Intern Registration Experience",
        description: "Create a professional registration and onboarding interface for TechBridge interns.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    },
    {
        number: "Task 06",
        day: "Day 19",
        title: "Build the Task Submission System",
        description: "Create an interface through which interns can prepare and submit their task work.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    },
    {
        number: "Task 07",
        day: "Day 22",
        title: "Build the Intern Dashboard",
        description: "Create a dashboard where an intern can view their profile, progress, tasks and submissions.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    },
    {
        number: "Task 08",
        day: "Day 26",
        title: "Build the Complete TechBridge Internship Platform",
        description: "Combine the different components created during the internship into a complete TechBridge platform.",
        difficulty: "Intermediate",
        badgeClass: "phase-intermediate"
    }
];


// ==========================================================================
// 2. CHALLENGE HUB DATA
// ==========================================================================

const challengesData = [
    {
        id: "DA-CH-01",
        name: "E-Commerce Sales Performance Analysis",
        track: "analytics",
        trackLabel: "Data Analytics",
        difficulty: "Beginner",
        shortDesc: "Audit and parse unorganized multi-channel retail spreadsheets to calculate core merchant revenue vectors.",
        outcome: "A formatted spreadsheet workbook with clean data fields and fundamental total sales KPIs metrics.",
        objective: "Isolate duplicate transactional entries, standardize geographical records, and apply elementary structural pivot matrices to expose profit leaks.",
        skills: "Data Formatting, Baseline Aggregations, Tabular Row Auditing",
        tools: "Microsoft Excel / Google Sheets",
        timeEstimation: "2-3 Hours"
    },
    {
        id: "DA-CH-02",
        name: "Corporate Financial Insight Dashboard",
        track: "analytics",
        trackLabel: "Data Analytics",
        difficulty: "Intermediate",
        shortDesc: "Synthesize operational business parameters into unified visualizations to map recurring seasonal patterns.",
        outcome: "An interactive analytical report dashboard charting target corporate profitability indicators.",
        objective: "Design interconnected operational visualizations displaying historical product trend variances across fiscal quarters.",
        skills: "Data Relationships, Component Plotting, UI Visualization Hierarchies",
        tools: "Power BI / Tableau / Advanced Charts",
        timeEstimation: "4-5 Hours"
    },
    {
        id: "DA-CH-03",
        name: "SaaS Subscriber Customer Churn Analytics",
        track: "analytics",
        trackLabel: "Data Analytics",
        difficulty: "Advanced",
        shortDesc: "Construct high-level relational query structures to calculate user expiration vectors and behavior patterns.",
        outcome: "A detailed database diagnostic query report documenting explicit customer drop-off causes.",
        objective: "Write multi-level JOIN operations and advanced aggregate groupings to isolate user attrition risk correlations across demographic datasets.",
        skills: "Relational Queries, Complex Subqueries, Sub-Data Intersect Filtering",
        tools: "PostgreSQL / MySQL Workbenches",
        timeEstimation: "6-8 Hours"
    },
    {
        id: "WD-CH-01",
        name: "Premium Conversion Landing Page",
        track: "webdev",
        trackLabel: "Web Development",
        difficulty: "Beginner",
        shortDesc: "Construct an optimized responsive layout layer utilizing clean, modern structure conventions.",
        outcome: "A semantic frontend interface that remains stable across varying screen dimensions.",
        objective: "Translate high-fidelity user layouts into compliant markup, managing typographic scales and grid system alignments natively.",
        skills: "Semantic Elements, Media Queries, CSS Grid Layout Architectures",
        tools: "HTML5, CSS3, Visual Studio Code",
        timeEstimation: "3-4 Hours"
    },
    {
        id: "WD-CH-02",
        name: "Dynamic Portfolio Web Application",
        track: "webdev",
        trackLabel: "Web Development",
        difficulty: "Intermediate",
        shortDesc: "Develop a client-side tracking node utilizing operational state mechanics and click interaction listeners.",
        outcome: "An interactive application project workspace displaying filterable component elements.",
        objective: "Inject state items using arrays of data structures, binding event controls to animate node displays instantly without refetching pages.",
        skills: "Event Framework Observers, Array Loops, Dynamic Element Projection",
        tools: "Vanilla Javascript Core ES6, DOM Objects",
        timeEstimation: "5-6 Hours"
    },
    {
        id: "WD-CH-03",
        name: "E-Commerce Checkout Portal Interface",
        track: "webdev",
        trackLabel: "Web Development",
        difficulty: "Advanced",
        shortDesc: "Build an asynchronous payload workflow mechanism managing user input verification structures.",
        outcome: "A checkout tracking console validating field criteria inputs before firing dispatch callbacks.",
        objective: "Map robust regular expression form testing logic to catch missing parameters and display live UI inline validation cues dynamically.",
        skills: "Form Telemetry Testing, Inline State Tracking, Callback Execution",
        tools: "Advanced JS Object APIs, CSS Forms",
        timeEstimation: "8-10 Hours"
    }
];


// ==========================================================================
// 3. STATE
// ==========================================================================

let currentTrack = "webdev";
let filterActiveTrack = "all";
let filterActiveDifficulty = "all";


// ==========================================================================
// 4. APP INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

    const roadmapRoot = document.getElementById("roadmap-root");
    const currentTrackTitle = document.getElementById("current-track-title");

    const btnWebdev = document.getElementById("btn-webdev");
    const btnData = document.getElementById("btn-data");

    const challengesContainer =
        document.getElementById("challenges-container");

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    // ======================================================================
    // ROADMAP RENDERING
    // ======================================================================

    function renderRoadmap(track) {

        const tasks =
            track === "webdev"
                ? webDevTasks
                : dataAnalyticsTasks;

        roadmapRoot.innerHTML = "";

        tasks.forEach((task) => {

            const taskCard = document.createElement("div");

            taskCard.classList.add("timeline-item");

            taskCard.innerHTML = `
                <div class="timeline-marker"></div>

                <div class="task-card">
                    <div class="task-header">
                        <div>
                            <span class="task-number">${task.number}</span>
                            <span class="task-day">${task.day}</span>
                        </div>

                        <span class="${task.badgeClass}">
                            ${task.difficulty}
                        </span>
                    </div>

                    <h3>${task.title}</h3>

                    <p>${task.description}</p>
                </div>
            `;

            roadmapRoot.appendChild(taskCard);
        });
    }


    // ======================================================================
    // TRACK SWITCHING
    // ======================================================================

    function switchTrack(track) {

        currentTrack = track;

        if (track === "webdev") {

            currentTrackTitle.textContent =
                "WEB DEVELOPMENT";

            btnWebdev.classList.add("active");
            btnData.classList.remove("active");

        } else {

            currentTrackTitle.textContent =
                "DATA ANALYTICS";

            btnData.classList.add("active");
            btnWebdev.classList.remove("active");
        }

        renderRoadmap(track);
    }


    btnWebdev.addEventListener("click", () => {
        switchTrack("webdev");
    });


    btnData.addEventListener("click", () => {
        switchTrack("analytics");
    });


    // ======================================================================
    // CHALLENGE HUB
    // ======================================================================

    function renderChallenges() {

        const filteredChallenges =
            challengesData.filter((challenge) => {

                const trackMatches =
                    filterActiveTrack === "all" ||
                    challenge.track === filterActiveTrack;

                const difficultyMatches =
                    filterActiveDifficulty === "all" ||
                    challenge.difficulty === filterActiveDifficulty;

                return trackMatches && difficultyMatches;
            });


        challengesContainer.innerHTML = "";


        if (filteredChallenges.length === 0) {

            challengesContainer.innerHTML = `
                <p class="no-challenges">
                    No challenges match these filters.
                </p>
            `;

            return;
        }


        filteredChallenges.forEach((challenge) => {

            const card = document.createElement("div");

            card.classList.add("challenge-card");

            card.innerHTML = `
                <div class="challenge-card-header">
                    <span class="challenge-id">
                        ${challenge.id}
                    </span>

                    <span class="challenge-difficulty">
                        ${challenge.difficulty}
                    </span>
                </div>

                <span class="challenge-track">
                    ${challenge.trackLabel}
                </span>

                <h3>${challenge.name}</h3>

                <p>${challenge.shortDesc}</p>

                <div class="challenge-details">

                    <p>
                        <strong>Objective:</strong>
                        ${challenge.objective}
                    </p>

                    <p>
                        <strong>Expected Outcome:</strong>
                        ${challenge.outcome}
                    </p>

                    <p>
                        <strong>Skills:</strong>
                        ${challenge.skills}
                    </p>

                    <p>
                        <strong>Tools:</strong>
                        ${challenge.tools}
                    </p>

                    <p>
                        <strong>Estimated Time:</strong>
                        ${challenge.timeEstimation}
                    </p>

                </div>
            `;

            challengesContainer.appendChild(card);
        });
    }


    // ======================================================================
    // CHALLENGE FILTER BUTTONS
    // ======================================================================

    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const filterType =
                button.dataset.filterType;

            const value =
                button.dataset.value;


            // TRACK FILTER
            if (filterType === "track") {

                filterActiveTrack = value;

                document
                    .querySelectorAll(
                        '[data-filter-type="track"]'
                    )
                    .forEach((btn) => {
                        btn.classList.remove("active");
                    });

                button.classList.add("active");
            }


            // DIFFICULTY FILTER
            if (filterType === "difficulty") {

                filterActiveDifficulty = value;

                document
                    .querySelectorAll(
                        '[data-filter-type="difficulty"]'
                    )
                    .forEach((btn) => {
                        btn.classList.remove("active");
                    });

                button.classList.add("active");
            }


            renderChallenges();
        });
    });


    // ======================================================================
    // INITIAL PAGE RENDER
    // ======================================================================

    switchTrack(currentTrack);
    renderChallenges();

});