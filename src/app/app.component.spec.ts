import { AppComponent } from "./app.component";
import { JsonPlaceholderService } from './shared/services/json-placeholder/json-placeholder.service';
import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { LogType } from './shared/models/LogType';
import { Post } from './shared/models/Post';
import { AppRoutingModule } from './app-routing.module';


import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let spyJsonPlaceholderService: jasmine.SpyObj<JsonPlaceholderService>;
  let router: Router;
  let location: Location;
    beforeAll(() => {
    spyJsonPlaceholderService = jasmine.createSpyObj<JsonPlaceholderService>('JsonPlaceholderService', ['getPosts']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: JsonPlaceholderService, useValue: spyJsonPlaceholderService
        }
      ],
      declarations: [AppComponent],
      imports:[RouterTestingModule]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    router.initialNavigation();
  });

  it('should go to Home Page if url "" is present ', fakeAsync(() => {
    component.navigate('');
    tick();
    expect(location.path()).toBe('/');
  }));

  it('should create successfully', () => {
    expect(component).toBeDefined();
  });

  it('should set the title correctly', () => {
    component.setTitle('new-title');

    expect(component.title).toEqual('new-title');
  });

  it('should set the posts array to the result of getPosts() called from the jsonPlaceholderService', () => {
    const MOCK_POSTS: Post[] = [
      {
        id: 1,
        userId: 1,
        body: 'body1',
        title: 'title1'
      },
      {
        id: 2,
        userId: 2,
        body: 'body2',
        title: 'title2'
      },
      {
        id: 3,
        userId: 3,
        body: 'body3',
        title: 'title3'
      }
    ];
    spyJsonPlaceholderService.getPosts.and.returnValue(of(MOCK_POSTS));

    component.getPosts();

    expect(component.posts).toEqual(MOCK_POSTS);
  });

  it('should check if there is a div element with content unit-testing-demo', () => {
    const divElement: HTMLElement = fixture.nativeElement.querySelector('#app-title');

    expect(divElement.textContent).toEqual('unit-testing-demo');
  });

  it('should call logMessageInDatabase() when logger() is called with LogType.DATABASE', () => {
    const spyLogMessageInDatabase = spyOn(component, 'logMessageInDatabase');

    component.logger('some message', LogType.DATABASE);

    expect(spyLogMessageInDatabase).toHaveBeenCalledWith('some message');
  });

  it('should call logMessageInFile() when logger() is called with LogType.FILE', () => {
    const spyLogMessageInFile = spyOn(component, 'logMessageInFile');

    component.logger('some message', LogType.FILE);

    expect(spyLogMessageInFile).toHaveBeenCalledWith('some message');
  });

  it('should call console.log() when logger() is called with LogType.CONSOLE', () => {
    const spyLogMessageInConsole = spyOn(console, 'log');

    component.logger('some message', LogType.CONSOLE);

    expect(spyLogMessageInConsole).toHaveBeenCalledWith('some message');
  });

  it('should toggle the title to other-title if the title is unit-testing-demo',()=>{
    component.setTitle('unit-testing-demo');
    component.toggleTitle();
    
    expect(component.title).toEqual('other-title');

  });
  it('should toggle the title to unit-testing-demo if the title is other-title',()=>{
    component.setTitle('other-title');
    component.toggleTitle();
    
    expect(component.title).toEqual('unit-testing-demo');

  });

});