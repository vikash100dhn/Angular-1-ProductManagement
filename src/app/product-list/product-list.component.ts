import { Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { icons } from '../g-icons';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor(private _productService: ProductService) {
    this.filteredProducts = this.products;
   }

  pageTitle: string = "Product List";
  imageWidth : number = 50;
  imageMargin : number =2;
  showImage : boolean = false;
  _listFilter: string = 'cart';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string)
  {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[];

  toggleImage() : void{
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {

    this.pageTitle = 'Product List:'+ message;

  }
  performFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter( (product:IProduct) => 
                    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

 ngOnInit() : void{
   this.products = this._productService.getProducts();
   this.filteredProducts = this.products;
  //  console.log(icons);
   
   console.info('I' + icons.heart + ' Glyphicons!');

   this._productService.getRatingObserver().subscribe(data => {
     console.log(data);
     
   });

 }

}
