
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
    "assets/images/logo-console-plus.svg"
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
    "ConsolePlus"
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
    "Enhanced developer console with advanced logging and debugging."
];

let active = [
    1, 1, 1, 1,
    0, 0, 0, 0,
    1, 0, 1, 0
];

let AllCards = [];


for (let index = 0; index < Info.length; index++) {
    const element = new Card(pathLogos[index], Titles[index], Info[index],active[index]);
    element.BuildInDOM();
    AllCards.push(element);
}
