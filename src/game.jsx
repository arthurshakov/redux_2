import { Field, Information } from './components';
import styles from './game.module.css';
import { store } from './store';

export const Game = () => {
  return (
    <div className={styles.game}>
      <Information />
      <Field />
      <button className={styles.restartButton} onClick={() => store.dispatch({ type: 'RESTART_GAME' })}>
        Начать заново
      </button>
    </div>
  );
}
