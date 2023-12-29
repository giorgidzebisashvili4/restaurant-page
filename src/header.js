import { home } from "./home"
import { menu } from "./menu";
import { contact } from "./contact";

function header(){

const container = document.querySelector('#container')

const headerDiv = document.createElement('div')
headerDiv.classList.add ("header");

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

container.appendChild(headerDiv)

headerDiv.appendChild(homeBtn)
headerDiv.appendChild(menuBtn)
headerDiv.appendChild(contactBtn)

function removeLastDomContent(){
  container.removeChild(container.lastChild);
}
const allHeaderBtns = document.querySelectorAll('.header>button')

// defolt load home page
home()

allHeaderBtns.forEach(
  (button)=>{
    button.addEventListener('click',()=>{
      container.removeChild(container.lastChild);
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