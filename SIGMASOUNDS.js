   const player = document.getElementById('player');
    document.querySelectorAll('.sound-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sound = btn.getAttribute('data-sound');
        player.src = sound;
        player.currentTime = 0;
        player.play();
      });
    });