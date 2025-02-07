import { useLocation } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharacterPage.module.scss';

const CharacterPage = () => {
  const location = useLocation();
  const character = location.state;

  if (!character) {
    return <p>Character not found!</p>;
  }

  return (
    <div className={styles.characterPage}>
      <CharacterCard {...character} />
    </div>
  );
};

export default CharacterPage;
