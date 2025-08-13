
function toggleCards(sectionId = 'all')
{ 
    
    if (sectionId === 'all')
    {
        let section = document.getElementsByTagName('section')[0];
        let toggleBtns = section.querySelectorAll('.toggle-btn');
        toggleBtns.forEach((btn) => {
        btn.addEventListener('click', Toggle)});
    }
    else if (sectionId === 'active')
    {
        let section = document.getElementsByTagName('section')[1];
        let toggleBtns = section.querySelectorAll('.toggle-btn');
        toggleBtns.forEach((btn) => {
        btn.addEventListener('click', Toggle)});
    }
    else if (sectionId === 'passive')
    {
        let section = document.getElementsByTagName('section')[2];
        let toggleBtns = section.querySelectorAll('.toggle-btn');
        toggleBtns.forEach((btn) => {
        btn.addEventListener('click', Toggle)});
    }
    
}


function Toggle(event) {


    let button = event.currentTarget
    let rootCard = button.closest('.card');
    let cardId = parseInt(rootCard.id);


    if (button.classList.contains('bg-red-700'))
        button.classList.remove('bg-red-700');
    else
        button.classList.add('bg-red-700');

    let circle = button.querySelector('.toggle-circle');

    if (circle.classList.contains('ison')) {
        circle.classList.remove('ison');
        AllCards[cardId].active = 0;
    }
    else {
        circle.classList.add('ison');
        AllCards[cardId].active = 1;
    }







}