let filterContainerElement = document.querySelector(".filter-container");
const btnPassive = filterContainerElement.getElementsByTagName("button")[2];
const btnActive = filterContainerElement.getElementsByTagName("button")[1];
const btnAll = filterContainerElement.getElementsByTagName("button")[0];
//Adds event listner for Toggle buttons and what needed for section
btnActive.addEventListener("click", () => {
  btnPassive.classList.remove("filter-btn-active");
  btnAll.classList.remove("filter-btn-active");

  //Clear all html from section before adding new cards
  CleanDOM("passive");
  CleanDOM("all");
  CleanDOM("active");

  //remove hidden frorm seciton Active and add active class to btnActive
  let sectionActive = document.getElementsByTagName("section")[1];
  let sectionPassive = document.getElementsByTagName("section")[2];
  sectionActive.classList.remove("hidden");
  sectionPassive.classList.add("hidden");

  // add active to this class
  btnActive.classList.add("filter-btn-active");

  //remove hidden to this class
  let sectionAll = document.getElementsByTagName("section")[0];
  sectionAll.classList.add("hidden");
  AllActiveCards();
  document.querySelectorAll(".btnText").forEach((btn) => {
    btn.addEventListener("click", () => {
      CleanDom(btn);
    });
  });
});

//Applies the cards to the active section
function AllActiveCards() {
  AllCards.forEach((card) => {
    if (card.active === 1) {
      card.BuildInDOM("active");
      toggleCards("active");
    }
  });
}

//Removes all cards from DOM
function CleanDOM(sectionId = "all") {
  if (sectionId === "all") {
    let section = document.getElementsByTagName("section")[0];
    section.innerHTML = ""; // Clears all content in the section
  } else if (sectionId === "active") {
    let section = document.getElementsByTagName("section")[1];
    section.innerHTML = ""; // Clears all content in the section
  } else if (sectionId === "passive") {
    let section = document.getElementsByTagName("section")[2];
    section.innerHTML = ""; // Clears all content in the section
  }
}
