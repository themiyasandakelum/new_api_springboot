import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaddetailsComponent } from './loaddetails.component';

describe('LoaddetailsComponent', () => {
  let component: LoaddetailsComponent;
  let fixture: ComponentFixture<LoaddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
