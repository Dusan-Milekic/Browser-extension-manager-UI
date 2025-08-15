btnAll.addEventListener("click", () => {
  btnPassive.classList.remove("filter-btn-active");
  btnActive.classList.remove("filter-btn-active");
  //Clear all html from section before adding new cards
  CleanDOM("passive");
  CleanDOM("all");
  CleanDOM("active");
  //remove hidden frorm seciton Active and add hidden to others sections
  let sectionActive = document.getElementsByTagName("section")[1];
  let sectionPassive = document.getElementsByTagName("section")[2];
  sectionActive.classList.add("hidden");
  sectionPassive.classList.add("hidden");

  // add active class to btnActive
  btnAll.classList.add("filter-btn-active");

  //remove hidden to this class
  let sectionAll = document.getElementsByTagName("section")[0];
  sectionAll.classList.remove("hidden");
  AllCardsSection();
});

function AllCardsSection() {
  AllCards.forEach((card) => {
    card.BuildInDOM("all");
    toggleCards("all");
  });
}

//Run cards all section on page load
window.addEventListener("DOMContentLoaded", () => {
  AllCardsSection();

  //Implemnation for deletting cards
  document.querySelectorAll(".btnText").forEach((btn) => {
    btn.addEventListener("click", () => {
      CleanDom(btn);
    });
  });
});

function CleanDom(btn) {
  id = btn.parentElement.parentElement.id; //Get id of card
  AllCards.splice(id, 1); //Remove card from AllCards array
  let card = btn.parentElement.parentElement; //Get card element
  card.remove();
}
