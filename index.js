console.log('spotify');
let playi = document.getElementById('playi');
let seek = document.getElementById('seek');
let seekBack = document.getElementById('seekBack');
let progressTime = document.getElementById('progressTime');
let audio = new Audio('songItems/1.mp3');


let index = 0;


document.getElementById('play').addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.src = "songItems/1.mp3"
        audio.play()
        playi.classList.remove('fa-circle-play');
        playi.classList.add('fa-circle-pause');
        document.body.style.background = 'url("images/navGif2.gif")'; 
        let progres = parseInt((audio.currentTime/audio.duration)*100);
        seek.value = progres; 
    }
    else{
        audio.pause();
        playi.classList.remove('fa-circle-pause');
        playi.classList.add('fa-circle-play');
        document.body.style.background = '#56b33e';
    
    }
})

audio.addEventListener('timeupdate',()=>{
    let progres = parseInt((audio.currentTime/audio.duration)*100);
    seek.value = progres;
    progressTime.innerHTML = `${progres} %`;
    
})

seek.addEventListener('change',()=>{
    audio.currentTime = seek.value*audio.duration/100;
})

const makeAllPlays = (element)=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
              
    })
}
const makeAllPause = (element)=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
              
    })
}

let pauseClass = document.getElementsByClassName('fa-circle-pause');
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audio.paused || audio.currentTime<=0){
            makeAllPlays();
            audio.addEventListener('timeupdate',()=>{
                let progres = parseInt((audio.currentTime/audio.duration)*100);
                seek.value = progres;
                progressTime.innerHTML = `${progres} %`;
                
            })
           
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            index = parseInt(e.target.id);
            audio.src = `songItems/${index}.mp3`
            audio.currentTime = 0;
            audio.play();
            playi.classList.remove('fa-circle-play');
            playi.classList.add('fa-circle-pause');
            let span = document.getElementById(`span${index}`);
            
            document.body.style.background = 'url("images/navGif2.gif")';   
        }
        else{
            audio.pause();
            makeAllPlays();
            index = parseInt(e.target.id);
            playi.classList.remove('fa-circle-pause');
            playi.classList.add('fa-circle-play');
            seek.style.background = 'black';
            document.body.style.background = '#56b33e';
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            e.target.style.background = 'none';

        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=12){
        index = 0;
    }
    else{
        index+=1;
    }
    audio.src = `songItems/${index}.mp3`
    audio.currentTime = 0;
    audio.play();
    playi.classList.remove('fa-circle-play');
    playi.classList.add('fa-circle-pause');
    document.body.style.background = 'url("images/navGif2.gif")';
})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index = 12;
    }
    else{
        index-=1;
    }
    audio.src = `songItems/${index}.mp3`
    audio.currentTime = 0;
    audio.play();
    playi.classList.remove('fa-circle-play');
    playi.classList.add('fa-circle-pause');
    document.body.style.background = 'url("images/navGif2.gif")';
})
