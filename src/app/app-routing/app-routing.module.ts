 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { GainageComponent } from '../wktype/gainage/gainage.component'

    const routes: Routes = [
        {
            path: 'gainage',
            component: GainageComponent,
        },
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