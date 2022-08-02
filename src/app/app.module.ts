import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,  UrlSegment  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { NewsListComponent } from './news-list/news-list.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { OthersListComponent } from './others-list/others-list.component';
import { ChartsListComponent } from './charts-list/charts-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterMatchProfileComponent } from './router-match-profile/router-match-profile.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
      {
        matcher: (url) => {
          if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
            return {
              consumed: url,
              posParams: {
                username: new UrlSegment(url[0].path.slice(1), {})
              }
            };
          }
      
          return null;
        },
        component: RouterMatchProfileComponent
      },
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      {path: 'news-list', component: NewsListComponent},
      {path: 'article-list', component: ArticleListComponent},
      {path: 'skills-list', component: SkillsListComponent},      {path: 'others-list', component: OthersListComponent},      {path: 'charts-list', component: ChartsListComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],

  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    NewsListComponent,
    ArticleListComponent,
    SkillsListComponent,
    OthersListComponent,
    ChartsListComponent,
    PageNotFoundComponent,
    RouterMatchProfileComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/