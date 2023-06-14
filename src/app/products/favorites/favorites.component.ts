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

  ngOnInit(): void {
    this.products = this.productService?.getProducts();
  }
}
