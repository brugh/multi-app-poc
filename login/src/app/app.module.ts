import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MSAL_INSTANCE, MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { BrowserCacheLocation, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { msal } from '../environments/environment';
import { AppComponent } from './app.component';

const isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export function MSALInstanceFactory(): IPublicClientApplication {
  console.log("MSAL config")
  return new PublicClientApplication({
    auth: {
      clientId: msal.clientId,
      authority: msal.authority,
      redirectUri: msal.redirectUri,
      // postLogoutRedirectUri: '/',
      // navigateToLoginRequestUrl: true,
      // knownAuthorities: [ environment.msal.authority],
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE,
    },
    system: {
      // loggerOptions: {
      //   loggerCallback,
      //   logLevel: LogLevel.Error,
      //   piiLoggingEnabled: false
      // },
    },
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
    MsalService,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("App module booting")
  }
}
