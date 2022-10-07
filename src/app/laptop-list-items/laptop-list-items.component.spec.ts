import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopListItemsComponent } from './laptop-list-items.component';

describe('LaptopListItemsComponent', () => {
  let component: LaptopListItemsComponent;
  let fixture: ComponentFixture<LaptopListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopListItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
