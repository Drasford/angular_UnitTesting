import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  ROOT_URL = 'http://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  /**
   * Makes a http get request to the JsonPlaceholder API to retrieve a list of posts
   */
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.ROOT_URL}posts`)
  }
}