import { Injectable } from '@angular/core';
import { LocaleService, TranslationService } from 'angular-l10n';
@Injectable() export class LocalizationConfig {

  constructor(public locale: LocaleService, public translation: TranslationService) { }

  load(): Promise<void> {
    
    this.locale.addConfiguration()
      .addLanguages(['en', 'ar'])
      .setCookieExpiration()
      .defineDefaultLocale('en', 'US')
      .defineCurrency('GBP');

    this.translation.addConfiguration()
      .addProvider('./assets/locale-');

    return this.translation.init();
  }

}

