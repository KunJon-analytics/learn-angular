import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'hinv-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined;
  @Input() id = -1;
  product$: Observable<Product> | undefined;

  @Output() bought = new EventEmitter<string>();

  @Output() deleted = new EventEmitter();

  constructor(
    private productService: ProductsService,
    public authService: AuthService
  ) {}

  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id);
  }

  ngOnInit(): void {}

  buy() {
    this.bought.emit(this.product?.name);
  }

  changePrice(product: Product, price: number) {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product) {
    this.productService
      .deleteProduct(product.id)
      .subscribe(() => this.deleted.emit());
  }
}
