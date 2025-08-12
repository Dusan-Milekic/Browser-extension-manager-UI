let toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach((btn) => {
    btn.addEventListener('click', Toggle);
});


function Toggle(event) {
    let button = event.currentTarget
    if (button.classList.contains('bg-red-700'))
        button.classList.remove('bg-red-700');
    else
        button.classList.add('bg-red-700');

    let circle = button.querySelector('.toggle-circle');

    if(circle.classList.contains('ison'))
        circle.classList.remove('ison');
    else
        circle.classList.add('ison');

}