import { SearchContainer, SearchInput } from "./style";

export function SearchBar() {
  return (
    <div>
      <SearchContainer>
        <SearchInput type="search" placeholder="Pesquise..." />
      </SearchContainer>
    </div>
  );
}
