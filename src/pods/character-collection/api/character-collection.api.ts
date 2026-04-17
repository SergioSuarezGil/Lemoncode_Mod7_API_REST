import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const baseUrl = 'http://localhost:3000/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await axios.get(baseUrl);
  return response.data.results;
};
