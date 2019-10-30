import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { StockComponent } from './stock/stock.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { FicheComponent } from './fiche/fiche.component';


const routes: Routes = [{
  path:'', component: LoginComponent
},
{
  path:'acceuil', component: AcceuilComponent
},
{
  path:'acceuil/:stock', component: StockComponent
},
{
  path:'stock/:stock-detail', component: StockDetailComponent
},
{
  path:'acceuil/fiche', component: FicheComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
