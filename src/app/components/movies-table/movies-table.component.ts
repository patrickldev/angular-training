import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MinutsToHours } from '../../pipes/minuts-to-hours';

@Component({
  selector: 'app-movies-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, MinutsToHours],
  templateUrl: './movies-table.component.html',
  styleUrl: './movies-table.component.css',
})
export class MoviesTableComponent implements OnChanges {
  route = inject(Router);
  @Input() movieList: Movie[] = [];
  movieFiltered: Movie[] = [];
  filterText: string = '';
  filterYear: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.movieFiltered = this.movieList;
  }

  movieDetails(movieId?: string) {
    if (movieId) {
      this.route.navigate([`movies/${movieId}`]);
    }
  }

  filter() {
    if (this.filterText == '' && this.filterYear == '') {
      this.movieFiltered = this.movieList;
    } else if (this.filterYear == '' || this.filterText == '') {
      if (this.filterYear == '') {
        this.movieFiltered = this.movieList.filter((p) =>
          p.title?.toLowerCase().includes(this.filterText.toLowerCase())
        );
      } else {
        this.movieFiltered = this.movieList.filter((p) =>
          p.release_date?.toLowerCase().includes(this.filterYear.toLowerCase())
        );
      }
    } else {
      this.movieFiltered = this.movieList.filter(
        (p) =>
          p.title?.toLowerCase().includes(this.filterText.toLowerCase()) &&
          p.release_date?.toLowerCase().includes(this.filterYear.toLowerCase())
      );
    }
  }
}
