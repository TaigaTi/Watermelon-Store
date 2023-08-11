import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSubComponent } from './cart-sub.component';

describe('CartSubComponent', () => {
  let component: CartSubComponent;
  let fixture: ComponentFixture<CartSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartSubComponent]
    });
    fixture = TestBed.createComponent(CartSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
