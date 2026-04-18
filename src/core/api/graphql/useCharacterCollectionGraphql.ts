import { useQuery, QueryResult } from '@apollo/client/react';
import { GET_CHARACTERS } from './character-collection.queries';

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharactersInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

export interface CharactersData {
  characters: {
    info: CharactersInfo;
    results: Character[];
  };
}

export const useCharacterCollectionGraphql = (page: number, name?: string, limit: number = 14) => {
  const { data, loading, error }: QueryResult<CharactersData> = useQuery(GET_CHARACTERS, {
    variables: { page, name },
  });

  const allResults = data?.characters?.results ?? [];
  const paginatedResults = allResults.slice(0, limit);

  return {
    characters: paginatedResults,
    info: data?.characters?.info ?? {},
    loading,
    error,
  };
};
