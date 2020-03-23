import { Component } from '@angular/core';
import { JsonPlaceholderService } from './shared/services/json-placeholder/json-placeholder.service';
import { LogType } from './shared/models/LogType';
import { Router } from '@angular/router';
import { Post } from './shared/models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title: string;
  posts: Post[];

  constructor(private jsonPlaceholderService: JsonPlaceholderService, private router: Router) { }

  setTitle(title: string) {
    this.title = title;
  }

  /**
   * Subscribes to an observable of posts array from the JsonPlaceholder
   * and sets the posts array to the result of the emitted observable value
   */
  getPosts(): void {
    this.jsonPlaceholderService.getPosts().subscribe(value => this.posts = value);
  }

  /**
   * 
   * @param message a message that should be logged
   * @param logType a type of log that should be used
   */
  logger(message: string, logType: LogType): void {
    switch (logType) {
      case LogType.DATABASE:
        this.logMessageInDatabase(message);
        break;
      case LogType.FILE:
        this.logMessageInFile(message);
        break;
      default:
        console.log(message);
        break;
    }
  }

  /**
   * Toggles the title property between 'unit-testing-demo' and 'other-title'
   */
  toggleTitle(): void {
    this.title === 'unit-testing-demo' ? this.title = 'other-title' : this.title = 'unit-testing-demo';
  }

  /* istanbul ignore next */
  // istanbul ignore next -> ignore the next function from the code coverage report
  /**
   * This method should not be covered with unit tests
   * @param message a message that should be logged in a database
   */
  logMessageInDatabase(message: string) {
    return message;
  }

  /* istanbul ignore next */
  // istanbul ignore next -> ignore the next function from the code coverage report
  /**
   * This method should not be covered with unit tests
   * @param message a message that should be logged in a file
   */
  logMessageInFile(message: string) { 
    return message;
  }

  /**
  * 
  * @param url the url to navigate to
  */
  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }
}
