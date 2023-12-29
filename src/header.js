import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import {logo} from "./index";

function header(){

const container = document.querySelector('#container')

const headerDiv = document.createElement('div')
headerDiv.classList.add ("header");

const btnDiv = document.createElement('div')
btnDiv.classList.add ("btns");

//buttons for header
let homeBtn = document.createElement('button')
homeBtn.textContent="home"
homeBtn.classList.add ("homeBtn")

let menuBtn = document.createElement('button')
menuBtn.textContent="menu"
menuBtn.classList.add ("menuBtn")

let contactBtn = document.createElement('button')
contactBtn.textContent="contact"
contactBtn.classList.add ("contactBtn")

//add logo
const HeaderLogo = new Image();
HeaderLogo.src = logo;

container.appendChild(headerDiv)

headerDiv.appendChild(HeaderLogo)

headerDiv.appendChild(btnDiv)

btnDiv.appendChild(homeBtn)
btnDiv.appendChild(menuBtn)
btnDiv.appendChild(contactBtn)

function removeLastDomContent(){
  container.removeChild(container.lastChild);
}
const allHeaderBtns = document.querySelectorAll('.btns>button')

// defolt load home page
home()

function buttonDefoltColor(){
  allHeaderBtns.forEach(function(button) {
    button.style.background = "white";
  });
}

allHeaderBtns.forEach(
  (button)=>{
    button.addEventListener('click',(e)=>{
      container.removeChild(container.lastChild);
      buttonDefoltColor()
      e.target.style.background = "gray"
    })
  }
)

//event listeners to change content
homeBtn.addEventListener('click', () => {
  home(); 
  });

  menuBtn.addEventListener('click', () => {
  
    
    menu();
  });

  contactBtn.addEventListener('click', () => {
    
    contact();
  });

}

export{header}