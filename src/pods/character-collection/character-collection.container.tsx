import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { useCharacterCollectionGraphqlVm } from './character-collection-graphql.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const graphql = useCharacterCollectionGraphqlVm();
  const navigate = useNavigate();

  const {
    characterCollection,
    page,
    totalPages,
    setPage,
    search,
    onSearch,
    loading,
    error,
  } = graphql;

  React.useEffect(() => {
    setPage(page);
  }, []);

  const handleDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        {loading && <span style={{ marginLeft: 16 }}>Cargando...</span>}
        {error && (
          <span style={{ color: 'red', marginLeft: 16 }}>
            Error al cargar datos
          </span>
        )}
      </div>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onDetail={handleDetail}
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        search={search}
        onSearch={onSearch}
      />
    </>
  );
};
