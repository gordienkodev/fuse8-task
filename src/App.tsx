import styles from './App.module.scss';
import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const [query, setQuery] = useState('');
  return (
    <div className={styles.container}>
      <SearchForm onSearch={setQuery} />
      <SearchResults query={query} />
    </div>
  );
};

export default App;
