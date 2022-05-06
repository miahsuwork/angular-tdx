import { MenuItem } from './../../../core/models/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/core/enums/language.enum';
import { LanguageService } from 'src/app/core/services/language.service';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number;
  languageList: MenuItem[];
  get currentLanguage() {
    return this.languageService.translate.currentLang;
  }
  constructor(
    private languageService: LanguageService,
    private menuService: MenuService
  ) {}

  changeLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  ngOnInit(): void {
    this.year = new Date().getFullYear();

    this.languageList = this.menuService.getLanguageList();
  }
}
