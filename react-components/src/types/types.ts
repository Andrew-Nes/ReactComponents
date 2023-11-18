export interface searchResponseState {
  id: string;
  title: string;
  genres: string[];
  year: string;
  rating: string;
  medium_cover_image: string;
  summary: string;
  large_cover_image: string;
}

export interface SearchContextType {
  response: searchResponseState[];
}
