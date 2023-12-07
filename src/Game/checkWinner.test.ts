import test from 'node:test';
import assert from "node:assert";
import { checkWinner } from './checkWinner';
import { TicTacToeState } from './TicTacToeState';
import { Player } from './Player';

test('checkWinner: empty', () => {
    const board: TicTacToeState['board'] = [
        Player.Empty, Player.Empty, Player.Empty,
        Player.Empty, Player.Empty, Player.Empty,
        Player.Empty, Player.Empty, Player.Empty,
    ];
    const player = Player.X;
    assert.strictEqual(checkWinner(board, player), false);
});

test('checkWinner: first line', () => {
    const board: TicTacToeState['board'] = [
        Player.X, Player.X, Player.X,
        Player.O, Player.O, Player.X,
        Player.O, Player.X, Player.O,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});

test('checkWinner: second line', () => {
    const board: TicTacToeState['board'] = [
        Player.O, Player.O, Player.X,
        Player.X, Player.X, Player.X,
        Player.O, Player.X, Player.O,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});

test('checkWinner: third line', () => {
    const board: TicTacToeState['board'] = [
        Player.O, Player.O, Player.X,
        Player.X, Player.O, Player.O,
        Player.X, Player.X, Player.X,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});

test('checkWinner: first column', () => {
    const board: TicTacToeState['board'] = [
        Player.X, Player.O, Player.O,
        Player.X, Player.O, Player.X,
        Player.X, Player.X, Player.O,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});

test('checkWinner: second column', () => {
    const board: TicTacToeState['board'] = [
        Player.O, Player.X, Player.O,
        Player.X, Player.X, Player.O,
        Player.O, Player.X, Player.X,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});

test('checkWinner: third column', () => {
    const board: TicTacToeState['board'] = [
        Player.O, Player.X, Player.X,
        Player.O, Player.O, Player.X,
        Player.X, Player.O, Player.X,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});

test('checkWinner: first diagonal', () => {
    const board: TicTacToeState['board'] = [
        Player.X, Player.O, Player.O,
        Player.O, Player.X, Player.O,
        Player.X, Player.O, Player.X,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});

test('checkWinner: second diagonal', () => {
    const board: TicTacToeState['board'] = [
        Player.O, Player.O, Player.X,
        Player.O, Player.X, Player.O,
        Player.X, Player.O, Player.X,
    ];

    assert.strictEqual(checkWinner(board, Player.X), true);
    assert.strictEqual(checkWinner(board, Player.O), false);
});