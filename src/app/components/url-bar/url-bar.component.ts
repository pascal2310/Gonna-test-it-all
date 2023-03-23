import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  combineLatest,
  filter,
  map,
  Observable,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-url-bar',
  templateUrl: './url-bar.component.html',
})
export class UrlBarComponent {
  url = new FormControl(
    'https://k8s-development.vandervalkonline.com/hotel-service/uat2/v1/hotels'
  );
  response$: Observable<any>;
  sendRequest$ = new Subject<string>();
  diffJson$ = new Subject<string>();
  jsonDiffResult$: Observable<any>;
  constructor(private readonly httpService: HttpService) {
    this.response$ = this.sendRequest$.pipe(
      switchMap(() => this.httpService.get(this.url.value!))
    );

    this.jsonDiffResult$ = combineLatest([
      this.response$,
      this.httpService.get<string>(
        'http://localhost:4200/assets/mock/hotels.json'
      ),
    ]).pipe(
      filter(([response, _mock]) => !!response),
      map(([response, mock]) => {
        return JSON.stringify(response) === JSON.stringify(mock);
      })
    );
  }

  //make this enum get post etc
  sendRequest(type: string) {
    this.sendRequest$.next(type);
  }

  diffJson() {
    this.diffJson$.next('');
  }
}
