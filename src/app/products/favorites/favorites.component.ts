import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { favoritesFactory } from '../favorites';

@Component({
  selector: 'hinv-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [{ provide: ProductsService, useFactory: favoritesFactory(true) }],
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  private getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
