import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'hinv-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  name = '';
  @Input() id = -1;
  private productSub = new Subject<void>();

  constructor(private productViewService: ProductViewService) {}
  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }

  private getProduct() {
    this.productViewService
      .getProduct(this.id)
      .pipe(takeUntil(this.productSub))
      .subscribe((product) => {
        if (product) {
          this.name = product.name;
        }
      });
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
