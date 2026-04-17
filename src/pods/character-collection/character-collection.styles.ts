import { css } from '@emotion/css';

export const formContainer = css`
  margin-bottom: 1rem;
  text-align: center;
`;

export const searchInput = css`
  padding: 0.5rem;
  min-width: 15rem;
`;

export const searchButton = css`
  margin-left: 0.5rem;
  padding: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #bbb;
  font-size: 1rem;
  color: #333;
`;

export const characterList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

export const characterItem = css`
  width: 12.5rem;
  cursor: pointer;
`;

export const characterImage = css`
  width: 100%;
  border-radius: 0.5rem;
`;
