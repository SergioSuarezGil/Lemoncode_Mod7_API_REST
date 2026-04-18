

import * as React from 'react';
import { CharacterComponentProps } from './character.model';
import { useNavigate } from 'react-router-dom';
import { characterCard, characterImage, characterInfo, bestSentence } from './character.styles';
import { backButton } from './character.component.styles';

export const CharacterComponent: React.FunctionComponent<CharacterComponentProps> = ({ character }) => {
  const navigate = useNavigate();
  return (
    <div className={characterCard}>
      <button onClick={() => navigate(-1)} className={backButton}>&larr; Volver</button>
      <img src={character.image} alt={character.name} className={characterImage} />
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
