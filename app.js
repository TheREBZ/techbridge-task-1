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
//  STATE MANAGER
// ==========================================================================
let currentTrack = "webdev"; // Track tracking variable state value

const roadmapRoot = document.getElementById("roadmap-root");
const currentTrackTitle = document.getElementById("current-track-title");
const btnWebdev = document.getElementById("btn-webdev");
const btnData = document.getElementById("btn-data");

// ==========================================================================
//  CORE FUNCTIONS (DOM MANIPULATION & LOGIC RENDERERS)
// ==========================================================================
function renderRoadmap(taskArray) {
    // Clears the card container matrix cleanly
    roadmapRoot.innerHTML = "";
    
    taskArray.forEach(task => {
        const cardHTML = `
            <div class="timeline-card">
                <div class="timeline-badge ${task.badgeClass}">${task.difficulty}</div>
                <div class="timeline-meta">
                    <span class="task-number">${task.number}</span>
                    <span class="task-day">${task.day}</span>
                </div>
                <h2>${task.title}</h2>
                <p>${task.description}</p>
            </div>
        `;
        roadmapRoot.insertAdjacentHTML("beforeend", cardHTML);
    });
}

function switchTrack(trackName) {
    // Coditional logic control module to determine current state rendering route
    if (trackName === "webdev") {
        currentTrack = "webdev";
        currentTrackTitle.textContent = "WEB DEVELOPMENT";
        btnWebdev.classList.add("active");
        btnData.classList.remove("active");
        renderRoadmap(webDevTasks);
    } else {
        currentTrack = "data";
        currentTrackTitle.textContent = "DATA ANALYTICS";
        btnData.classList.add("active");
        btnWebdev.classList.remove("active");
        renderRoadmap(dataAnalyticsTasks);
    }
}

// ==========================================================================
//  ATTACH INTERACTIVE INTERFACE EVENT LISTENERS
// ==========================================================================
btnWebdev.addEventListener("click", () => switchTrack("webdev"));
btnData.addEventListener("click", () => switchTrack("data"));

document.addEventListener("DOMContentLoaded", () => {
    switchTrack("webdev");
});
