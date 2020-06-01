import { ProductService } from './../../components/product/product.service';
import { Product } from './../../components/product/product.model';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  displayedColumns = ['id','gasto', 'valor', 'acoes']
 
  
 
  constructor(private productService: ProductService) { }

  ngOnInit(): void 
  
  {

    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)


    })

  }

}
