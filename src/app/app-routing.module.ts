import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPublicComponent } from './layouts/public/layout-public/layout-public.component';
import { PublicHomeComponent } from './pages/public/public-home/public-home.component';
import { PublicContactComponent } from './pages/public/public-contact/public-contact.component';
import { LayoutAdminComponent } from './layouts/admin/layout-admin/layout-admin.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { SigninComponent } from './pages/other/signin/signin.component';
import { SignupComponent } from './pages/other/signup/signup.component';
import { LayoutOtherComponent } from './layouts/other/layout-other/layout-other.component';
import { NotFoundComponent } from './pages/other/not-found/not-found.component';
import { PublicShippingComponent } from './pages/public/public-shipping/public-shipping.component';
import { PublicTermsAndConditionsComponent } from './pages/public/public-terms-and-conditions/public-terms-and-conditions.component';
import { PublicProgramComponent } from './pages/public/public-program/public-program.component';
import { PublicSobreCartucheaComponent } from './pages/public/public-sobre-cartuchea/public-sobre-cartuchea.component';
import { PublicCartComponent } from './pages/public/public-cart/public-cart.component';
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
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductListComponent } from './pages/admin/product-list/product-list.component';


const routes: Routes = [
  //https://stackblitz.com/edit/angular-multi-layout-example?file=app%2Fapp.routing.ts
   //Public Routes will go here
   { 
    path: '', 
    component: LayoutPublicComponent,
    children: [
      { path: '', component: PublicHomeComponent, pathMatch: 'full'},
      { path: 'contactar', component: PublicContactComponent },
      { path: 'envios', component: PublicShippingComponent },
      { path: 'terminos-y-condiciones', component: PublicTermsAndConditionsComponent },
      { path: 'cartucheayahorra', component: PublicProgramComponent },
      { path: 'sobre-cartuchea', component: PublicSobreCartucheaComponent },
      { path: 'carrito', component: PublicCartComponent},
      { path: 'mi-cuenta', component: PublicMyAccountComponent},
      { path: 'aviso-legal', component: PublicLegalWarningComponent},
      { path: 'politica-de-privacidad', component: PublicPrivacyPolicyComponent},
      { path: 'politica-de-cookies', component: PublicCookiesPolicyComponent},
      { path: 'buscador-de-impresoras', component: PublicPrinterFinderComponent},
      
      // { path: 'test/:id', component: AboutComponent }
    ]
},{
  path:'cat',
  component:LayoutPublicComponent,
  children:[
    { path: 'cartuchos-de-tinta', component: PublicInkCartridgesComponent},
    { path: 'toner', component: PublicTonerComponent},
    { path: 'impresoras', component: PublicPrintersComponent},
    { path: 'informatica', component: PublicComputingComponent},
    { path: 'papeleria', component: PublicStationeryComponent},
  ]
},
// App routes goes here here
{ 
  path: '',
  component: LayoutAdminComponent, 
  children: [
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'profile', component: AdminProfileComponent },
    { path: 'product/add', component: ProductAddComponent },
    { path: 'product/list', component: ProductListComponent },
  ]
},

//no layout routes
{
path: '',
component: LayoutOtherComponent,
children:[
{ path: 'signin', component: SigninComponent},
{ path: 'signup', component: SignupComponent },

]
},
// otherwise redirect to home
//works: { path: '**', redirectTo: '' }
{ path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
