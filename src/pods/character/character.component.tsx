import * as React from 'react';
import { CharacterVm } from './character.vm';

interface Props {
  character: CharacterVm;
}

export const CharacterComponent: React.FunctionComponent<Props> = ({ character }) => {
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', border: '1px solid #ccc', borderRadius: 8, padding: 24 }}>
      <img src={character.image} alt={character.name} style={{ width: '100%', borderRadius: 8 }} />
      <h2>{character.name}</h2>
      <div><strong>Especie:</strong> {character.species}</div>
      <div><strong>Estado:</strong> {character.status}</div>
      <div><strong>Género:</strong> {character.gender}</div>
      {character.bestSentence && (
        <div style={{ marginTop: 16 }}>
          <strong>Mejor frase:</strong>
          <blockquote style={{ fontStyle: 'italic', color: '#555' }}>{character.bestSentence}</blockquote>
        </div>
      )}
    </div>
  );
};
