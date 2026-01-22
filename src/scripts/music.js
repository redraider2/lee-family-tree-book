const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

const DEFAULT_VOL = 0.35;

if (music) {
  music.volume = DEFAULT_VOL;
}

let playing = false;

function setUI(isPlaying) {
  if (!toggle) return;
  toggle.textContent = isPlaying ? "❚❚ Pause Music" : "▶︎ Play Music";
}

async function playMusic() {
  if (!music) return;
  try {
    await music.play();
    playing = true;
    setUI(true);
  } catch (e) {
    playing = false;
    setUI(false);
  }
}

function pauseMusic() {
  if (!music) return;
  music.pause();
  playing = false;
  setUI(false);
}

if (toggle) {
  toggle.addEventListener("click", () => {
    if (!playing) {
      playMusic();
    } else {
      pauseMusic();
    }
  });
}

setUI(false);
