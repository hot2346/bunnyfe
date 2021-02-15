import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNaviComponent } from './products-navi.component';

describe('ProductsNaviComponent', () => {
  let component: ProductsNaviComponent;
  let fixture: ComponentFixture<ProductsNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
