import * as React from 'react';
import { CharacterVm } from './character.vm';
import { CharacterEditProps } from './character-edit.model';
import {
  characterCard,
  characterImage,
  characterInfo,
  textArea,
  saveButton,
} from './character.styles';

export const CharacterEditComponent: React.FunctionComponent<CharacterEditProps> = ({ character, onSave }) => {
  const [bestSentence, setBestSentence] = React.useState(character.bestSentence || '');

  const handleSave = () => {
    onSave({ ...character, bestSentence });
  };

  return (
    <div className={characterCard}>
      <img src={character.image} alt={character.name} className={characterImage} />
      <h2>{character.name}</h2>
      <div><strong>Especie:</strong> {character.species}</div>
      <div><strong>Estado:</strong> {character.status}</div>
      <div><strong>Género:</strong> {character.gender}</div>
      <div className={characterInfo}>
        <strong>Mejor frase:</strong>
        <textarea
          value={bestSentence}
          onChange={e => setBestSentence(e.target.value)}
          rows={3}
          className={textArea}
        />
      </div>
      <button className={saveButton} onClick={handleSave}>Guardar</button>
    </div>
  );
};
