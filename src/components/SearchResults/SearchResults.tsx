import { useState } from 'react';
import mockData from './data.json';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './SearchResults.module.scss';

const SearchResults: React.FC = () => {
  const [cards] = useState(mockData.results);

  return (
    <div className={styles.resultsGrid}>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`${styles.card} ${index < 2 ? styles.large : ''}`}
        >
          <CharacterCard
            name={card.name}
            status={card.status}
            who={card.who}
            created={card.created}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
