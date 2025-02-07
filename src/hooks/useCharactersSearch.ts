import { useState, useEffect } from 'react';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  created: string;
}

export const useCharactersSearch = (query: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query.length < 3) {
      setCharacters([]);
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
          throw new Error(data.error || 'Ошибка загрузки данных');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ошибка запроса');
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [query]);

  return { characters, loading, error };
};
