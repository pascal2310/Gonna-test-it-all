import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
})
export class TestingComponent {
  postmanCollection$ = this.httpService.getPostmanCollection();
  url: string;
  constructor(private readonly httpService: HttpService) {}

  clickUrl(url: string) {
    console.log(url);
    this.url = url;
  }
}
