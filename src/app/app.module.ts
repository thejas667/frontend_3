import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/shared/nav/nav.component';
// import { LoginComponent } from './component/login/login.component';
// import { RegisterComponent } from './component/register/register.component';
// import { HomepageComponent } from './component/homepage/homepage.component';
// import { UpdateComponent } from './component/update/update.component';
import { ClaimComponent } from './component/claim/claim.component';
import { AdminlogComponent } from './component/adminlog/adminlog.component';
// import { UserdashComponent } from './component/userdash/userdash.component';
import { BookflightComponent } from './component/bookflight/bookflight.component';
import { ManageflightComponent } from './component/manageflight/manageflight.component';
import { BookinghistoryComponent } from './component/bookinghistory/bookinghistory.component';
import { AdmindashComponent } from './component/admindash/admindash.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { DiscountComponent } from './component/discount/discount.component';
import { AirlineComponent } from './component/airline/airline.component';
import { ReportComponent } from './component/report/report.component';
// import { NewairlineComponent } from './component/newairline/newairline.component';
import { BookingComponent } from './component/booking/booking.component';
import { ApplydiscountComponent } from './component/applydiscount/applydiscount.component';
// import { CreatecouponComponent } from './component/createcoupon/createcoupon.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './component/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // LoginComponent,
    // RegisterComponent,
    // HomepageComponent,
    // UpdateComponent,
    ClaimComponent,
    AdminlogComponent,
    // UserdashComponent,
    BookflightComponent,
    ManageflightComponent,
    BookinghistoryComponent,
    AdmindashComponent,
    ScheduleComponent,
    DiscountComponent,
    AirlineComponent,
    ReportComponent,
    // NewairlineComponent,
    BookingComponent,
    ApplydiscountComponent,
    SearchComponent,
    // CreatecouponComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
