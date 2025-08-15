btnPassive.addEventListener("click", () => {
  btnActive.classList.remove("filter-btn-active");
  btnAll.classList.remove("filter-btn-active");
  //Clear all html from section before adding new cards
  CleanDOM_Sections();

  //remove hidden frorm seciton Active and add hidden to others sections
  let sectionActive = document.getElementsByTagName("section")[1];
  let sectionAll = document.getElementsByTagName("section")[0];
  sectionActive.classList.add("hidden");
  sectionAll.classList.add("hidden");

  // add active to this class
  btnPassive.classList.add("filter-btn-active");

  //remove hidden to this class
  let sectionPassive = document.getElementsByTagName("section")[2];
  sectionPassive.classList.remove("hidden");
  BuildCardsSection("passive");
});
