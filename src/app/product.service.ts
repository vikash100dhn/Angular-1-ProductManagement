import { Injectable } from '@angular/core';
import { IProduct } from './product-list/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ProductService {

  private _productUrl = '';
  private numberType = new Subject<number>();
  private selectedRatingSubject = this.numberType.asObservable();;
  

  constructor(private _http: HttpClient) { }

  getProductsUsingHTTP():Observable<IProduct[]>{
    //we are setting the parameter of the get method to array of Products as we will get the array of produts
    return this._http.get<IProduct[]>(this._productUrl);
  }

  setRating(rating) {
    this.numberType.next(rating);
  }

  getRatingObserver() {
    return this.selectedRatingSubject;
  }


  getProducts() : IProduct[] {

    return [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  },
  {
    "productId": 3,
    "productName": "sowing tool",
    "productCode": "GDN-0043",
    "releaseDate": "April 25, 2016",
    "description": "Sowing tool for the gardend",
    "price": 13.99,
    "starRating": 4.0,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
}
    ]
  }

}
