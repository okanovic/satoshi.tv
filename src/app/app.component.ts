import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppTranslationModule } from './app.translation.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stoshi-tv';

  constructor(private modalService: BsModalService, private translateModule: AppTranslationModule) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var userLang = navigator.language;
    switch (userLang) {
      case "en":
      case "en-US":
        this.translateModule.onLangChange("en");
        break;
      default:
        this.translateModule.onLangChange("tr");
        break;
    }
  }

}
