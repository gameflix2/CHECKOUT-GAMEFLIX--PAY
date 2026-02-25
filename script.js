/* --- CONTROLE DO BANNER (SOM INTELIGENTE) --- */
window.addEventListener("DOMContentLoaded", () => {
    const bannerVideo = document.getElementById("banner-video");
    if (!bannerVideo) return;

    bannerVideo.removeAttribute("loop");
    bannerVideo.addEventListener("ended", () => {
        bannerVideo.muted = true; // Muta após a primeira vez
        bannerVideo.play().catch(() => {});
    });
});

/* --- LÓGICA DO MODAL (ESTILO NETFLIX) --- */
function openModal(title, desc, youtubeId) {
    const modal = document.getElementById("netflixModal");
    const iframe = document.getElementById("modalVideo");
    const bannerVideo = document.getElementById("banner-video");

    if (bannerVideo) { bannerVideo.pause(); bannerVideo.muted = true; }

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = desc;
    // INÍCIO AOS 10 SEGUNDOS (&start=10)
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&start=10`;
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("netflixModal");
    const iframe = document.getElementById("modalVideo");
    iframe.src = "";
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

/* --- LÓGICA DO CHECKOUT --- */
function toggleCheckout(title = '', imgSrc = '') {
    const modal = document.getElementById('checkoutGamer');
    const isVisible = modal.style.display === 'flex';
    modal.style.display = isVisible ? 'none' : 'flex';

    if (title && !isVisible) {
        document.getElementById('checkout-title').textContent = title;
        document.getElementById('checkout-img').src = imgSrc;
    }
}
