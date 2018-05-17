 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { GainageComponent } from '../wktype/gainage/gainage.component'
 import { BenchpressComponent } from '../wktype/benchpress/benchpress.component'

    const routes: Routes = [
        { path: 'gainage', component: GainageComponent, },
		{ path: 'benchpress', component: BenchpressComponent, },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }