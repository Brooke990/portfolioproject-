let waiting = false;
let startTime = 0;
let isGreen = false;

const testArea = document.getElementById('testArea');
const resultText = document.getElementById('result');

function startTest() {
  resultText.textContent = '';
  testArea.style.backgroundColor = '#00aef0'; 
  waiting = true;
  isGreen = false;

  const delay = Math.random() * 1000 + 4000; 
  setTimeout(() => {
    testArea.style.backgroundColor = '#28a745'; 
    startTime = performance.now();
    isGreen = true;
  }, delay);
}

document.body.addEventListener('click', () => {
  if (!waiting && !isGreen) {
    startTest();
  }
});

document.body.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && isGreen) {
    const reactionTime = (performance.now() - startTime) / 1000; 
    resultText.textContent = `Your reaction time: ${reactionTime.toFixed(2)} seconds`;
    testArea.style.backgroundColor = '#ff4444'; 
    isGreen = false;
    waiting = false;
  }
});

