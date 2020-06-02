import { HeaderService } from './../../components/template/header/header.service';
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
 

 
  constructor(private productService: ProductService, private headerService: HeaderService) { 

    for (let total = 0; total < Array.length; total++) {
      const element = Array[total];
      
    }

    headerService.headerData = {
      title:'Início',
      icon:'home',
      routeUrl:''
    }
  }

  ngOnInit(): void 
  
  {
   
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)


    })

  }

}
