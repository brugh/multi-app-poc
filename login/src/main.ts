import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const Office: any;

if (environment.production) {
  enableProdMode();
}

(() => {
  if (typeof (Office?.initialize) !== 'undefined') {
    console.log("Office loading, bootstrapping")
    Office.initialize = () => {
      platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
    }
  } else {
    console.log("No office, bootstrapping")
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
})();

