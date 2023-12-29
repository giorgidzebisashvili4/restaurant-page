function home(){

    const home = document.createElement('div')
    home.classList.add('home')

    const heading = document.createElement('h1')
    heading.textContent = "home"

    const para = document.createElement('p')
    para.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    
    home.appendChild(heading)
    home.appendChild(para)
    container.appendChild(home)
    
    }
    
    export{home}