let pads = document.querySelectorAll('.drum-pad');
let control = document.querySelector('#control');
let stats = document.querySelector('#status');
let result = document.querySelector('#display');

let powerOn = true;

function power(e){
    if(!powerOn) return; 
    let key = e.currentTarget;

    let audio = key.querySelector('audio');
    audio.currentTime = 0;
    audio.play();

    key.classList.add('active');
    setTimeout(()=>{
        key.classList.remove('active');
    },150);

    // Show clip name, e.g. "Heater-1" 
    result.textContent = key.id;
}

// Power button toggle 
control.addEventListener('click', ()=>{
    powerOn = !powerOn; 
    if(powerOn){ 
        control.style.background = "green";
        stats.textContent = 'On';
    }else{
        control.style.background = "gray";
        stats.textContent = 'Off'
    }
    control.classList.toggle('on');
})

// Activate Keys
pads.forEach((pad)=>{
    pad.addEventListener('click', power);
})

// Keyboard - 
document.addEventListener('keydown', (e) => {
    let key = e.key.toUpperCase();
    let audio = document.getElementById(key); 
    if (!audio) return;
    let pad = audio.parentElement;
    power({ currentTarget: pad });
});