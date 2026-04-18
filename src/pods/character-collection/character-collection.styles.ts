export const mainContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
import { css } from '@emotion/css';

export const formContainer = css`
  margin-bottom: 1rem;
  text-align: center;
`;

export const searchInput = css`
  padding: 0.50rem;
  min-width: 12.50rem;
`;

export const searchButton = css`
  margin-left: 0.50rem;
  padding: 0.5rem;
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
  width: 12.50rem;
  cursor: pointer;
`;

export const characterImage = css`
  width: 100%;
  border-radius: 0.50rem;
`;
