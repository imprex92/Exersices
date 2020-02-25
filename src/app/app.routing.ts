import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { StoreComponent } from './store'
import { CitiesComponent } from './cities'
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'store', component: StoreComponent },
    { path: 'cities', component: CitiesComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);