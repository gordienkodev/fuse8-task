import styles from './App.module.scss';
import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';

const App = () => {
  const [result, setResult] = useState('');
  console.log(result);
  return (
    <div className={styles.container}>
      <SearchForm onSearch={setResult} />
      {/* <SearchResults result={result} /> */}
    </div>
  );
};

export default App;
