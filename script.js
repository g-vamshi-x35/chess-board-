const board = document.getElementById('board');

for (let i = 0; i < 8; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('td');
        cell.className = (i + j) % 2 === 0 ? 'black' : 'white';
        row.appendChild(cell);
    }
    board.appendChild(row);
}
