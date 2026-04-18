import { gql } from '@apollo/client';
import { CHARACTER_FIELDS_FRAGMENT } from './character-fragment.graphql';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info { count pages next prev }
      results { ...CharacterFields }
    }
  }
  ${CHARACTER_FIELDS_FRAGMENT}
`;
