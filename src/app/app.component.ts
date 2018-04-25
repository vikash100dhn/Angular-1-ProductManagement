import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
   <div><h1>{{Pagetitle }}</h1></div>
   <app-product-list></app-product-list>
   `
})
export class AppComponent {
  Pagetitle = 'Product Management Website';
}
