import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
import { ProductHostDirective } from './product-host.directive';

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, SortPipe, CopyrightDirective, ProductHostDirective],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
