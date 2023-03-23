import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostmanMenuModule } from 'src/app/components/postman-menu/postman-menu.module';
import { UrlBarModule } from 'src/app/components/url-bar/url-bar.module';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

@NgModule({
  declarations: [TestingComponent],
  imports: [
    CommonModule,
    TestingRoutingModule,
    UrlBarModule,
    PostmanMenuModule,
  ],
  providers: [],
})
export class TestingModule {}
