let pads = document.querySelectorAll('.drum-pad');
let control = document.querySelector('#control');
let stats = document.querySelector('#status');
let result = document.querySelector('#display');

let powerOn = false;

function power(e){
    if(!powerOn) return;
    let key = e.currentTarget;

    // Play Audio 
    let audio = key.querySelector('audio');
    audio.currentTime = 0;
    audio.play();

    // Toggle Buttons 
    key.classList.add('active');
    setTimeout(()=>{
        key.classList.remove('active');
    },150);

    // Stats
    let src = audio.src;
    let aduioName = src.split('/')[5];
    result.textContent = aduioName;
    
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
pads.forEach((items)=>{
    items.addEventListener('click', power);
})

function getKey(e){
    let key = e.currentTarget.id;
    return key; 
}
// Keyboard 
document.addEventListener('keydown', (e) => {
    let key = e.key.toUpperCase();
    pads.forEach((pad) => {
         if(key === pad.id.toUpperCase()){
            console.log(`Matched: ${key}`)
            power({currentTarget: pad})
         }
    });
});