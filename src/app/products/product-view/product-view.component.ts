import { Component, OnInit, Input } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'hinv-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
  providers: [ProductViewService],
})
export class ProductViewComponent implements OnInit {
  name = '';
  @Input() id = -1;

  constructor(private productViewService: ProductViewService) {}

  ngOnInit(): void {
    const product = this.productViewService.getProduct(this.id);
    if (product) {
      this.name = product.name;
    }
  }
}
