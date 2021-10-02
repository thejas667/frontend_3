import { NgModule } from '@angular/core';


import { AdminlogComponent } from './component/adminlog/adminlog.component';

import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './component/bookflight/bookflight.component';
import { ManageflightComponent } from './component/manageflight/manageflight.component';
import { BookinghistoryComponent } from './component/bookinghistory/bookinghistory.component';
import { AdmindashComponent } from './component/admindash/admindash.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { DiscountComponent } from './component/discount/discount.component';
import { AirlineComponent } from './component/airline/airline.component';
import { ReportComponent } from './component/report/report.component';
import { BookingComponent } from './component/booking/booking.component';
import { ApplydiscountComponent } from './component/applydiscount/applydiscount.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { SearchComponent } from './component/search/search.component';



const routes: Routes = [

  {path:'adminlog',component:AdminlogComponent, },
  {path:'bookflight',component:BookflightComponent},
  {path:'manageflight',component:ManageflightComponent},
  {path:'bookinghistory',component:BookinghistoryComponent},
  {path:'admindash',component:AdmindashComponent },
  {path:'schedule',component:ScheduleComponent },
  {path:'discount',component:DiscountComponent},
  {path:'airline',component:AirlineComponent},
  {path:'report',component:ReportComponent},
  // {path:'newairline',component:NewairlineComponent},
  {path:'booking',component:BookingComponent},
  {path:'applydiscount',component:ApplydiscountComponent},
  // {path: 'createcoupon', component:CreatecouponComponent},
  // {path: 'nav', loadChildren:()=>import('./app.module').then(a=>a.AppModule), canActivate:[AuthGuard]},
  {path:'nav', component:NavComponent},
  {path: 'search', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
