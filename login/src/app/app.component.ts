import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { msal } from '../environments/environment';

declare const Office: any;

@Component({
  selector: 'app-root',
  template: `
    {{ message }} 
  `,
  styles: []
})
export class AppComponent {
  message = "Logging in .."
  constructor(private msalService: MsalService) {
    console.log("Initing app component")
    this.msalService.handleRedirectObservable().subscribe((response) => {
      // If response is non-null, it means page is returning from AAD with a successful response
      if (response) {
        this.message = `Logged in succesfully as ${response?.account?.name}. Please close this window.`;
        Office.context.ui.messageParent(JSON.stringify({ status: 'success', result: response.accessToken }));
      } else {
        // Otherwise, invoke login
        this.msalService.loginRedirect({ scopes: msal.scopes });
      }
    }, (error) => {
      const errorData: string = `errorMessage: ${error.errorCode}
                                 message: ${error.errorMessage}
                                 errorCode: ${error.stack}`;
      Office.context.ui.messageParent(JSON.stringify({ status: 'failure', result: errorData }));
    });
  }
}
