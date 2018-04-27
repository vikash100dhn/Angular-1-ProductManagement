import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { icons } from '../../g-icons';
import { ProductService } from '../../product.service';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

  @Input() rating:number;
  starWidth: number;
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  gicons= icons;

  constructor(private productService : ProductService) { }

  ngOnChanges():void {
    this.starWidth = this.rating * 86/5;
  }

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notify.emit('clicked!');
  }
  selectRating(number: number) {
    this.productService.setRating(number);
  }
}
