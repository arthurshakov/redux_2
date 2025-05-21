import { checkWin, checkEmptyCell } from '../utils';
import { STATUS, PLAYER } from '../constants';
import { store } from '../store.js';

export const handleCellClick = (cellIndex) => {
  let { status, field, currentPlayer } = store.getState();

	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	) {
		return;
	}

  store.dispatch({type: 'SET_FIELD', payload: cellIndex});
  ({ status, field, currentPlayer } = store.getState());

	if (checkWin(field, currentPlayer)) {
    store.dispatch({type: 'SET_STATUS', payload: STATUS.WIN});
	} else if (checkEmptyCell(field)) {
    store.dispatch({type: 'SET_CURRENT_PLAYER', payload: currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS});
	} else {
    store.dispatch({type: 'SET_STATUS', payload: STATUS.DRAW});
	}
};
