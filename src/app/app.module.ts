import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData} from '@angular/common';
import LocalePL from '@angular/common/locales/pl'
import {FormsModule} from '@angular/forms';

registerLocaleData(LocalePL);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
