const button = document.querySelector('button'),
        body = document.querySelector('body'),
        heading = document.querySelector('h1'),
        paragraph = document.querySelector('p'),
        paragraphDiv = document.querySelector('div'),
        sun = document.querySelector('.sun'),
        moon = document.querySelector('.moon'),
        mode = document.querySelector('.mode');


body.style.fontFamily = 'poppins'
body.style.backgroundColor = 'white'
body.style.color = 'black'

paragraphDiv.style.backgroundColor = "#817f7f"
paragraphDiv.style.padding = '10px'
paragraphDiv.style.borderRadius = '10px'

button.style.padding = '2vh 2vw'
button.style.borderRadius = '2vh'
button.style.border = 'none'
button.style.backgroundColor = 'blue'
button.style.color = 'white'
button.style.fontWeight = 'bolder'

body.style.transition = 'all 0.5s'

moon.style.opacity = '0'
moon.style.transition = 'opacity 0.25s'
sun.style.transition = 'opacity 0.25s'

mode.style.backgroundColor = "#817f7f"
mode.style.padding = '1vh'
mode.style.borderRadius = '2.8vh'

function switchMode(){
    body.style.backgroundColor === 'white' 
    ? (body.style.backgroundColor = 'black', moon.style.opacity = '1', sun.style.opacity = '0', body.style.color = 'white', paragraph.innerText = 'You are currently in dark mode click the button to switch to light mode') 
    : (body.style.backgroundColor = 'white', moon.style.opacity = '0', sun.style.opacity = '1', body.style.color = 'black', paragraph.innerText = 'You are currently in light mode click the button to switch to dark mode');
;
}

