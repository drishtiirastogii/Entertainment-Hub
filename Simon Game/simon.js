let sequence = [];
let humanSequence = [];

const startButton = document.querySelector('.js-start');
const info = document.querySelector('.js-info');

function handleClick(tile) 
{
    const index = humanSequence.push(tile) - 1;
    const sound = document.querySelector(`[data-sound='${tile}']`);
    sound.play();
    
    const soundWrong = new Audio('sounds/wrong.mp3');

    const remainingTaps = sequence.length - humanSequence.length;
  
    if (humanSequence[index] !== sequence[index]) {
        soundWrong.play();
        resetGame('Oops! Game over, you pressed the wrong tile');
        return;
    }
    if (humanSequence.length === sequence.length) 
    {
        if (humanSequence.length === 20) 
        {
            resetGame('Congrats! You completed all the levels');
            return
        }
        humanSequence = [];
        info.textContent = 'Success! Keep going!';
        setTimeout(() => 
        {
            nextRound();
        }, 1000);
        return;
    }

    info.textContent = `Your turn: ${remainingTaps} Tap${
      remainingTaps > 1 ? 's' : ''
    }`;
  }

    function startGame() 
    {
        startButton.classList.add('hidden');
        info.classList.remove('hidden');
        info.textContent = 'Wait for the computer';
        nextRound();
    }
startButton.addEventListener('click', startGame);
let level = 0;
function nextStep() 
{
    const tiles = ['red', 'green', 'blue', 'yellow'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
  
    return random;
}
    function nextRound()
    {
        level += 1;
        tileContainer.classList.add('unclickable');
  
        info.textContent = 'Wait for the computer';
  
        heading.textContent = `Level ${level} of 20`; 
  
        const nextSequence = [...sequence];
        nextSequence.push(nextStep());
        playRound(nextSequence);
        
        sequence = [...nextSequence];
        setTimeout(() => 
        {
            humanTurn(level);
        }, level * 600 + 1000);
    }
    function activateTile(color) 
    {
        const tile = document.querySelector(`[data-tile='${color}']`);
        const sound = document.querySelector(`[data-sound='${color}']`);
  
        tile.classList.add('activated');
        sound.play();
  
        setTimeout(() => 
        {
            tile.classList.remove('activated');
        }, 100);
    }
  function playRound(nextSequence) {
    nextSequence.forEach((color, index) => {
      setTimeout(() => {
        activateTile(color);
      }, (index + 1) * 600);
    });
  }
  
const heading = document.querySelector('.js-heading');
const tileContainer = document.querySelector('.js-container');

function humanTurn(level) 
{
    tileContainer.classList.remove('unclickable');
    info.textContent = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

tileContainer.addEventListener('click', event => {
    const { tile } = event.target.dataset;
  
    if (tile) handleClick(tile);
  });

  function resetGame(text) {
    alert(text);
    sequence = [];
    humanSequence = [];
    level = 0;
    startButton.classList.remove('hidden');
    heading.textContent = 'Simon Game';
    info.classList.add('hidden');
    tileContainer.classList.add('unclickable');
  }

