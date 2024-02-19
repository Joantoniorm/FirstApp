import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "./app/routes";
import {provideHttpClient} from "@angular/common/http";
import {bootstrapApplication} from "@angular/platform-browser";

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes),
    provideHttpClient()]
}).catch(err => console.error(err));


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/