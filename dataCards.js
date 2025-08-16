let pathLogos = [
  "assets/images/logo-devlens.svg",
  "assets/images/logo-style-spy.svg",
  "assets/images/logo-speed-boost.svg",
  "assets/images/logo-json-wizard.svg",
  "assets/images/logo-tab-master-pro.svg",
  "assets/images/logo-viewport-buddy.svg",
  "assets/images/logo-markup-notes.svg",
  "assets/images/logo-grid-guides.svg",
  "assets/images/logo-palette-picker.svg",
  "assets/images/logo-link-checker.svg",
  "assets/images/logo-dom-snapshot.svg",
  "assets/images/logo-console-plus.svg",
];

let Titles = [
  "DevLens",
  "StyleSpy",
  "SpeedBoost",
  "JSONWizard",
  "TabMaster Pro",
  "ViewportBuddy",
  "Markup Notes",
  "GridGuides",
  "Palette Picker",
  "LinkChecker",
  "DOM Snapshot",
  "ConsolePlus",
];

let Info = [
  "Quickly inspect page layouts and visualize element boundaries.",
  "Instantly analyze and copy CSS from any webpage elements.",
  "Optimize browser resource usage to accelerate page loading.",
  "Formats, validates, and prettifies JSON responses in browser.",
  "Organizes browser tabs into grouped sessions.",
  "Simulates various screen resolutions directly within the browser.",
  "Enables annotation and notes directly on webpages for collaborative debugging.",
  "Overlay customizable grids and alignment guides on any webpage.",
  "Instantly extracts color palettes from any webpage.",
  "Scans and highlights broken links on any webpage.",
  "Capture and export DOM structures quickly.",
  "Enhanced developer console with advanced logging and debugging.",
];

let active = [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1];

let AllCards = new Map();

for (let index = 0; index < Info.length; index++) {
  const element = new Card(
    index,
    pathLogos[index],
    Titles[index],
    Info[index],
    active[index]
  );
  AllCards.set(index, element);
}

function BuildCardsSection(sectionId) {
  //Build all cards in the this section
  AllCards.forEach(function (value, key) {
    if (sectionId === "active") {
      if (value.active === 1) {
        value.BuildInDOM(sectionId);
        toggleCards(sectionId);
      }
    } else if (sectionId === "passive") {
      if (value.active === 0) {
        value.BuildInDOM(sectionId);
        toggleCards(sectionId);
      }
    } else {
      value.BuildInDOM(sectionId);
      toggleCards(sectionId);
    }
  });

  //Implemnation for deletting cards
  document.querySelectorAll(".btnText").forEach((btn) => {
    btn.addEventListener("click", () => {
      DeleteCard(btn);
    });
  });
}

//Removes all cards from DOM
function CleanDOM_Sections() {
  let sections = document.getElementsByTagName("section");
  sections[0].innerHTML = "";
  sections[1].innerHTML = "";
  sections[2].innerHTML = "";
}
//Removes a specific card from the DOM and the AllCards Map
function DeleteCard(btn) {
  id = btn.parentElement.parentElement.id; //Get id of card
  AllCards.delete(parseInt(id)); //Remove card from AllCards Map
  let card = btn.parentElement.parentElement; //Get card element
  card.remove();
}

// This function toggles the state of cards between active and passive
function toggleCards(sectionId = "all") {
  //Get all sections, and determine which section to target based on the sectionId
  let sections = document.getElementsByTagName("section");
  let section;
  // Determine which section to target based on the sectionId
  if (sectionId === "all") section = sections[0];
  else if (sectionId === "active") section = sections[1];
  else if (sectionId === "passive") section = sections[2];
  // Current section is determined, now we can add event listeners to toggle buttons
  let toggleBtns = section.querySelectorAll(".toggle-btn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", ToggleStyle);
  });
}

// This funcition handles the style and state changes of the toggle button
function ToggleStyle(event) {
  let button = event.currentTarget;
  let rootCard = button.closest(".card");
  let cardId = parseInt(rootCard.id);

  if (button.classList.contains("bg-red-700")) {
    button.classList.remove("bg-red-700");
    button.classList.remove("hover:bg-red-500");
    button.classList.remove("dark:bg-red-400");
  } else {
    button.classList.add("bg-red-700");
    button.classList.add("hover:bg-red-500");
    button.classList.add("dark:bg-red-400");
  }

  let circle = button.querySelector(".toggle-circle");

  if (circle.classList.contains("ison")) {
    circle.classList.remove("ison");
    AllCards.get(cardId).active = 0; // Turn off extenision
  } else {
    circle.classList.add("ison");
    AllCards.get(cardId).active = 1; // Turn on extenision
  }
}

let filterContainerElement = document.querySelector(".filter-container");
const btnPassive = filterContainerElement.getElementsByTagName("button")[2];
const btnActive = filterContainerElement.getElementsByTagName("button")[1];
const btnAll = filterContainerElement.getElementsByTagName("button")[0];
