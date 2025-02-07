import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useCharactersSearch } from './hooks/useCharactersSearch';
import styles from './App.module.scss';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import CharacterPage from './components/CharacterPage/CharacterPage';

const App = () => {
  const [query, setQuery] = useState('');
  const { count, characters, loading, error } = useCharactersSearch(query);

  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className={styles.search}>
                  <SearchForm onSearch={setQuery} />
                  {count > 0 && characters && (
                    <div className={styles.count}>
                      Found characters: {count}
                    </div>
                  )}
                </div>
                <SearchResults
                  query={query}
                  characters={characters}
                  loading={loading}
                  error={error}
                />
              </>
            }
          />
          <Route path='/character/:name' element={<CharacterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
