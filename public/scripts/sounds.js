function play(filename){
    console.log(filename);
    const audio = new Audio('public/audio/'+filename);
    audio.play();
    audio.onended = (e) => {
        audio = undefined;
    }
}