import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { priceRangeValidator } from '../price-range.directive';

@Component({
  selector: 'hinv-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  @Output() added = new EventEmitter<Product>();

  showPriceRangeHint = false;

  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, priceRangeValidator()],
    }),
  });

  constructor(private productsService: ProductsService) {}

  get name() {
    return this.productForm.controls.name;
  }
  get price() {
    return this.productForm.controls.price;
  }

  createProduct() {
    this.productsService
      .addProduct(this.name.value, Number(this.price.value))
      .subscribe((product) => {
        this.productForm.reset();
        this.added.emit(product);
      });
  }

  ngOnInit(): void {
    this.price.valueChanges.subscribe((price) => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    });
  }
}
