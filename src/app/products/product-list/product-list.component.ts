import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'hinv-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product | undefined;
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  private getProducts() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.push(product);
  }

  onDelete() {
    this.products = this.products.filter(
      (product) => product !== this.selectedProduct
    );
    this.selectedProduct = undefined;
  }
}
