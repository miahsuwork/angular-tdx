import { Component } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get currentLanguage() {
    return this.languageService.translate.currentLang;
  }
  constructor(private languageService: LanguageService) {
    this.languageService.setInitState();
  }
}
