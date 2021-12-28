import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
    ])
  ],
  declarations: [
    AppComponent,
    // TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
