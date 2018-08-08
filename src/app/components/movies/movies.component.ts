import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import * as _ from 'lodash';
@Component({selector: 'app-movies', templateUrl: './movies.component.html', styleUrls: ['./movies.component.css']})
export class MoviesComponent implements OnInit {
  movies;
  movieData;
  timeout : any;
  newPage;
  cache : any = {};
  page;
  newMovieData;
  @ViewChild('myTable')table;

  private isLoading : boolean = false;
  columns : any[] = [
    {
      prop: 'Title'
    }, {
      prop: 'Type'
    }, {
      prop: 'Year'
    }, {
      prop: 'Poster'
    }, {
      prop: 'imdbID'
    }
  ];
  pageCount;
  constructor(private movieService : MovieService) {
    // this.setPage({offset: 0, pageSize: 10});
  }

  ngOnInit() {
    this.page = 1;
    this
      .movieService
      .getMovies(this.page)
      .subscribe((result) => {
        console.log(result);
        this.movieData = result;
        this.movies = _.sortBy(this.movieData.data, 'Title');
        this.pageCount = this.movieData.total_pages;
        for (let i = 2; i <= this.pageCount; i++) {
          let newPage = i;
          let url1 = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=' + newPage;
          console.log(newPage);
          this.getMovies(newPage);
        }
      })
  }
  getMovies(page) {
    this
      .movieService
      .getMovies(page)
      .subscribe((data) => {
        console.log(data);
        this.newMovieData = data;
        this
          .newMovieData
          .data
          .forEach(item => {
            console.log(item);
            this
              .movies
              .push(item);
            this.movies = _.sortBy(this.movies, 'Title');
            console.log(this.movies);
          });
      });
  }
}
