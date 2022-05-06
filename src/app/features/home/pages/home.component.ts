import { TourismAttraction } from './../../../core/models/tourism-attraction.model';
import { TourismRestaurant } from './../../../core/models/tourism-restaurant.model';
import { FormService } from './../../../core/services/form.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Option } from 'src/app/core/models/option.model';
import { TourismService } from 'src/app/core/services/tourism.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourismEvent } from 'src/app/core/models/tourism-event.model';
import { EMPTY_PICTURE_URL } from 'src/constants';
import { CITY } from 'src/constants/city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchOptions: Option[];
  selectedSearchOption: string;
  searchForm: FormGroup;
  /**
   * @description 首頁每個區塊顯示數量
   */
  displayCount = 4;
  eventData: TourismEvent[];
  restaurantData: TourismRestaurant[];
  attractionData: TourismAttraction[];
  emptyPictureUrl = EMPTY_PICTURE_URL;
  constructor(
    private menuService: MenuService,
    private tourismService: TourismService,
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

    this.tourismService
      .getEvent({
        top: this.displayCount,
        orderby: 'StartTime asc',
        filter: `StartTime ge ${new Date().toISOString()}`,
      })
      .subscribe((request) => {
        if (request && request.length > 0) {
          this.eventData = request;
        } else {
          this.eventData = [];
        }
      });

    this.tourismService
      .getAttraction({
        top: this.displayCount,
      })
      .subscribe((request) => {
        this.attractionData = request.map((item): TourismAttraction => {
          let city = '';
          for (const [key, value] of Object.entries(CITY)) {
            if (item.Address.includes(value.label)) {
              city = value.label;
            }
          }
          return {
            ...item,
            City: city,
          };
        });
      });

    this.tourismService
      .getRestaurant({
        top: this.displayCount,
      })
      .subscribe((request) => {
        this.restaurantData = request.map((item): TourismRestaurant => {
          if (item.City) {
            return item;
          } else {
            let city = '';
            for (const [key, value] of Object.entries(CITY)) {
              if (item.Address.includes(value.label)) {
                city = value.label;
              }
            }
            return {
              ...item,
              City: city,
            };
          }
        });
      });
  }

  search() {
    if (this.searchForm.valid) {
    } else {
      this.formService.validateAllFormFields(this.searchForm);
    }
  }
}
