import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http'

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routeConfig)//,
    //provideHttpClient(withInterceptors(authInterceptor))
  ]
})
  .catch(err => console.error(err));
