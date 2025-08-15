//Adds event listner for Toggle buttons and what needed for section
btnActive.addEventListener("click", () => {
  btnPassive.classList.remove("filter-btn-active");
  btnAll.classList.remove("filter-btn-active");
  //Clear all html from section before adding new cards
  CleanDOM_Sections();

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
  BuildCardsSection("active");
});
