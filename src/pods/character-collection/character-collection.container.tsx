import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, page, totalPages, setPage, search, onSearch } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    setPage(page);
    // eslint-disable-next-line
  }, []);

  const handleDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onDetail={handleDetail}
      page={page}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      search={search}
      onSearch={onSearch}
    />
  );
};
