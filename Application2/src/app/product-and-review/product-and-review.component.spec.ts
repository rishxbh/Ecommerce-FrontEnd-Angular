import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAndReviewComponent } from './product-and-review.component';

describe('ProductAndReviewComponent', () => {
  let component: ProductAndReviewComponent;
  let fixture: ComponentFixture<ProductAndReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAndReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
