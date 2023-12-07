import { TicTacToeState } from './TicTacToeState';
import { Player } from './Player';

export function checkWinner(
    board: TicTacToeState['board'],
    player: Player,
) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6], // diagonal
    ];

    for (const [a, b, c] of lines) {
        if (board[a] === player && board[b] === player && board[c] === player)
            return true;
    }

    return false;
}
