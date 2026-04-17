import * as React from 'react';
import { CharacterVm } from './character.vm';

interface Props {
  character: CharacterVm;
  onSave: (character: CharacterVm) => void;
}

export const CharacterEditComponent: React.FunctionComponent<Props> = ({ character, onSave }) => {
  const [bestSentence, setBestSentence] = React.useState(character.bestSentence || '');

  const handleSave = () => {
    onSave({ ...character, bestSentence });
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', border: '1px solid #ccc', borderRadius: 8, padding: 24 }}>
      <img src={character.image} alt={character.name} style={{ width: '100%', borderRadius: 8 }} />
      <h2>{character.name}</h2>
      <div><strong>Especie:</strong> {character.species}</div>
      <div><strong>Estado:</strong> {character.status}</div>
      <div><strong>Género:</strong> {character.gender}</div>
      <div style={{ marginTop: 16 }}>
        <strong>Mejor frase:</strong>
        <textarea
          value={bestSentence}
          onChange={e => setBestSentence(e.target.value)}
          rows={3}
          style={{ width: '100%', marginTop: 8 }}
        />
      </div>
      <button style={{ marginTop: 16 }} onClick={handleSave}>Guardar</button>
    </div>
  );
};
