import { useLocation } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharacterPage.module.scss';
import { Character } from './types';

const CharacterPage = () => {
  const location = useLocation();
  const character = location.state as Character;

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
