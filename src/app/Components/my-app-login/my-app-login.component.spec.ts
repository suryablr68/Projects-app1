import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppLoginComponent } from './my-app-login.component';

describe('MyAppLoginComponent', () => {
  let component: MyAppLoginComponent;
  let fixture: ComponentFixture<MyAppLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
