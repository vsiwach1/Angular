import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
        path:'details',
        component:DetailsComponent,
        title: 'Details Page'
    },
    {
        path:'',
        component:HomeComponent,
        title: 'Home Page',
        pathMatch: 'full'
    }
];
export default routeConfig;