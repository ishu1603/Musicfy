console.log("spotify player");  
let audioElement=new Audio('audio/Rasiya Reprise.mp3');
let progressBar=document.getElementById('progressbar');
let masterPlay=document.getElementById('masterplay');
let backplay=document.getElementById('back');
let songindex=1;
let nextplay=document.getElementById('next');
let gif=document.getElementById('gif');
let songi=document.getElementsByClassName('songi')[0];
let  songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Rasiya reprise", filePath:"audio/Rasiya Reprise.mp3",coverpath:"img/rs.jpeg"},
    {songName:"Deva Deva", filePath:"audio/Deva Deva.mp3",coverpath:"img/2.jpeg"},
    {songName:"Con-La-Brisa", filePath:"audio/Con-La-Brisa.mp3",coverpath:"img/3.jpeg"},
    {songName:"Apna Bana Le", filePath:"audio/Apna Bana Le.mp3",coverpath:"img/4.jpeg"},
    {songName:"I Feel Good", filePath:"audio/I Feel Good.mp3",coverpath:"img/5.jpeg"},
    {songName:"Tumse Hi Tumse", filePath:"audio/Tumse Hi Tumse.mp3",coverpath:"img/6.jpeg"},
    {songName:"Cornfield Chase", filePath:"audio/Cornfield Chase.mp3",coverpath:"img/7.jpeg"},
]
//add events

songitems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
})
songitems.forEach((element,i)=>{
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
    
})

//handle prev/next buttons
backplay.addEventListener('click',()=>{
songindex=songindex-1;
    if(songindex==0||songindex<0){
songindex=songs.length;
    }
    audioElement.src=songs[songindex-1].filePath;
    songi.innerHTML=songs[songindex-1].songName;
    let j=(songindex).toString();
    makeallplays();
document.getElementById(j).classList.remove('fa-circle-play');
document.getElementById(j).classList.add('fa-circle-pause');
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

})
nextplay.addEventListener('click',()=>{
    songindex=songindex+1;
        if(songindex>songs.length){
    songindex=1;
        }
        audioElement.src=songs[songindex-1].filePath;
        audioElement.currentTime=0;
        songi.innerHTML=songs[songindex-1].songName;
        let j=(songindex).toString();
        makeallplays();
    document.getElementById(j).classList.remove('fa-circle-play');
    document.getElementById(j).classList.add('fa-circle-pause');
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
    })


//1:handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        let j=(songindex).toString();
        makeallplays();
    document.getElementById(j).classList.remove('fa-circle-play');
    document.getElementById(j).classList.add('fa-circle-pause');
        songi.innerHTML=songs[songindex-1].songName;
gif.style.opacity=1;
    }
    else{
     audioElement.pause();
     masterPlay.classList.remove('fa-circle-pause');
     masterPlay.classList.add('fa-circle-play');
     let j=(songindex).toString();
        makeallplays();
    document.getElementById(j).classList.remove('fa-circle-pause');
    document.getElementById(j).classList.add('fa-circle-play');
     gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
progressBar.value=progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitembutton')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitembutton')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target.classList.contains('fa-circle-pause'));

  if(e.target.classList.contains('fa-circle-pause')){
    audioElement.pause();
    makeallplays();
    gif.style.opacity=0;

  }
  else{
    makeallplays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    songindex=parseInt(e.target.id);
audioElement.src=songs[songindex-1].filePath;
songi.innerHTML=songs[songindex-1].songName;
audioElement.currentTime=0;
audioElement.play();

gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');}
})
})
