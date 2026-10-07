const board = document.getElementById('board');
const help = document.getElementById('help');

for (let i = 0; i < 8; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('td');
        cell.className = (i + j) % 2 === 0 ? 'black' : 'white';
        row.appendChild(cell);
    }
    board.appendChild(row);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'F1') {
        document.body.classList.toggle('f1-active');
        const active = document.body.classList.contains('f1-active');
        help.textContent = active ? 'F1 active: board highlighted' : 'Press F1 to highlight board';
        e.preventDefault();
    }
});
