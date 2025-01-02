import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 100px;
  line-height: 2.5rem;
  margin-top: 0.7rem;
  padding: 0.5rem 2rem;
  width: 100%;

  &::placeholder {
    color: var(--placeholder);
    font-size: inherit;
    font-weight: inherit;
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: inherit;
  outline: none;
  width: 100%;
`;
