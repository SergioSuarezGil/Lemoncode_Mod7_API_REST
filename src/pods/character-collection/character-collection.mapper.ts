import { CharacterEntityApi } from './api/character-collection.api-model';
import { CharacterEntityVm } from './character-collection.vm';

export const mapFromApiToVm = (api: CharacterEntityApi[]): CharacterEntityVm[] =>
  api.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    species: item.species,
  }));
