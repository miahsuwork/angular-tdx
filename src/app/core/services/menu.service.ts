import { Language } from './../enums/language.enum';
import { MenuItem } from '../models/menu-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  navbar: MenuItem[] = [
    {
      label: 'scenic-spot',
      url: '/Search/ScenicSpot',
    },
    {
      label: 'activity',
      url: '/Search/Activity',
    },
    {
      label: 'restaurant',
      url: '/Search/Restaurant',
    },
  ];

  languageList: MenuItem[] = [
    {
      label: Language.EN,
      value: Language.EN,
    },
    {
      label: Language.TW,
      value: Language.TW,
    },
  ];

  constructor() {}

  getNavbar(): MenuItem[] {
    return this.navbar;
  }

  getLanguageList(): MenuItem[] {
    return this.languageList;
  }
}
