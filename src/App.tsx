import { useState } from 'react';
import { useCharactersSearch } from './hooks/useCharactersSearch';
import styles from './App.module.scss';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const [query, setQuery] = useState('');
  const { count, characters, loading, error } = useCharactersSearch(query);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchForm onSearch={setQuery} />
        {count > 0 && characters && (
          <div className={styles.count}>Found characters: {count}</div>
        )}
      </div>
      <SearchResults
        query={query}
        characters={characters}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;
