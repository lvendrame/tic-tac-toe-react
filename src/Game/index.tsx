import { useReducer } from 'react';
import styles from './styles.module.css';
import { reducer } from './reducer';
import { initialState } from './initialState';
import { TicTacToeActionKind } from './TicTacToeAction';
import { Player } from './Player';

export default function Game() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = (index: number) => {
        if (state.board[index] !== Player.Empty || state.winner) {
            return;
        }

        dispatch({
            type: TicTacToeActionKind.SET_BOX,
            payload: {
                index,
            },
        });
    };

    const handleReset = () => {
        dispatch({
            type: TicTacToeActionKind.RESET,
        });
    };

    return (
        <div>
            <p>Current player: {state.player}</p>
            {state.winner && <p>Winner: {state.winner}</p>}
            {state.tie && <p>TIE</p>}
            <button onClick={handleReset}>Reset</button>
            <hr />
            <div className={styles.board}>
                {state.board.map((value, index) => (
                    <button key={index} onClick={handleClick.bind(null, index)}>
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
}


