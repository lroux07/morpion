let squares = document.querySelectorAll('.squares');

for(let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    squares[i].textContent = "X";
  });
}