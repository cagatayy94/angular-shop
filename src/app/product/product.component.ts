import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from './../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService, private productService:ProductService) { }
  title = "Ürün listesi";
  filterText = "";
  products: Product[] = [];
  path = "http://localhost:3000/products";

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    });
  }

  addToBasket(product: { name: string; }){
    this.alertifyService.success(product.name +" Added!");
  }
}
