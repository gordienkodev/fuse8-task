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
      <div>Status: {status}</div>
      <div>Created: {created}</div>
    </div>
  </div>
);

export default CharacterCard;
