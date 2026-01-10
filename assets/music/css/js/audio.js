<script>
const audio = document.getElementById("bgAudio");
const banner = document.getElementById("cookieBanner");

// boşluksuz loop
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.play();
});

async function tryAutoplay() {
  try {
    await audio.play();
    audio.volume = 0.4;
  } catch {
    banner.style.display = "block";
  }
}

function acceptCookies() {
  localStorage.setItem("audioConsent", "true");
  banner.style.display = "none";
  audio.play();
}

window.addEventListener("load", () => {
  if (localStorage.getItem("audioConsent") === "true") {
    audio.play().catch(() => {});
  } else {
    tryAutoplay();
  }
});
</script>
