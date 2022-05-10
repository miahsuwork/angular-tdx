import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { Language } from '../enums/language.enum';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;

  constructor(private translateService: TranslateService) {}

  /**
   * @description 根據使用者的瀏覽器初始化語言設定
   */
  setInitState(): void {
    this.translateService.addLangs([Language.EN, Language.TW]);
    // 如果是繁體/簡體就顯示繁體，否則都顯示英文

    const browserLang = this.translateService.getBrowserLang().includes('zh')
      ? Language.TW
      : Language.EN;
    this.setLanguage(browserLang);
  }

  /**
   * @description 設定語言
   */
  setLanguage(lang: Language): void {
    this.translateService.onLangChange
      .pipe(take(1))
      .subscribe((result: LangChangeEvent) => {
        this.language$.next(result);
      });
    this.translateService.use(lang);
  }
}
