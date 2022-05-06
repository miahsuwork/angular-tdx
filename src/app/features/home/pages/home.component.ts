import { FormService } from './../../../core/services/form.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Option } from 'src/app/core/models/option.model';
import { AttractionService } from 'src/app/core/services/attraction.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchOptions: Option[];
  selectedSearchOption: string;
  searchForm: FormGroup;
  constructor(
    private menuService: MenuService,
    private fb: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchType: ['', [Validators.required]],
      keyword: ['', [Validators.required]],
    });
    this.searchOptions = this.menuService.getNavbar().map((item): Option => {
      return {
        label: item.label,
        value: item.label,
      };
    });

    this.searchForm.patchValue({
      searchType: this.searchOptions[0].value,
    });
  }

  search() {
    if (this.searchForm.valid) {
    } else {
      this.formService.validateAllFormFields(this.searchForm);
    }
  }
}
