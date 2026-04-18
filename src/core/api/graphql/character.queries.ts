
import { gql } from '@apollo/client';
import { CHARACTER_FIELDS_FRAGMENT } from './character-fragment.graphql';

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterFields
    }
  }
  ${CHARACTER_FIELDS_FRAGMENT}
`;
