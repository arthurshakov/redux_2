import { Field, Information } from './components';
import styles from './game.module.css';
import { useDispatch } from 'react-redux';

export const Game = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.game}>
      <Information />
      <Field />
      <button className={styles.restartButton} onClick={() => dispatch({ type: 'RESTART_GAME' })}>
        Начать заново
      </button>
    </div>
  );
}
