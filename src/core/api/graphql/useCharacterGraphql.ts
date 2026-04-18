import { useQuery, QueryResult } from '@apollo/client/react';
import { GET_CHARACTER } from './character.queries';
import { CharacterVm } from '../../../pods/character/character.vm';
import { mapCharacterGraphqlToVm } from '../../../pods/character/character.mappers';

export interface CharacterGraphql {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  bestSentence?: string;
}

export interface CharacterData {
  character?: CharacterGraphql | null;
}

export const useCharacterGraphql = (id: string) => {
  const { data, loading, error }: QueryResult<CharacterData> = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  let characterVm: CharacterVm | undefined = undefined;
  if (data?.character && typeof data.character.id === 'string') {
    characterVm = mapCharacterGraphqlToVm(data.character as CharacterGraphql);
  }

  return {
    character: characterVm,
    loading,
    error,
  };
};
