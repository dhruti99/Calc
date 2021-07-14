import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { CatelogComponent } from './catelog/catelog.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { HomeComponent } from './home/home.component';
import { ServicessComponent } from './servicess/servicess.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "/AComponent",
    pathMatch : "full"
  },
  {
    path : 'AComponent',
    component : AComponent
  },
  {
    path: 'Home',
    component : HomeComponent
  },
  {
    path: 'Catelog',
    component : CatelogComponent
  },
  {
    path: 'Servicess',
    component : ServicessComponent
  },
  {
    path: 'Discounts',
    component : DiscountsComponent
  },
  {
    path: 'Contact',
    component : ContactComponent
  }
  // {
  //   path: '**',
  //   component : DefaultComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
