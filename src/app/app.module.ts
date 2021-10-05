import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SliderComponent } from './layouts/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductGridComponent } from './pages/product-grid/product-grid.component';
import { SharedModule } from './shared/shared.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartService } from './shared/cart/cart.service';
import { CartListComponent } from './pages/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    CartComponent,
    CheckOutComponent,
    NotFoundComponent,
    ProductGridComponent,
    ProductDetailComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    NgbModule,
    SharedModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
