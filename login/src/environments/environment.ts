// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const msal = {
  clientId: '0c7de0ec-997a-454f-8baf-f380c7f40a70', // Herco
  // clientId: 'd546910f-3735-4ab3-831e-bf7426d4c513', // Lieuwe
  authority: 'https://login.microsoftonline.com/common/',
  redirectUri: window.location.origin,
  scopes: ['Files.ReadWrite.All', 'Sites.Read.All', 'User.Read']
};

export const graph = {
  api: 'https://graph.microsoft.com/v1.0'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
