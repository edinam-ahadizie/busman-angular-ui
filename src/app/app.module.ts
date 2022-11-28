import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { AddorUpdateComponent } from './addor-update/addor-update.component';
import { HttpClientModule } from '@angular/common/http';
import { GetBussesService } from './get-busses.service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
import { OktaAuthModule } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

// const config = {
//   issuer: 'https://dev-795254.okta.com/oauth2/default',
//   redirectUri: 'http://localhost:4200/implicit/callback',
//   clientId: '0oa9gmst4zgiILIQD356',
//   scope: 'openid profile email'
// };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusListComponent,
    AddorUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // OktaAuthModule.initAuth(config)
  ],
  providers: [
    GetBussesService
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
