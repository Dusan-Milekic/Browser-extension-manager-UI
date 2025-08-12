
class Card {
    constructor(pathImg, htitle, pInfo,active) {
        this.pathImg = pathImg;
        this.htitle = htitle;
        this.pInfo = pInfo;
        this.active = active;
    }
    BuildInDOM() {
        let domBuilderString =
            `<div class="card">
        <div class="extinfo">
            <div class="ico-container">
                <img src="${this.pathImg}" alt="ico">
            </div>
            <div class="details">
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
                `<div class="card">
        <div class="extinfo">
            <div class="ico-container">
                <img src="${this.pathImg}" alt="ico">
            </div>
            <div class="details">
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

        let section = document.getElementsByTagName('section')[0];
        if (this.active === 1)
            section.insertAdjacentHTML('beforeend', domBuilderStringACTIVE); // Dodaje kao poslednji child section-a
        else
            section.insertAdjacentHTML('beforeend', domBuilderString); // Dodaje kao poslednji child section-a
        
    }
}
