export interface searchResponseState {
  title: string;
  genres: string[];
  year: string;
  rating: string;
  medium_cover_image: string;
}

export interface SearchContextType {
  search: string;
  response: searchResponseState[];
}
