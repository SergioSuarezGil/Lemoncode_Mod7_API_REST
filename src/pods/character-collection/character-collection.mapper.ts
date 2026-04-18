import { CharacterEntityVm } from './character-collection.vm';
import { Character } from '../../core/api/graphql/useCharacterCollectionGraphql';

export const mapFromApiToVm = (item: Character): CharacterEntityVm => ({
  id: Number(item.id),
  name: item.name,
  image: item.image,
  species: item.species,
});
