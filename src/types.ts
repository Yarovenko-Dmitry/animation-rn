export type GenresListType = {
  [key:number]: string
}

export type MovieType = {
  key: string,
  title: string,
  poster: string,
  backdrop: string,
  rating: number,
  description: string,
  releaseDate: string,
  genres: string[],
}

export  type  GenresType = {
  genres: string[]
}

export  type  RatingType = {
  rating: number
}
