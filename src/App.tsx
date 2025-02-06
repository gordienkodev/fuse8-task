import styles from './App.module.scss';
import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const [result, setResult] = useState('');
  console.log(result);
  return (
    <div className={styles.container}>
      <SearchForm onSearch={setResult} />
      <SearchResults />
    </div>
  );
};

export default App;
