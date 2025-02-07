import { useCharactersSearch } from '../../hooks/useCharactersSearch';
import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './SearchResults.module.scss';

type SearchResultsProps = { query: string };

const SearchResults = ({ query }: SearchResultsProps) => {
  const { characters, loading, error } = useCharactersSearch(query);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={styles.resultsGrid}>
      {characters.map((card, index) => (
        <div
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
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
