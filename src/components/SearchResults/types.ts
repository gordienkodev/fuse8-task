export type TSearchResultsProps = {
  query: string;
  characters: {
    id: number;
    name: string;
    status: string;
    species: string;
    created: string;
  }[];
  loading: boolean;
  error: string;
};
