import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CovertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './product-list/star/star.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { icons } from './g-icons';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CovertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
