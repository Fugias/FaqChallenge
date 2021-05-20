const faq = document.querySelector(`.text`);
const info = document.querySelectorAll(`p`);
const h2 = document.querySelectorAll(`h2`);
const icons = document.querySelectorAll(`img[alt="icon"]`)

const check = () => {
    for(let i = 0; i < 5; i++)
    {
        info[i].classList.add(`hide`);
        h2[i].classList.remove(`bold`);
        icons[i].classList.remove(`rotate`);
    }
}

faq.addEventListener(`click`, e => {
    
    
    const clicked = e.target;


    if(clicked.classList.contains(`option`) && clicked.nextElementSibling.classList.contains(`hide`))
    {
        check();
        clicked.nextElementSibling.classList.toggle(`hide`);
        clicked.children[0].classList.toggle(`bold`);
        clicked.children[1].classList.toggle(`rotate`);
    }
    else if(clicked.classList.contains(`option`) && clicked.nextElementSibling.classList.contains(`hide`) == false)
    {
        clicked.nextElementSibling.classList.toggle(`hide`);
        clicked.children[0].classList.toggle(`bold`);
        clicked.children[1].classList.toggle(`rotate`);
    }
    else if(clicked.nodeName == "H2" && clicked.parentElement.nextElementSibling.classList.contains(`hide`) || clicked.nodeName == "IMG" && clicked.parentElement.nextElementSibling.classList.contains(`hide`))
    {
        check();
        clicked.parentElement.nextElementSibling.classList.toggle(`hide`);
        if(clicked.nodeName == "H2")
        {
            clicked.classList.toggle(`bold`);
            clicked.nextElementSibling.classList.toggle(`rotate`);
        }
        else {
            clicked.previousElementSibling.classList.toggle(`bold`);
            clicked.classList.toggle(`rotate`);
        }
    }
    else if(clicked.nodeName == "H2" && clicked.parentElement.nextElementSibling.classList.contains(`hide`) == false || clicked.nodeName == "IMG" && clicked.parentElement.nextElementSibling.classList.contains(`hide`) == false)
    {
        clicked.parentElement.nextElementSibling.classList.toggle(`hide`);

        if(clicked.nodeName == "H2")
        {
            clicked.classList.toggle(`bold`);
            clicked.nextElementSibling.classList.toggle(`rotate`);
        }
        else {
            clicked.previousElementSibling.classList.toggle(`bold`);
            clicked.classList.toggle(`rotate`);
        }
        
    }

   
});