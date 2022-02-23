import { Injectable, NgModule } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Injectable()

@NgModule({
  imports : [TranslateModule],
  exports : [TranslateModule]
})

export class AppTranslationModule {

  constructor(private translate: TranslateService) {
    translate.addLangs(["tr"]);
    translate.addLangs(["en"]);
    translate.setDefaultLang('tr');
  }

  public getTranslatedValue(key: string): any {
    return this.translate.instant(key);
  }

  onLangChange(LangCode: string) {
    this.translate.setDefaultLang(LangCode);
    this.translate.use(LangCode);
    localStorage.setItem("language", LangCode);
  }
}
