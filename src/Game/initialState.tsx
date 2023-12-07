import { Player } from './Player';
import { TicTacToeState } from './TicTacToeState';


export const initialState: TicTacToeState = {
    board: Array(9).fill(Player.Empty),
    player: Player.X,
    winner: undefined,
    tie: false,
};
