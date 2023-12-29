import {food1P} from './index';

function menu(){

    const menu = document.createElement('div')
    menu.classList.add('menu')

    const heading = document.createElement('h1')
    heading.textContent = "menu"

    const food = document.createElement('h2')
    food.textContent = "food"

    const foodcard = document.createElement('div')
    foodcard.classList.add('food1')

    const foodName = document.createElement("h3")
    foodName.textContent = "khinkali"

    const foodDescription = document.createElement("p")
    foodDescription.textContent = "The fillings of khinkali vary with the area. The original recipe, the so-called khevsuruli, consisted of only minced meat (lamb or beef and pork mixed), onions, chili pepper, salt, and cumin.[3] However, the modern recipe used mostly especially in Georgian urban areas, the so-called kalakuri, uses herbs like parsley and coriander. Mushrooms, potatoes, or cheese may be used in place of meat.    "

    const para = document.createElement('p')
    para.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    
    const khinkali = new Image();
    khinkali.src = food1P;

    menu.appendChild(heading)
    menu.appendChild(food)
    menu.appendChild(foodcard)

    foodcard.appendChild(khinkali)
    foodcard.appendChild(foodName)
    foodcard.appendChild(foodDescription)

    container.appendChild(menu)
    
    };
    
    export{menu}