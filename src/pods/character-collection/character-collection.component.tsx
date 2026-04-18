import * as React from 'react';
import { Pagination } from '../../common/components/pagination.component';
import {
  mainContainer,
  formContainer,
  searchInput,
  searchButton,
  characterList,
  characterItem,
  characterImage,
} from './character-collection.styles';
import { pageTitle, searchForm } from './character-collection.component.styles';
import { CharacterCollectionComponentProps } from './character-collection.model';

export const CharacterCollectionComponent: React.FunctionComponent<CharacterCollectionComponentProps> = (props) => {
  const { characterCollection, onDetail, page, totalPages, onPageChange, search, onSearch } = props;
  const [input, setInput] = React.useState(search);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div className={mainContainer}>
      <h2 className={pageTitle}>Personajes de Rick & Morty</h2>
      <form onSubmit={handleSubmit} className={`${formContainer} ${searchForm}`}>
        <input
          type="text"
          placeholder="Buscar personaje por nombre..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className={searchInput}
        />
        <button type="submit" className={searchButton}>Buscar</button>
      </form>
      <ul className={characterList}>
        {characterCollection.map((character) => (
          <li key={character.id} className={characterItem} onClick={() => onDetail(character.id)}>
            <img src={character.image} alt={character.name} className={characterImage} />
            <div>
              <strong>{character.name}</strong>
              <div>{character.species}</div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};
