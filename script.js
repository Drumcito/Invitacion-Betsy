// 1. Generar Folio y configurar WhatsApp
const folio = "BTY-" + Math.floor(1000 + Math.random() * 9000);
document.getElementById('folioNumber').innerText = folio;

const phone = "525561021219";
const message = encodeURIComponent(`¡Hola Betsy! Confirmo mi asistencia a tu fiesta de 40 años. Mi folio es: ${folio}`);
document.getElementById('whatsappBtn').href = `https://wa.me/${phone}?text=${message}`;

// 2. Función de Inicio
function startExperience() {
    // Reproducir música
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("El navegador bloqueó el auto-play inicial"));

    // Scroll automático al contenido
    const content = document.getElementById('mainContent');
    content.scrollIntoView({ behavior: 'smooth' });
}

// 3. Cuenta Regresiva
const targetDate = new Date("June 6, 2026 15:30:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h3>¡ES HOY LA FIESTA!</h3>";
        return;
    }

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("mins").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("secs").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);