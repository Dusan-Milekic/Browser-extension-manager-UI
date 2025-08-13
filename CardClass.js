
class Card {
    constructor(indexCard, pathImg, htitle, pInfo, active) {
        this.indexCard = indexCard;
        this.pathImg = pathImg;
        this.htitle = htitle;
        this.pInfo = pInfo;
        this.active = active;
    }

    BuildInDOM(sectionId = 'all') {
        let domBuilderString =
            `<div id=${this.indexCard} class="card">
        <div class="extinfo">
            <div class="ico-container">
                <img src="${this.pathImg}" alt="ico">
            </div>
            <div class="details min-h-[100px]">
                <h2 id="detail-h2">${this.htitle}</h2>
                <p>${this.pInfo}</p>
            </div>
        </div>
        <div class="btnsContainer">
            <button class="btnText btn-ext">Remove</button>
            <button class="btnToggle toggle-btn">
                <div class="toggle-circle"></div>
            </button>
        </div>
    </div>`;

        let domBuilderStringACTIVE =
            `<div id=${this.indexCard} class="card">
        <div class="extinfo">
            <div class="ico-container">
                <img src="${this.pathImg}" alt="ico">
            </div>
            <div class="details min-h-[100px]">
                <h2 id="detail-h2">${this.htitle}</h2>
                <p>${this.pInfo}</p>
            </div>
        </div>
        <div class="btnsContainer">
            <button class="btnText btn-ext">Remove</button>
            <button class="btnToggle toggle-btn bg-red-700">
                <div class="toggle-circle ison"></div>
            </button>
        </div>
    </div>`;

        if (sectionId === 'all') {
            let section = document.getElementsByTagName('section')[0];
            if (this.active === 1)
                section.insertAdjacentHTML('beforeend', domBuilderStringACTIVE); // Dodaje kao poslednji child section-a
            else
                section.insertAdjacentHTML('beforeend', domBuilderString); // Dodaje kao poslednji child section-a
        }
        else if (sectionId === 'active') {
            let section = document.getElementsByTagName('section')[1];
            if (this.active === 1)
                section.insertAdjacentHTML('beforeend', domBuilderStringACTIVE); // Dodaje kao poslednji child section-a
            else
                section.insertAdjacentHTML('beforeend', domBuilderString); // Dodaje kao poslednji child section-a
        }
        else if (sectionId === 'passive') {
            let section = document.getElementsByTagName('section')[2];
            if (this.active === 0)
                section.insertAdjacentHTML('beforeend', domBuilderString); // Dodaje kao poslednji child section-a
            else
                section.insertAdjacentHTML('beforeend', domBuilderStringACTIVE); // Dodaje kao poslednji child section-a
        }


    }
}
