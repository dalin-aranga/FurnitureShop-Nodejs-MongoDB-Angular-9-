import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurniturelistComponent } from './furniturelist.component';

describe('FurniturelistComponent', () => {
  let component: FurniturelistComponent;
  let fixture: ComponentFixture<FurniturelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurniturelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurniturelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
