        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('[data-audio]');

            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const audioId = this.getAttribute('data-audio');
                    const audio = document.getElementById(audioId);

                    if (audio) {
                        audio.currentTime = 0;
                        audio.play();
                    }
                });
            });

            document.getElementById('stopAllButton').addEventListener('click', function() {
                const audios = document.querySelectorAll('audio');
                audios.forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            });
        });