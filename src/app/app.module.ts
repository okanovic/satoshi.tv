import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileInfoModalComponent } from './content/components/profile-info-modal/profile-info-modal.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppTranslationModule } from './app.translation.module';
import { ToastrModule } from 'ngx-toastr';

export function createTranslateLoader(http: HttpClient) {

  return new TranslateHttpLoader(http, './assets/i18n/', '.json?cb=' + new Date().getTime());
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ProfileInfoModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppTranslationModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot(translationOptions),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule],
  providers: [{ provide: LOCALE_ID, useValue: "en-US" },
    TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
