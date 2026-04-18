import { CharacterVm } from './character.vm';

export interface CharacterGraphql {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  bestSentence?: string;
}

export const mapCharacterGraphqlToVm = (
  api: CharacterGraphql
): CharacterVm => ({
  id: Number(api.id),
  name: api.name,
  image: api.image,
  species: api.species,
  status: api.status,
  gender: api.gender,
  bestSentence: api.bestSentence,
});
