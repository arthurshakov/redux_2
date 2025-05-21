import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';
import { handleCellClick } from '../../handlers';

export const FieldLayout = ({ field }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button
				key={index}
				className={styles.cell}
				onClick={() => handleCellClick(index)}
			>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	),
};
