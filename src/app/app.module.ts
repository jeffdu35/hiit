import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GainageComponent } from './wktype/gainage/gainage.component';
import { CountersComponent } from './counters/counters.component';
import { BenchpressComponent } from './wktype/benchpress/benchpress.component';

const appRoutes : Routes = [
{ path: 'wktype/gainage/', component: GainageComponent, }
{ path: 'wktype/benchpress/', component: BenchpressComponent, }
{ path: 'counters/', component: CountersComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GainageComponent,
	CountersComponent,
	BenchpressComponent,
  ],
  imports: [
    BrowserModule, 
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
