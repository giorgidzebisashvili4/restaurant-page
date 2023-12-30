function home(){

    const home = document.createElement('div')
    home.classList.add('home')

    const heading = document.createElement('h1')
    heading.textContent = "home"

    const para = document.createElement('p')
    para.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    
    const hoursH = document.createElement('h1')
    hoursH.textContent = "working hours"

    const hours = document.createElement('p')
    hours.innerHTML = "Sunday: 8am - 8pm <br>Monday: 6am - 6pm <br>Tuesday: 6am - 6pm <br>Wednesday: 6am - 6pm <br>Thursday: 6am - 10pm <br>Friday: 6am - 10pm <br>Saturday: 8am - 10pm"



    home.appendChild(heading)
    home.appendChild(para)

    home.appendChild(hoursH)
    home.appendChild(hours)
    container.appendChild(home)
    
    }
    
    export{home}