function playSound(id) {
    var sound = document.getElementById(id);
    if (sound.paused) {
      sound.play();
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
  }