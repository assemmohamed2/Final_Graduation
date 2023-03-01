import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CatagoriesComponent } from './catagories/catagories.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CatagoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
