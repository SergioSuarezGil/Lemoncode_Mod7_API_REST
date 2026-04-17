import axios from 'axios';
import { CharacterApi } from './character.api-model';

const baseUrl = 'http://localhost:3000/api/character';

export const getCharacter = async (id: number): Promise<CharacterApi> => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const updateCharacter = async (
  character: CharacterApi
): Promise<void> => {
  await axios.put(`${baseUrl}/${character.id}`, character);
};
