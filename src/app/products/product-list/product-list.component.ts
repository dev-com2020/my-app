import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  // template: `<h1>{{title}}</h1>`,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,AfterViewInit {
  
  title = 'Products';
  today = new Date();
  selectedProduct: Product | undefined;
  products: Product[] = [];

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  
  constructor(private productService: ProductsService){}

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


  onBuy() {
    window.alert(`You bought the ${this.selectedProduct?.name} !`);
  }

  trackByProducts(index: number, name: string):string {
    return name;
  }
}
