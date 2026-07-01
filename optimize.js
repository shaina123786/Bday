document.addEventListener("DOMContentLoaded", () => {
    // इमेजेस और GIFs के लिए
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // ऑडियो के लिए
    document.querySelectorAll('audio').forEach(audio => {
        audio.setAttribute('preload', 'auto');
    });
});