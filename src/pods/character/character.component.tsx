
import * as React from 'react';
import { CharacterComponentProps } from './character.model';
import { characterCard, characterImage, characterInfo, bestSentence } from './character.styles';

export const CharacterComponent: React.FunctionComponent<CharacterComponentProps> = ({ character }) => {
  return (
    <div className={characterCard}>
      <img src={character.image} alt={character.name} style={{ width: '100%', borderRadius: 8 }} />
      <h2>{character.name}</h2>
      <div><strong>Especie:</strong> {character.species}</div>
      <div><strong>Estado:</strong> {character.status}</div>
      <div><strong>Género:</strong> {character.gender}</div>
      {character.bestSentence && (
        <div className={characterInfo}>
          <strong>Mejor frase:</strong>
          <blockquote className={bestSentence}>{character.bestSentence}</blockquote>
        </div>
      )}
    </div>
  );
};
