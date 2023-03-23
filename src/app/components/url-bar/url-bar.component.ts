import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-url-bar',
  templateUrl: './url-bar.component.html',
})
export class UrlBarComponent implements OnChanges {
  @Input() url: string;
  urlInput = new FormControl();
  response$: Observable<any>;
  sendRequest$ = new Subject<string>();
  diffJson$ = new Subject<string>();
  jsonDiffResult$: Observable<any>;
  constructor(private readonly httpService: HttpService) {
    this.response$ = this.sendRequest$.pipe(
      switchMap(() => this.httpService.get(this.url))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['url']) {
      this.urlInput.setValue(changes['url'].currentValue);
    }
  }

  //make this enum get post etc
  sendRequest(type: string) {
    this.sendRequest$.next(type);
  }

  diffJson() {
    this.diffJson$.next('');
  }
}
