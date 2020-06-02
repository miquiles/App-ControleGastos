import { ProductService } from './../../product/product.service';
import { Product } from './../../product/product.model';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  product: Product
  
  saldo: number = 20000.99
  saldoAtual: number = this.saldo
  


  constructor(private headerService:HeaderService, productService:ProductService) { 

    
  }

  ngOnInit(): void {
  }

  get title(): string{
   return this.headerService.headerData.title
  }

  get icon(): string{
    return this.headerService.headerData.icon
   }

   get routeUrl(): string{
    return this.headerService.headerData.routeUrl
   }

}
