import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPreviewComponent } from './default-preview.component';

describe('DefaultPreviewComponent', () => {
  let component: DefaultPreviewComponent;
  let fixture: ComponentFixture<DefaultPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
