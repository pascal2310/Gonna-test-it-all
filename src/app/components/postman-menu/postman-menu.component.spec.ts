import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmanMenuComponent } from './postman-menu.component';

describe('PostmanMenuComponent', () => {
  let component: PostmanMenuComponent;
  let fixture: ComponentFixture<PostmanMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostmanMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostmanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
