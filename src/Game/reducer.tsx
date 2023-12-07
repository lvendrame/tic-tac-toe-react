import { checkWinner } from './checkWinner';
import { Player } from './Player';
import { TicTacToeState } from './TicTacToeState';
import { TicTacToeAction, TicTacToeActionKind } from './TicTacToeAction';
import { initialState } from './initialState';

export function reducer(state: TicTacToeState, action: TicTacToeAction): TicTacToeState {
    switch (action.type) {
        case TicTacToeActionKind.SET_BOX: {
            const newBoard = [...state.board];
            newBoard[action.payload.index] = state.player;
            const hasWinner = checkWinner(newBoard, state.player);

            return {
                ...state,
                player: state.player === Player.X ? Player.O : Player.X,
                board: newBoard,
                tie: !hasWinner && newBoard.filter((x) => x === Player.Empty).length === 0,
                winner: hasWinner ? state.player : undefined,
            };
        }
        case TicTacToeActionKind.RESET:
            return initialState;
    }
}
