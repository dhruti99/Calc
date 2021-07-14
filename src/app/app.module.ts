import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { CatelogComponent } from './catelog/catelog.component';
import { ServicessComponent } from './servicess/servicess.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { AComponent } from './a/a.component';
import { RestComponent } from './rest/rest.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    CatelogComponent,
    ServicessComponent,
    DiscountsComponent,
    ContactComponent,
    DefaultComponent,
    AComponent,
    RestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
