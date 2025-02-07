import { useState, useEffect } from 'react';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  created: string;
}

export const useCharactersSearch = (query: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query.length <= 3) {
      setCharacters([]);
      setCount(0);
      setError('');
      return;
    }

    const fetchCharacters = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        const data = await response.json();
        if (response.ok) {
          setCount(data.info.count);
          setCharacters(
            (data.results as Character[])?.map(
              ({ id, name, status, species, created }) => ({
                id,
                name,
                status,
                species,
                created,
              })
            ) || []
          );
        } else {
          throw new Error(data.error || 'Data loading error');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Request error');
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [query]);

  return { count, characters, loading, error };
};
