import { css } from '@emotion/css';

export const paginationContainer = css`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const paginationButton = css`
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  border-radius: 0.1rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export const paginationButtonActive = css`
  background: #e0e0e0;
  border-color: #888;
`;
