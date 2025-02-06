import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  name: string;
  status: string;
  who: string;
  created: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  status,
  who,
  created,
}) => (
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
