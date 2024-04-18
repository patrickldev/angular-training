import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';
import { MoviesTableComponent } from '../../components/movies-table/movies-table.component';
import { MinutsToHours } from '../../pipes/minuts-to-hours';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MoviesTableComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export default class MoviesComponent implements OnInit {
  movieService = inject(MoviesService);
  movieList: Movie[] = [];

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.movieService.getMovieList().subscribe((data) => {
      this.movieList = data;
      console.log(this.movieList);
    });
  }
}
