import { MenuService } from './../../../core/services/menu.service';
import { MenuItem } from './../../../core/models/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbar: MenuItem[];
  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.navbar = this.menuService.getNavbar();
  }

  command(url: string): void {
    this.router
      .navigateByUrl('/redirect', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([url]);
      });
  }
}
