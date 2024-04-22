
const gameArea = document.getElementById('gameArea');
let score = 0;

function createFallingObject() {
  const fallingObject = document.createElement('div');
  fallingObject.classList.add('falling-object');
  fallingObject.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
  gameArea.appendChild(fallingObject);

  fallingObject.addEventListener('click', () => {
    gameArea.removeChild(fallingObject);
    score++;
    updateScore();
  });

  setTimeout(() => {
    gameArea.removeChild(fallingObject);
    updateScore();
  }, 3000);
}

function updateScore() {
  // 更新分数的显示
  console.log(`Score: ${score}`);
}

// 开始游戏
function start(){
setInterval(createFallingObject, 2000);

}

