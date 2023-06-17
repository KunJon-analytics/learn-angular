import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'hinv-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product | undefined;
  products = new MatTableDataSource<Product>([]);
  columnNames = ['name', 'price'];
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private productService: ProductsService) {}

  private getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = new MatTableDataSource(products);
      this.products.sort = this.sort;
      this.products.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.data.push(product);
  }

  onDelete() {
    this.products.data = this.products.data.filter(
      (product) => product !== this.selectedProduct
    );
    this.selectedProduct = undefined;
  }
}
