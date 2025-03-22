import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './SearchResults.module.scss';
import { TSearchResultsProps } from './types';

const SearchResults = ({
  query,
  characters,
  loading,
  error,
}: TSearchResultsProps) => {
  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <div className={styles.resultsGrid}>
      {characters.length === 0 && query.length >= 4 ? (
        <p>nothing found</p>
      ) : (
        characters.map((card, index) => (
          <Link
            to={`/character/${card.name}`}
            state={{
              name: card.name,
              status: card.status,
              who: card.species,
              created: new Date(card.created)
                .toLocaleDateString('ru-RU')
                .replace(/\//g, '.'),
            }}
            key={card.id}
            className={`${styles.card} ${index < 2 ? styles.large : ''}`}
          >
            <CharacterCard
              name={card.name}
              status={card.status}
              who={card.species}
              created={new Date(card.created)
                .toLocaleDateString('ru-RU')
                .replace(/\//g, '.')}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchResults;
