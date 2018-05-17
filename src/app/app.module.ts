import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GainageComponent } from './wktype/gainage/gainage.component';
import { CountersComponent } from './counters/counters.component';

const appRoutes : Routes = [
{ path: 'wktype/gainage/', component: CountersComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GainageComponent,
	CountersComponent
  ],
  imports: [
    BrowserModule, 
	AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
