import { CharacterVm } from './character.vm';

export interface CharacterEditProps {
  character: CharacterVm;
  onSave: (character: CharacterVm) => void;
}
