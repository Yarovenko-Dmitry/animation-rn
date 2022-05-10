import { Animated } from 'react-native';

export type GenresListType = {
  [key: number]: string;
};

export type MovieType = {
  backdrop?: string;
  description?: string;
  genres?: string[];
  key: string;
  poster?: string;
  rating?: number;
  releaseDate?: string;
  title?: string;
};

export type GenresType = {
  genres: string[] | undefined;
};

export type RatingType = {
  rating: number | undefined;
};

export type BackdropType = {
  movies: MovieType[];
  scrollX: Animated.Value;
};

export type ResultType = {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export type FetchDataType = () => void;

export type getPathType = (path: string) => string;

export type GetMoviesType = () => Promise<MovieType[]>;
