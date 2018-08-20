import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MovieService } from '../movie.service';
import { CardService } from '../card.service';
import { MovieDetails } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  movieTitle: any;
  addedList;
  newMovie;
  private mov = new MovieDetails();
  constructor(private router: ActivatedRoute, private movieService: MovieService, private cardservice: CardService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.movieService.getMovie(id).subscribe(data => {
        this.movie = data;
      });
    });
  }
  addMovie(movie) {
    this.mov.movieId = movie.id;
    this.mov.movieTitle = movie.original_title;
    this.mov.movieRating = movie.vote_count;
    return this.cardservice.addMovie(this.mov).subscribe(data => (this.mov = data));
  }
}
