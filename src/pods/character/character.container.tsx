import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterGraphql } from '../../core/api/graphql/useCharacterGraphql';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const { character, loading, error } = useCharacterGraphql(id!);

  if (loading) return <div>Cargando...</div>;
  if (error || !character) return <div>Error al cargar el personaje</div>;

  return <CharacterComponent character={character} />;
};
