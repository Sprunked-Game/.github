// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let player = {
    x: 50,
    y: canvas.height - 100,
    width: 50,
    height: 50,
    color: 'green',
    dy: 0,
    gravity: 0.5,
    jumpStrength: -10,
    isJumping: false
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updatePlayer() {
    if (player.isJumping) {
        player.dy += player.gravity;
        player.y += player.dy;

        if (player.y + player.height > canvas.height) {
            player.y = canvas.height - player.height;
            player.dy = 0;
            player.isJumping = false;
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    updatePlayer();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !player.isJumping) {
        player.isJumping = true;
        player.dy = player.jumpStrength;
    }
});

gameLoop();
