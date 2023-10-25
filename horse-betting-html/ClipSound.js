class Sound {
    constructor(source, pitch = 1) {
      this.source = source
      this.pitch = pitch;
    }
    
    play() {
      let s = new Audio(this.source);
      s.mozPreservesPitch = false;
      s.preservesPitch = false;
      s.volume = 0.2;    // Reduced volume to avoid clipping
      s.playbackRate = this.pitch
      s.play();
    }
}