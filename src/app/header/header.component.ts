import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../@core/services/shared-data.service';
import { AppTranslationModule } from '../app.translation.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLanguage = navigator.language;
  userInfo: any;

  constructor(
    private translateModule: AppTranslationModule,
    private sharedDataService: SharedDataService,
  ) { }

  ngOnInit(): void {
    this.sharedDataService.currentUser.subscribe(data =>{
      this.userInfo = data
    });
    console.log(this.userInfo)

  }

  changeLang(lang: string) {
    console.log(lang)
    this.translateModule.onLangChange(lang)
    this.currentLanguage = lang;
  }

}
