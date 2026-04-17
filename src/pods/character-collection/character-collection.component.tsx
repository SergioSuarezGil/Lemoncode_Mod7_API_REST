import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';

interface Props {
  characterCollection: CharacterEntityVm[];
  onDetail: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onDetail } = props;

  return (
    <div>
      <h2>Personajes de Rick & Morty</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
        {characterCollection.map((character) => (
          <li key={character.id} style={{ width: 200, cursor: 'pointer' }} onClick={() => onDetail(character.id)}>
            <img src={character.image} alt={character.name} style={{ width: '100%', borderRadius: 8 }} />
            <div>
              <strong>{character.name}</strong>
              <div>{character.species}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
