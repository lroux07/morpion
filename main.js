let squares = document.querySelectorAll('.squares');
let currentPlayers = 1;

const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

for(let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if(grid[i % 3][Math.floor(i / 3)] !== 0) {
      return;
    }
    grid[i % 3][Math.floor(i / 3)] = currentPlayers;
    
    if(currentPlayers === 1) {
      squares[i].textContent = "X";
      currentPlayers = 2;
    } else if(currentPlayers === 2) {
      squares[i].textContent = "O";
      currentPlayers = 1;
    }
  });
}