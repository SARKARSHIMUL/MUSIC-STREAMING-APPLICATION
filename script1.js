// Initialize the Variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gf=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Tere Pyar Main - Arijit Singh", filePath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Pyar Hota Hai - Arijit Singh", filePath:"songs/2.mp3",coverPath: "covers/1.jpg"},
    {songName: "O Bedardiya - Arijit Singh", filePath:"songs/3.mp3",coverPath: "covers/1.jpg"},
    {songName: "Show Me The Thoomka - Amitabh",coverPath: "covers/1.jpg"},
    {songName: "Kahani Ki Meri - Jubin Natual",coverPath: "covers/1.jpg"},
    {songName: "Pii Rakhhi Hai Maine ", filePath:"songs/6.mp3",coverPath: "covers/1.jpg"},
    {songName: "Kesariya - Arijit Singh", filePath:"songs/7.mp3",coverPath: "covers/2.jpg"},
    {songName: "Maan Meri Jaan - King", filePath:"songs/8.mp3",coverPath: "covers/3.jpg"},
    {songName: "Kahani Shuno 2.0", filePath:"songs/9.mp3",coverPath: "covers/4.jpg"},
    {songName: "Besharam Rang - Shilpa Rao", filePath:"songs/10.mp3",coverPath: "covers/5.jpg"},
]

songItem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gf.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gf.style.opacity=0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () =>{
    // Update SeekBar
    progres=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progres;
})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    makeAllPlays();
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${index+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
   })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})