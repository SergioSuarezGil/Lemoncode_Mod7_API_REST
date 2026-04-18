import React from 'react';
import { paginationContainer, paginationButton, paginationButtonActive } from './pagination.styles';
import { PaginationProps } from './pagination.model';


export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;


  const MAX_PAGES_TO_SHOW = 10;
  const currentBlock = Math.floor((page - 1) / MAX_PAGES_TO_SHOW);
  const startPage = currentBlock * MAX_PAGES_TO_SHOW + 1;
  const endPage = Math.min(startPage + MAX_PAGES_TO_SHOW - 1, totalPages);

  const renderPageButtons = () =>
    Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((p) => (
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
      {startPage > 1 && (
        <button
          onClick={() => onPageChange(startPage - 1)}
          className={paginationButton}
        >
          ...
        </button>
      )}
      {renderPageButtons()}
      {endPage < totalPages && (
        <button
          onClick={() => onPageChange(endPage + 1)}
          className={paginationButton}
        >
          ...
        </button>
      )}
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
