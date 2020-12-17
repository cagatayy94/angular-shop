import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:'', redirectTo:'products', pathMatch:'full' },
  { path:'product-add-1', component:ProductComponent },
  { path:'product-add-2', component:ProductComponent },
  { path:'products', component:ProductComponent },
  { path:'products/category/:categoryId', component:ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
