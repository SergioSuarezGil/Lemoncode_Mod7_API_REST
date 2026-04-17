import { CharacterApi } from './api/character.api-model';
import { CharacterVm } from './character.vm';

export const mapFromApiToVm = (api: CharacterApi): CharacterVm => ({
  id: api.id,
  name: api.name,
  image: api.image,
  species: api.species,
  status: api.status,
  gender: api.gender,
  bestSentence: api.bestSentence,
});

export const mapFromVmToApi = (vm: CharacterVm): CharacterApi => ({
  id: vm.id,
  name: vm.name,
  image: vm.image,
  species: vm.species,
  status: vm.status,
  gender: vm.gender,
  type: '',
  bestSentence: vm.bestSentence,
});
