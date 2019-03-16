import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellProductComponent } from './sell-product/sell-product.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'selling', component: SellProductComponent},
  {path: 'dashBoard', component: DashBoardComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
