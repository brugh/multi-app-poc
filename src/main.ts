import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const Office: any;

if (environment.production) {
  enableProdMode();
}

(() => {
  Office.initialize = (reason:string) => {
    console.log("Office has been successfully initialized. Reason = ", reason);
  };
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
})();
