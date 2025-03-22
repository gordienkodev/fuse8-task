import styles from './CharacterCard.module.scss';
import { ICharacterCardProps } from './types';

const CharacterCard = ({ name, status, who, created }: ICharacterCardProps) => (
  <div className={styles.card}>
    <h3>
      {name} - {who}
    </h3>
    <div className={styles.details}>
      <div className={styles.status}>
        Status:{' '}
        <span className={status === 'Alive' ? styles.alive : styles.dead}>
          {status}
        </span>
      </div>
      <div className={styles.created}>Created: {created}</div>
    </div>
  </div>
);

export default CharacterCard;
