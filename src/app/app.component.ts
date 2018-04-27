import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-root',
  template:`
   <div><h1>{{Pagetitle }}</h1></div>
   <app-product-list></app-product-list>
   `,
   providers:[ProductService]
})
export class AppComponent {
  Pagetitle = 'Product Management Website';
 
}
