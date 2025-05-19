const playingAudios = [];

    document.querySelectorAll('.sound-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sound = btn.getAttribute('data-sound');
        const audio = new Audio(sound);
        audio.play();
        playingAudios.push(audio);

        // Remove finished audios from the array
        audio.addEventListener('ended', () => {
          const idx = playingAudios.indexOf(audio);
          if (idx > -1) playingAudios.splice(idx, 1);
        });
        audio.addEventListener('pause', () => {
          const idx = playingAudios.indexOf(audio);
          if (audio.currentTime === audio.duration && idx > -1) playingAudios.splice(idx, 1);
        });
      });
    });

    // Stop all sounds when the stop button is clicked
    document.getElementById('stopAll').addEventListener('click', () => {
      playingAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      playingAudios.length = 0; // Clear the array
    });