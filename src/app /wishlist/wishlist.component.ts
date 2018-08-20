import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  deleteList;
  newMovie;
  addedList;
  public movieList = [];
@ Input() movieNa;
url;
  constructor(private movieDetails: CardService, private movieDetails2: MovieService) { }

  ngOnInit() {

  this.movieDetails.getWhishList().subscribe(fullList => this.movieList = fullList);
  console.log(this.movieList);
  }
  onWorking(id) {
    this.movieDetails.deleteWishList(id).subscribe(data => this.deleteList = data);
    console.log(this. deleteList);
  return this. deleteList;
    }
}
