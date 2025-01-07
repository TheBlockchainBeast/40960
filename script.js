// Disable console
function disableConsole() {
    window.console.log = function () { };
    window.console.info = function () { };
    window.console.warn = function () { };
    window.console.error = function () { };
    window.console.debug = function () { };
}

// Prevent right-click context menu
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Matrix background effect
function createMatrixBackground() {
    const canvas = document.createElement('canvas');
    canvas.classList.add('matrix-bg');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "40960".split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

// Typing effect
function typeWriter(text, element, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    disableConsole();
    createMatrixBackground();

    const mainText = document.getElementById('mainText');
    const introText = `Introducing 40960 - The embodiment of true digital scarcity.\n\n` +
        `No fractional units. No compromises. Pure, whole-number perfection.\n` +
        `Join the revolution of absolute scarcity in the digital age.`;

    typeWriter(introText, mainText);
});