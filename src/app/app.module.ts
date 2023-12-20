import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPublicComponent } from './layouts/public/layout-public/layout-public.component';
import { LayoutAdminComponent } from './layouts/admin/layout-admin/layout-admin.component';
import { LayoutOtherComponent } from './layouts/other/layout-other/layout-other.component';
import { PublicHeaderComponent } from './layouts/public/public-header/public-header.component';
import { PublicAnnonementComponent } from './layouts/public/public-annonement/public-annonement.component';
import { PublicFooterComponent } from './layouts/public/public-footer/public-footer.component';
import { PublicNewsletterComponent } from './layouts/public/public-newsletter/public-newsletter.component';
import { AdminHeaderComponent } from './layouts/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './layouts/admin/admin-footer/admin-footer.component';
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';
import { PublicAboutComponent } from './pages/public/public-about/public-about.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './pages/other/signup/signup.component';
import { SigninComponent } from './pages/other/signin/signin.component';
import { NotFoundComponent } from './pages/other/not-found/not-found.component';
import { PasswordResetComponent } from './pages/other/password-reset/password-reset.component';
import { AdminChangePasswordComponent } from './pages/admin/admin-change-password/admin-change-password.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { PublicContactComponent } from './pages/public/public-contact/public-contact.component';
import { OtherFooterComponent } from './layouts/other/other-footer/other-footer.component';
import { PublicShippingComponent } from './pages/public/public-shipping/public-shipping.component';
import { PublicTermsAndConditionsComponent } from './pages/public/public-terms-and-conditions/public-terms-and-conditions.component';
import { PublicSobreCartucheaComponent } from './pages/public/public-sobre-cartuchea/public-sobre-cartuchea.component';
import { PublicProgramComponent } from './pages/public/public-program/public-program.component';
import { PublicCartComponent } from './pages/public/public-cart/public-cart.component';
import { PublicCheckoutComponent } from './pages/public/public-checkout/public-checkout.component';
import { PublicOrderCompleteComponent } from './pages/public/public-order-complete/public-order-complete.component';
import { PublicMyAccountComponent } from './pages/public/public-my-account/public-my-account.component';
import { PublicLegalWarningComponent } from './pages/public/public-legal-warning/public-legal-warning.component';
import { PublicPrivacyPolicyComponent } from './pages/public/public-privacy-policy/public-privacy-policy.component';
import { PublicCookiesPolicyComponent } from './pages/public/public-cookies-policy/public-cookies-policy.component';
import { PublicInkCartridgesComponent } from './pages/public/public-ink-cartridges/public-ink-cartridges.component';
import { PublicTonerComponent } from './pages/public/public-toner/public-toner.component';
import { PublicPrintersComponent } from './pages/public/public-printers/public-printers.component';
import { PublicComputingComponent } from './pages/public/public-computing/public-computing.component';
import { PublicStationeryComponent } from './pages/public/public-stationery/public-stationery.component';
import { PublicPrinterFinderComponent } from './pages/public/public-printer-finder/public-printer-finder.component';
import { AdminLeftComponent } from './layouts/admin/admin-left/admin-left.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { OrderHistoryComponent } from './pages/admin/order-history/order-history.component';
import { LostPasswordComponent } from './pages/public/lost-password/lost-password.component';
import { SingleProductComponent } from './pages/public/public-single-product/single-product.component';
import { PublicProductSearchComponent } from './pages/public/public-product-search/public-product-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { TitleFormatPipe } from './pipes/title-format.pipe';
import { FeaturedTitleFormatPipe } from './pipes/featured-title-format.pipe';
import { PublicFeaturedProductsComponent } from './pages/public/public-featured-products/public-featured-products.component';
import { PublicFavoritesComponent } from './pages/public/public-favorites/public-favorites.component';
import { FormsModule } from '@angular/forms';
import { PublicCountrySelectorComponent } from './pages/public/public-country-selector/public-country-selector.component';


registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LayoutPublicComponent,
    LayoutAdminComponent,
    LayoutOtherComponent,
    PublicHeaderComponent,
    PublicAnnonementComponent,
    PublicFooterComponent,
    PublicNewsletterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    PublicHomeComponent,
    PublicAboutComponent,
    AdminDashboardComponent,
    SignupComponent,
    SigninComponent,
    NotFoundComponent,
    PasswordResetComponent,
    AdminChangePasswordComponent,
    AdminProfileComponent,
    PublicContactComponent,
    OtherFooterComponent,
    PublicShippingComponent,
    PublicTermsAndConditionsComponent,
    PublicSobreCartucheaComponent,
    PublicProgramComponent,
    PublicCartComponent,
    PublicCheckoutComponent,
    PublicOrderCompleteComponent,
    PublicMyAccountComponent,
    PublicLegalWarningComponent,
    PublicPrivacyPolicyComponent,
    PublicCookiesPolicyComponent,
    PublicInkCartridgesComponent,
    PublicTonerComponent,
    PublicPrintersComponent,
    PublicComputingComponent,
    PublicStationeryComponent,
    PublicPrinterFinderComponent,
    AdminLeftComponent,
    ProductAddComponent,
    ProductListComponent,
    OrderComponent,
    OrderHistoryComponent,
    LostPasswordComponent,
    SingleProductComponent,
    PublicProductSearchComponent,
    TitleFormatPipe,
    FeaturedTitleFormatPipe,
    PublicFeaturedProductsComponent,
    PublicFavoritesComponent,
    PublicCountrySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
