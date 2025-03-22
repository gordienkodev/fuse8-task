import { useState, useEffect } from 'react';
import styles from './SearchForm.module.scss';
import { ISearchFormProps } from './types';

const SearchForm = ({ onSearch }: ISearchFormProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length < 3) {
      onSearch('');
      return;
    }

    const timeout = setTimeout(() => {
      onSearch(query);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  return (
    <form className={styles.searchForm}>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search characters...'
        autoFocus
      />
    </form>
  );
};

export default SearchForm;
