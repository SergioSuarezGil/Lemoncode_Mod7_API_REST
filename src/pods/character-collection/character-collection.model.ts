export interface CharacterCollectionComponentProps {
  characterCollection: import('./character-collection.vm').CharacterEntityVm[];
  onDetail: (id: number) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  search: string;
  onSearch: (name: string) => void;
}
