import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title';
  constructor(private http: HttpClient) { }
  getMovies(page) {
    let pageNum = page;
    return this
            .http
            .get(`${this.url}=spiderman&page=` + pageNum);
        }
}
