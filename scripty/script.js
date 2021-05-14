const faq = document.querySelector(`.text`);

faq.addEventListener(`click`, e => {
    const clicked = e.target;

    if(clicked.parentElement.classList.contains(`option`))
    {
        clicked.parentElement.nextElementSibling.classList.toggle(`hide`);
        clicked.parentElement.nextElementSibling.classList.toggle(`fadeIn`);
        if(clicked.localName == `h2`)
        {
            clicked.classList.toggle(`bold`);
        }
        else {
            clicked.previousElementSibling.classList.toggle(`bold`);
        }
    }
    else if (clicked.classList.contains(`option`))
    {
        clicked.nextElementSibling.classList.toggle(`hide`);
        clicked.children[0].classList.toggle(`bold`)
    }
});