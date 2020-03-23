import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { JsonPlaceholderService } from './json-placeholder.service';
import { Observable, of } from 'rxjs';
import { Post } from '../../models/Post';


const MOCK_POSTS: Post[] = [
  {
    id: 1,
    userId: 1,
    body: 'body 1',
    title: 'title 1',
  },
  {
    id: 2,
    userId: 2,
    body: 'body 2',
    title: 'title 2',
  }
];

// describe('JsonPlaceholderService', () => {
//  let httpServiceSpy: jasmine.SpyObj<HttpClient>;
//  let jsonPlaceholderService: JsonPlaceholderService;
//   beforeAll(()=>{
//     httpServiceSpy = jasmine.createSpyObj('HttpClient',['get']);
//     TestBed.configureTestingModule({
//       imports:[
//         HttpClientTestingModule
//       ],
//       providers:[
//         {
//           provide: HttpClient, useValue: httpServiceSpy
//         }
//       ]
//     });
//     jsonPlaceholderService = TestBed.inject(JsonPlaceholderService);
//   });
  

  // it('should create successfully', () => {
  //   expect(jsonPlaceholderService).toBeDefined();
  // });
 
  // it('should return an observable of posts when getPosts() is called', () => {
  //   httpServiceSpy.get.and.returnValue(of(MOCK_POSTS));

  //   const actualResult = jsonPlaceholderService.getPosts();

  //   actualResult.subscribe(value => expect(value).toEqual(MOCK_POSTS));
  // });
//});