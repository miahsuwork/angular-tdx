import { MenuService } from './../../../core/services/menu.service';
import { MenuItem } from './../../../core/models/menu-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbar: MenuItem[];
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.navbar = this.menuService.getNavbar();
  }
}
