import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMatchProfileComponent } from './router-match-profile.component';

describe('RouterMatchProfileComponent', () => {
  let component: RouterMatchProfileComponent;
  let fixture: ComponentFixture<RouterMatchProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMatchProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterMatchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
