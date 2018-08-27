import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as components from './components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'mobiles',
        pathMatch: 'full'
    },
    {
        path: 'mobiles',
        component: components.ListGoodsComponent,
        data: { dataName: 'mobiles' }
    },
    {
        path: 'notebooks',
        component: components.ListGoodsComponent,
        data: { dataName: 'notebooks' }
    },
    {
        path: 'all',
        component: components.ListGoodsComponent,
        data: { dataName: 'all' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
