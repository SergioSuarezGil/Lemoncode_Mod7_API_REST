import React from 'react';
import { paginationContainer, paginationButton, paginationButtonActive } from './pagination.styles';
import { PaginationProps } from './pagination.model';


export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const renderPageButtons = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
      <button
        key={p}
        onClick={() => onPageChange(p)}
        className={
          p === page
            ? `${paginationButton} ${paginationButtonActive}`
            : paginationButton
        }
        disabled={p === page}
      >
        {p}
      </button>
    ));

  return (
    <div className={paginationContainer}>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className={paginationButton}
      >
        &lt;
      </button>
      {renderPageButtons()}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className={paginationButton}
      >
        &gt;
      </button>
    </div>
  );
};
