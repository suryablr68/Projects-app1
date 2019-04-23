import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppPageNotFoundComponent } from './my-app-page-not-found.component';

describe('MyAppPageNotFoundComponent', () => {
  let component: MyAppPageNotFoundComponent;
  let fixture: ComponentFixture<MyAppPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
