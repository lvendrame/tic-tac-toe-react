export enum TicTacToeActionKind {
    SET_BOX = 'SET_BOX',
    RESET = 'RESET'
}

interface TicTacToeActionSetBox {
    type: TicTacToeActionKind.SET_BOX;
    payload: {
        index: number;
    };
}
interface TicTacToeActionReset {
    type: TicTacToeActionKind.RESET;
}

export type TicTacToeAction = TicTacToeActionSetBox | TicTacToeActionReset;
