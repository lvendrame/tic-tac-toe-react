import { Player } from './Player';


export interface TicTacToeState {
    board: Player[];
    player: Player;
    winner?: Player;
    tie: boolean;
}
