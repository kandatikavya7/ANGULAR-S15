import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule } from '@angular/forms'; 
import { PaginationDirective } from './pagination.directive';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerFilterPipe } from './filter.pipe';
import { DataService } from './data.service';
import { CustomerService } from 'src/customer.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
 { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customers', component: CustomersComponent},


];

  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      AboutComponent,
      ContactComponent,
      OrdersComponent,
      CustomersComponent,
      PaginationDirective,
      CustomerFilterPipe,
    
    ],
    imports:      [ BrowserModule ,AppRoutingModule, FormsModule ,RouterModule.forRoot(appRoutes)],
    providers:    [DataService],
    bootstrap:    [ AppComponent ] 
  })
  export class AppModule { }
