import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieDetails } from '../models/movie-details.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  http = inject(HttpClient);

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>('movies');
  }

  getMovieDetails(idMovie: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`movies/` + encodeURIComponent(idMovie));
  }

  constructor() {}
}
