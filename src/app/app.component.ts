import { Component } from '@angular/core';
import { LanguageService } from './core/services/language.service';
import { TokenService } from './core/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get currentLanguage() {
    return this.languageService.translate.currentLang;
  }

  constructor(
    private languageService: LanguageService,
    private tokenService: TokenService
  ) {
    this.languageService.setInitState();
    this.tokenService.getToken();
  }
}
