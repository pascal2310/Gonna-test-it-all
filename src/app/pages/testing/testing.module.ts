import { NgModule } from '@angular/core';
import { UrlBarModule } from 'src/app/components/url-bar/url-bar.module';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

@NgModule({
  declarations: [TestingComponent],
  imports: [TestingRoutingModule, UrlBarModule],
  providers: [],
})
export class TestingModule {}
