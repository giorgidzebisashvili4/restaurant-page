import { home } from "./home"
import { menu } from "./menu";
import { contact } from "./contact";

function header(){

const container = document.querySelector('#container')

const headerDiv = document.createElement('div')
headerDiv.classList.add ("header");

//buttons for headeer
let homeBtn = document.createElement('button')
homeBtn.textContent="home"
homeBtn.classList.add ("homeBtn")

let menuBtn = document.createElement('button')
menuBtn.textContent="menu"
menuBtn.classList.add ("menuBtn")

let contactBtn = document.createElement('button')
contactBtn.textContent="contact"
contactBtn.classList.add ("contactBtn")


headerDiv.appendChild(homeBtn)
headerDiv.appendChild(menuBtn)
headerDiv.appendChild(contactBtn)

container.appendChild(headerDiv)

//event listeners to change content
homeBtn.addEventListener('click',()=>{
    container.removeChild()
    home()
})

menuBtn.addEventListener('click',()=>{
    headerDiv.removeChild

    menu()
})

contactBtn.addEventListener('click',()=>{
    headerDiv.removeChild

    contact()
})

}

export{header}