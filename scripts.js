window.addEventListener('keydown', function(e){
    // console.log(e);
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //  console.log(key);
    if(!audio) return;  // stope and return back
    audio.currentTime = 0; //rewine to restart
    audio.play();
    key.classList.add('playing');

    function removeTransition(e){
        if(e.propertyName !== 'transform') return; //skip it if it is not transform
        // console.log(this);
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

});