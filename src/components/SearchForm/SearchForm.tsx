import { useState } from 'react';
import styles from './SearchForm.module.scss';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearch(query);
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Search characters...'
        autoFocus
      />
    </form>
  );
};

export default SearchForm;
