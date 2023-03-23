import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { UrlBarComponent } from './url-bar.component';

@NgModule({
  declarations: [UrlBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxJsonViewerModule,
  ],
  providers: [],
  exports: [UrlBarComponent],
})
export class UrlBarModule {}
