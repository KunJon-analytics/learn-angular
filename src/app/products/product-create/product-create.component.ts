import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'hinv-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  @Output() added = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) {}

  createProduct(name: string, price: number) {
    this.productsService.addProduct(name, price).subscribe((product) => {
      this.added.emit(product);
    });
  }

  ngOnInit(): void {}
}
