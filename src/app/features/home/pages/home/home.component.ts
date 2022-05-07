import { TourismType } from '../../../../core/enums/tourism-type.enum';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { Option } from 'src/app/core/models/option.model';
import { TourismService } from 'src/app/core/services/tourism.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourismActivity } from 'src/app/core/models/tourism-activity.model';
import { EMPTY_PICTURE_URL } from 'src/constants';
import { TourismRestaurant } from 'src/app/core/models/tourism-restaurant.model';
import { TourismScenicSpot } from 'src/app/core/models/tourism-scenic-spot.model';
import { FormService } from 'src/app/core/services/form.service';
import { getCity } from 'src/app/core/utils/city-helper';

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
  activityData: TourismActivity[];
  restaurantData: TourismRestaurant[];
  scenicSpotData: TourismScenicSpot[];
  emptyPictureUrl = EMPTY_PICTURE_URL;
  searchType = TourismType;
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
      .getActivity({
        top: this.displayCount,
        orderby: 'StartTime asc',
        filter: `StartTime ge ${new Date().toISOString()}`,
      })
      .subscribe((request) => {
        if (request && request.length > 0) {
          this.activityData = request;
        } else {
          this.activityData = [];
        }
      });

    this.tourismService
      .getScenicSpot({
        top: this.displayCount,
      })
      .subscribe((request) => {
        this.scenicSpotData = request.map((item): TourismScenicSpot => {
          const city = getCity(item.Address);
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
          return {
            ...item,
            City: item.City ? item.City : getCity(item.Address),
          };
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