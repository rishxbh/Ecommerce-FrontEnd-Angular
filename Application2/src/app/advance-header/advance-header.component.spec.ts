import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceHeaderComponent } from './advance-header.component';

describe('AdvanceHeaderComponent', () => {
  let component: AdvanceHeaderComponent;
  let fixture: ComponentFixture<AdvanceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
