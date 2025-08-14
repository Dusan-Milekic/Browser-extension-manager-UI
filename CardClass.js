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

    if (sectionId === "all") {
      let section = document.getElementsByTagName("section")[0];
      if (this.active === 1)
        section.insertAdjacentHTML("beforeend", domBuilderStringACTIVE);
      // Dodaje kao poslednji child section-a
      else section.insertAdjacentHTML("beforeend", domBuilderString); // Dodaje kao poslednji child section-a
    } else if (sectionId === "active") {
      let section = document.getElementsByTagName("section")[1];
      if (this.active === 1)
        section.insertAdjacentHTML("beforeend", domBuilderStringACTIVE);
      // Dodaje kao poslednji child section-a
      else section.insertAdjacentHTML("beforeend", domBuilderString); // Dodaje kao poslednji child section-a
    } else if (sectionId === "passive") {
      let section = document.getElementsByTagName("section")[2];
      if (this.active === 0)
        section.insertAdjacentHTML("beforeend", domBuilderString);
      // Dodaje kao poslednji child section-a
      else section.insertAdjacentHTML("beforeend", domBuilderStringACTIVE); // Dodaje kao poslednji child section-a
    }
  }
  RemoveCard(index) {
    let card = document.getElementById(index);
    card.remove(card);
  }
}
