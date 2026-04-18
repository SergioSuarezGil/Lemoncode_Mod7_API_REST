import { gql } from '@apollo/client';

export const CHARACTER_FIELDS_FRAGMENT = gql`
  fragment CharacterFields on Character {
    id
    name
    status
    species
    gender
    image
  }
`;
