import {cook} from './index.js';

function contact(){

    
    const contactUs = document.createElement('div')
    contactUs.classList.add('contactUs')

    const heading = document.createElement('h1')
    heading.textContent = "contact us"

    const contactCard = document.createElement('div')
    contactCard.classList.add('shef')

    const contactCardText = document.createElement('div')
    contactCardText.classList.add('contactText')

    const cookName = document.createElement("h2")
    cookName.textContent = "David Armstrong"

    const position = document.createElement("h4")
    position.textContent = "shef"

    const phone = document.createElement('h4')
    phone.textContent = "+995 598 60 04 123"

    const mail = document.createElement('h4')
    mail.textContent = "DavidArmstrong@gmail.com"

    const shefP = new Image();
    shefP.src = cook;

    contactUs.appendChild(heading)
    contactUs.appendChild(contactCard)

    contactCard.appendChild(shefP)
    contactCard.appendChild(contactCardText)
    
    contactCardText.appendChild(cookName)
    contactCardText.appendChild(position)
    contactCardText.appendChild(phone)
    contactCardText.appendChild(mail)

    container.appendChild(contactUs)

    }
    
    export{contact}