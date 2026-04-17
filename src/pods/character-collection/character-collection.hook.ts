import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, CharacterCollectionApiResponse } from './api/character-collection.api';
import { mapFromApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const limit = 5; // paginación de 5 en 5

  const loadCharacterCollection = (newPage: number = page, newSearch: string = search) => {
    const skip = (newPage - 1) * limit;
    getCharacterCollection(skip, limit, newSearch).then((result: CharacterCollectionApiResponse) => {
      setCharacterCollection(mapFromApiToVm(result.results));
      setPage(newPage);
      setTotalPages(Math.ceil(result.info.count / limit));
    });
  };

  const handleSearch = (name: string) => {
    setSearch(name);
    loadCharacterCollection(1, name);
  };

  return { characterCollection, page, totalPages, setPage: loadCharacterCollection, search, onSearch: handleSearch };
};
