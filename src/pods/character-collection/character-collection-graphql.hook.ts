import * as React from 'react';
import { useCharacterCollectionGraphql } from '../../core/api/graphql/useCharacterCollectionGraphql';
import { mapFromApiToVm } from './character-collection.mapper';

export const useCharacterCollectionGraphqlVm = () => {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const limit = 14;
  const { characters, info, loading, error } = useCharacterCollectionGraphql(page, search, limit);

  const characterCollection = React.useMemo(
    () =>
      characters
        ? characters
            .filter((item): item is import('../../core/api/graphql/useCharacterCollectionGraphql').Character =>
              typeof item.id === 'string' && !!item.id
            )
            .map(mapFromApiToVm)
        : [],
    [characters]
  );

  const totalPages = info?.pages || 1;

  const handleSearch = (name: string) => {
    setSearch(name);
    setPage(1);
  };

  return {
    characterCollection,
    page,
    totalPages,
    setPage,
    search,
    onSearch: handleSearch,
    loading,
    error,
  };
};
