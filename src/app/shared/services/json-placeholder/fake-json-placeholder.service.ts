import { Injectable } from "@angular/core";
import { JsonPlaceholderService } from './json-placeholder.service';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/Post';

const MOCK_FAKE_SERVICE_POSTS: Post[] = [
  {
    id: 1,
    userId: 1,
    body: 'fake service body 1',
    title: 'fake service title 1',
  },
  {
    id: 2,
    userId: 2,
    body: 'fake service body 2',
    title: 'fake service title 2',
  }
];

@Injectable({
  providedIn: 'root'
})
export class FakeJsonPlaceholderService extends JsonPlaceholderService {
  ROOT_URL = 'http://jsonplaceholder.typicode.com/';

  getPosts(): Observable<Post[]> {
    return of(MOCK_FAKE_SERVICE_POSTS);
  }
}