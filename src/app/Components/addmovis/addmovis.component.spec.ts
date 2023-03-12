import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmovisComponent } from './addmovis.component';

describe('AddmovisComponent', () => {
  let component: AddmovisComponent;
  let fixture: ComponentFixture<AddmovisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmovisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmovisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
