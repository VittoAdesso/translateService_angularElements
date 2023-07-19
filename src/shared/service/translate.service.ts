import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
// import manually
import en from 'src/shared/i18n/en';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private translate: TranslateService) {
    // setter import
    this.translate.setTranslation('en', en);
// setter language
    this.translate.setDefaultLang('en');
  }

  use(language: string): void {
    this.translate.use(language);
  }
}