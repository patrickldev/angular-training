import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../models/movie-details.model';
import { CommonModule } from '@angular/common';
import { MinutsToHours } from '../../pipes/minuts-to-hours';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, MinutsToHours],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export default class MovieDetailsComponent implements OnInit {
  movieService = inject(MoviesService);
  movieDetails?: MovieDetails;
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.movieService
      .getMovieDetails(this.route.snapshot.paramMap.get('id')!)
      .subscribe((data) => {
        this.movieDetails = data;
        console.log(this.movieDetails);
      });
  }

  backToList() {
    this.router.navigate(['movies']);
  }
}
