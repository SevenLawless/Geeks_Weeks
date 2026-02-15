function playSound(e) {
    const key = e.type === 'click' ? this.dataset.key : e.keyCode;
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const drum = document.querySelector(`.drum[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    if (drum) {
        drum.classList.add('playing');
        setTimeout(() => drum.classList.remove('playing'), 100);
    }
}

const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('click', playSound));
window.addEventListener('keydown', playSound);