import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostmanCollection } from 'src/app/interfaces/postman.interface';

@Component({
  selector: 'app-postman-menu',
  templateUrl: './postman-menu.component.html',
})
export class PostmanMenuComponent {
  @Input() collection: PostmanCollection;

  @Output() emitItem = new EventEmitter<string>();

  clickItem(url: string) {
    this.emitItem.emit(url);
  }
}
