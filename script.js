// Define o volume de 0.0 (mudo) até 1.0 (volume máximo)
document.getElementById('bgm').volume = 0.3;  // 30% do volume

function mostrarMensagem() {
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('bgm').play();
    startConfetti();
  }
  
  // Efeito de confete (simples)
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  let width, height;
  let confettis = [];
  
  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  function createConfetti() {
    for (let i = 0; i < 100; i++) {
      confettis.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 5 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        tilt: Math.random() * 10 - 10
      });
    }
  }
  
  function drawConfetti() {
    ctx.clearRect(0, 0, width, height);
    confettis.forEach((c, i) => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.d;
      if (c.y > height) {
        c.y = -10;
        c.x = Math.random() * width;
      }
    });
  }
  
  function startConfetti() {
    if (confettis.length === 0) createConfetti();
    setInterval(drawConfetti, 33);
  }

