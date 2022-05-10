import { API_KEY } from '@env';

import {
  GenresListType,
  GetMoviesType,
  getPathType,
  MovieType,
  ResultType,
} from '../types';

const GENRES: GenresListType = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

const getImagePath: getPathType = path =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath: getPathType = path =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies: GetMoviesType = async () => {
  const { results } = await fetch(API_URL).then(result => result.json());
  const movies: MovieType[] = results.map(
    ({
      backdrop_path,
      genre_ids,
      id,
      original_title,
      overview,
      poster_path,
      release_date,
      vote_average,
    }: ResultType) => ({
      backdrop: getBackdropPath(backdrop_path),
      description: overview,
      genres: genre_ids.map((genre: number) => GENRES[genre]),
      key: String(id),
      poster: getImagePath(poster_path),
      rating: vote_average,
      releaseDate: release_date,
      title: original_title,
    }),
  );

  return movies;
};
