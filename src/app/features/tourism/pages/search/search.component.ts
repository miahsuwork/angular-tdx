import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TourismTypeFieldName } from 'src/app/core/enums/tourism-type-field-name.enum';
import { TourismType } from 'src/app/core/enums/tourism-type.enum';
import { Option } from 'src/app/core/models/option.model';
import { MenuService } from 'src/app/core/services/menu.service';
import { getCity } from 'src/app/core/utils/city-helper';
import { EMPTY_PICTURE_URL } from 'src/constants';
import { CITY } from 'src/constants/city';
import { TourismCard } from '../../models/tourism-card.model';
import { Picture } from '../../models/picture.model';
import { TourismService } from '../../services/tourism.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchType: TourismType;
  tourismType = TourismType;
  searchOptions: Option[];
  cityOptions: Option[];
  searchForm: FormGroup;
  resultData: TourismCard[];
  emptyPictureUrl = EMPTY_PICTURE_URL;

  get city(): AbstractControl | null {
    return this.searchForm.get(['city']);
  }

  get keyword(): AbstractControl | null {
    return this.searchForm.get(['keyword']);
  }

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private fb: FormBuilder,
    private tourismService: TourismService,
    private router: Router
  ) {}

  setQueryParams(): void {
    const options: NavigationExtras = {
      queryParams: {
        keyword: this.keyword.value,
      },
    };

    this.router.navigate([`search/${this.searchType}`], options);
  }

  getScenicSpot(): void {
    this.setQueryParams();
    this.tourismService
      .getScenicSpot({
        filter: `contains(${TourismTypeFieldName.SCENIC_SPOT}Name, '${this.keyword.value}')`,
      })
      .subscribe((request) => {
        this.resultData = request.map((item): TourismCard => {
          let picture: Picture;
          if (item.Picture.hasOwnProperty('PictureUrl1')) {
            picture = {
              pictureUrl: item.Picture.PictureUrl1,
              pictureDescription: item.Picture.PictureDescription1,
            };
          }
          return {
            picture,
            id: item.ScenicSpotID,
            name: item.ScenicSpotName,
            city: item.City ? item.City : getCity(item.Address),
          };
        });
      });
  }

  getActivity(): void {
    this.setQueryParams();
    this.tourismService
      .getActivity(
        {
          filter: `contains(${TourismTypeFieldName.ACTIVITY}Name, '${this.keyword.value}')`,
          orderby: 'StartTime asc',
        },
        this.city.value
      )
      .subscribe((request) => {
        this.resultData = request.map((item): TourismCard => {
          let picture: Picture;
          if (item.Picture.hasOwnProperty('PictureUrl1')) {
            picture = {
              pictureUrl: item.Picture.PictureUrl1,
              pictureDescription: item.Picture.PictureDescription1,
            };
          }
          return {
            picture,
            id: item.ActivityID,
            name: item.ActivityName,
            city: item.City ? item.City : getCity(item.Address),
          };
        });
      });
  }

  getRestaurant(): void {
    this.setQueryParams();
    this.tourismService
      .getRestaurant({
        filter: `contains(${TourismTypeFieldName.RESTAURANT}Name, '${this.keyword.value}')`,
      })
      .subscribe((request) => {
        this.resultData = request.map((item): TourismCard => {
          let picture: Picture;
          if (item.Picture.hasOwnProperty('PictureUrl1')) {
            picture = {
              pictureUrl: item.Picture.PictureUrl1,
              pictureDescription: item.Picture.PictureDescription1,
            };
          }
          return {
            picture,
            id: item.RestaurantID,
            name: item.RestaurantName,
            city: item.City ? item.City : getCity(item.Address),
          };
        });
      });
  }

  search(): void {
    switch (this.searchType) {
      case TourismType.SCENIC_SPOT:
        this.getScenicSpot();
        break;

      case TourismType.ACTIVITY:
        this.getActivity();
        break;

      case TourismType.RESTAURANT:
        this.getRestaurant();
        break;
    }
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      city: [CITY.taiwan.value],
      keyword: [
        this.route.snapshot.queryParamMap.get('keyword') || '',
        [Validators.required],
      ],
    });

    this.route.paramMap.subscribe((request) => {
      this.searchType = request.get('tourismType') as TourismType;
    });

    this.searchOptions = this.menuService.getNavbar().map((item): Option => {
      return {
        label: item.label,
        value: item.label,
      };
    });

    this.cityOptions = Object.keys(CITY).map((key): Option => {
      return {
        label: CITY[key].label,
        value: CITY[key].value,
      };
    });

    this.searchForm.patchValue({
      searchType: this.searchOptions[0].value,
    });

    if (this.keyword.value) {
      this.search();
    }
  }
}
