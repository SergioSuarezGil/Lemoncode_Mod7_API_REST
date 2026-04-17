import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const baseUrl = 'http://localhost:3000/api/character';

export interface CharacterCollectionApiResponse {
  info: { count: number };
  results: CharacterEntityApi[];
}

export const getCharacterCollection = async (
  skip: number = 0,
  limit: number = 5,
  name?: string
): Promise<CharacterCollectionApiResponse> => {
  const params: any = { skip, limit };
  if (name) params.name = name;
  const response = await axios.get(baseUrl, { params });
  return response.data;
};
