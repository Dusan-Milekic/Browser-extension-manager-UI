class Card {
  constructor(indexCard, pathImg, htitle, pInfo, active) {
    this.indexCard = indexCard;
    this.pathImg = pathImg;
    this.htitle = htitle;
    this.pInfo = pInfo;
    this.active = active;
  }

  BuildInDOM(sectionId = "all") {
    let domBuilderString = `<div id=${this.indexCard} class="card">
        <div class="extinfo">
            <div class="ico-container">
                <img src="${this.pathImg}" alt="ico">
            </div>
            <div class="details min-h-[100px]">
                <h2 id="detail-h2" class="dark:text-neutral-0">${this.htitle}</h2>
                <p class="dark:text-neutral-300">${this.pInfo}</p>
            </div>
        </div>
        <div class="btnsContainer">
            <button class="btnText btn-ext dark:border-neutral-600 dark:text-neutral-0">Remove</button>
            <button class="btnToggle toggle-btn dark:bg-neutral-600">
                <div class="toggle-circle"></div>
            </button>
        </div>
    </div>`;

    let domBuilderStringACTIVE = `<div id=${this.indexCard} class="card">
        <div class="extinfo">
            <div class="ico-container">
                <img src="${this.pathImg}" alt="ico">
            </div>
            <div class="details min-h-[100px]">
                <h2 id="detail-h2" class="dark:text-neutral-0">${this.htitle}</h2>
                <p class="dark:text-neutral-300">${this.pInfo}</p>
            </div>
        </div>
        <div class="btnsContainer">
            <button class="btnText btn-ext  dark:border-neutral-600 dark:text-neutral-0">Remove</button>
            <button class="btnToggle toggle-btn bg-red-700 dark:bg-red-400 hover:bg-red-500">
                <div class="toggle-circle ison"></div>
            </button>
        </div>
    </div>`;

    /* ***Builiding card in DOM   *** */
    //Get all sections
    let sections = document.getElementsByTagName("section");
    let sectionCurrent;
    if (sectionId === "all") sectionCurrent = sections[0];
    //if in section all, get first section (all cards)
    else if (sectionId === "active") sectionCurrent = sections[1];
    //if in section active, get second section (active cards)
    else if (sectionId === "passive") sectionCurrent = sections[2];
    //if in section passive, get third section (passive cards)

    // If card is active ,build it with active style,otherwise build it with normal style
    if (this.active === 1)
      sectionCurrent.insertAdjacentHTML("beforeend", domBuilderStringACTIVE);
    else sectionCurrent.insertAdjacentHTML("beforeend", domBuilderString);
  }
}
