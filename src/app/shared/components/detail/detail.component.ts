import { EMPTY_PICTURE_URL } from './../../../../constants/index';
import { Detail } from './../../../core/models/detail.model';
import { TourismService } from './../../../core/services/tourism.service';
import { TourismType } from '../../../core/enums/tourism-type.enum';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { getCity } from 'src/app/core/utils/city-helper';
import { isEmptyObject } from 'src/app/core/utils/is-empty-object';
import { Picture } from 'src/app/core/models/picture.model';
import { TourismPicture } from 'src/app/core/models/tourism-picture.model';
import { Nearby } from 'src/app/core/models/nearby.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  searchType: TourismType;
  tourismType = TourismType;
  id$ = new BehaviorSubject('');
  id: string;
  detailData: Detail;
  nearbyDataList: Nearby[];
  mapUrl: string;
  nearbyCount = 4;
  emptyPictureUrl = EMPTY_PICTURE_URL;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tourismService: TourismService
  ) {}

  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getMapUrl(): string {
    if (this.searchType === TourismType.ACTIVITY) {
      return `https://maps.google.com/maps?q=${this.detailData.position.positionLat},${this.detailData.position.positionLon}&hl=zh-TW&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    } else {
      return `https://maps.google.com/maps?q=${
        this.detailData.name
      }+${this.detailData.name
        .split('')
        .join('+')}&hl=zh-TW&t=&z=16&ie=UTF8&iwloc=&output=embed
        `;
    }
  }

  getPictureList(tourismPicture: TourismPicture): Picture[] {
    const pictureList: Picture[] = [];
    pictureList.push({
      pictureDescription: tourismPicture.PictureDescription1,
      pictureUrl: tourismPicture.PictureUrl1,
    });
    if (tourismPicture.hasOwnProperty('PictureUrl2')) {
      pictureList.push({
        pictureDescription: tourismPicture.PictureDescription2,
        pictureUrl: tourismPicture.PictureUrl2,
      });
    }
    if (tourismPicture.hasOwnProperty('PictureUrl3')) {
      pictureList.push({
        pictureDescription: tourismPicture.PictureDescription3,
        pictureUrl: tourismPicture.PictureUrl3,
      });
    }
    return pictureList;
  }

  getScenicSpotDetail(): void {
    this.tourismService
      .getScenicSpot({
        filter: `${TourismType.SCENIC_SPOT}ID eq '${this.id}'`,
      })
      .subscribe((request) => {
        const data = request[0];
        const classList = [];
        if (data.hasOwnProperty('Class1')) {
          classList.push(data.Class1);
        }
        if (data.hasOwnProperty('Class2')) {
          classList.push(data.Class2);
        }
        if (data.hasOwnProperty('Class3')) {
          classList.push(data.Class3);
        }

        this.detailData = {
          id: data.ScenicSpotID,
          name: data.ScenicSpotName,
          description: data.DescriptionDetail,
          address: data.Address,
          city: data.City ? data.City : getCity(data.Address),
          phone: data.Phone,
          srcUpdateTime: data.SrcUpdateTime,
          updateTime: data.UpdateTime,
          pictures: isEmptyObject(data.Picture)
            ? []
            : this.getPictureList(data.Picture),
          position: {
            positionLat: data.Position.PositionLat,
            positionLon: data.Position.PositionLon,
            geoHash: data.Position.GeoHash,
          },
          zipCode: data.ZipCode,
          travelInfo: data.TravelInfo,
          ticketInfo: data.TicketInfo,
          openTime: data.OpenTime,
          classList,
          endTime: '',
          startTime: '',
          organizer: '',
          websiteUrl: '',
        };
        this.mapUrl = this.getMapUrl();
        this.getScenicSpotNearbyData();
      });
  }

  getActivityDetail(): void {
    this.tourismService
      .getActivity({
        filter: `${TourismType.ACTIVITY}ID eq '${this.id}'`,
      })
      .subscribe((request) => {
        const data = request[0];
        const classList = [];
        if (data.hasOwnProperty('Class1')) {
          classList.push(data.Class1);
        }
        if (data.hasOwnProperty('Class2')) {
          classList.push(data.Class2);
        }
        if (data.hasOwnProperty('Class3')) {
          classList.push(data.Class3);
        }

        this.detailData = {
          id: data.ActivityID,
          name: data.ActivityName,
          description: data.Description,
          address: data.Address,
          city: data.City ? data.City : getCity(data.Address),
          phone: data.Phone,
          srcUpdateTime: data.SrcUpdateTime,
          updateTime: data.UpdateTime,
          pictures: isEmptyObject(data.Picture)
            ? []
            : this.getPictureList(data.Picture),
          position: {
            positionLat: data.Position.PositionLat,
            positionLon: data.Position.PositionLon,
            geoHash: data.Position.GeoHash,
          },
          endTime: data.EndTime,
          startTime: data.StartTime,
          organizer: data.Organizer,
          zipCode: '',
          travelInfo: '',
          ticketInfo: '',
          openTime: '',
          classList,
          websiteUrl: '',
        };
        this.mapUrl = this.getMapUrl();
        this.getActivityNearbyData();
      });
  }
  getRestaurantDetail(): void {
    this.tourismService
      .getRestaurant({
        filter: `${TourismType.RESTAURANT}ID eq '${this.id}'`,
      })
      .subscribe((request) => {
        const data = request[0];
        const classList = [];
        if (data.hasOwnProperty('Class')) {
          classList.push(data.Class);
        }

        this.detailData = {
          id: data.RestaurantID,
          name: data.RestaurantName,
          description: data.Description,
          address: data.Address,
          city: data.City ? data.City : getCity(data.Address),
          phone: data.Phone,
          srcUpdateTime: data.SrcUpdateTime,
          updateTime: data.UpdateTime,
          pictures: isEmptyObject(data.Picture)
            ? []
            : this.getPictureList(data.Picture),
          position: {
            positionLat: data.Position.PositionLat,
            positionLon: data.Position.PositionLon,
            geoHash: data.Position.GeoHash,
          },
          zipCode: data.ZipCode,
          openTime: data.OpenTime,
          websiteUrl: data.WebsiteUrl,
          classList,
          endTime: '',
          startTime: '',
          organizer: '',
          travelInfo: '',
          ticketInfo: '',
        };
        this.mapUrl = this.getMapUrl();
        this.getRestaurantNearbyData();
      });
  }
  getScenicSpotNearbyData(): void {
    this.tourismService
      .getScenicSpot({
        top: this.nearbyCount,
        filter: `${TourismType.SCENIC_SPOT}ID ne '${this.id}'`,
        spatialFilter: `nearby(${this.detailData.position.positionLat},${
          this.detailData.position.positionLon
        },${this.getRandom(4000, 5000)})`,
      })
      .subscribe((request) => {
        this.nearbyDataList = request.map((item): Nearby => {
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
  getActivityNearbyData(): void {
    this.tourismService
      .getActivity({
        top: this.nearbyCount,
        filter: `${TourismType.ACTIVITY}ID ne '${this.id}'`,
        spatialFilter: `nearby(${this.detailData.position.positionLat},${
          this.detailData.position.positionLon
        },${this.getRandom(9000, 10000)})`,
      })
      .subscribe((request) => {
        this.nearbyDataList = request.map((item): Nearby => {
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
  getRestaurantNearbyData(): void {
    this.tourismService
      .getRestaurant({
        top: this.nearbyCount,
        filter: `${TourismType.RESTAURANT}ID ne '${this.id}'`,
        spatialFilter: `nearby(${this.detailData.position.positionLat},${
          this.detailData.position.positionLon
        },${this.getRandom(4000, 5000)})`,
      })
      .subscribe((request) => {
        this.nearbyDataList = request.map((item): Nearby => {
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

  getDetail(): void {
    this.route.paramMap.subscribe((request) => {
      this.searchType = request.get('tourismType') as TourismType;
      this.id = request.get('id');
    });

    switch (this.searchType) {
      case TourismType.SCENIC_SPOT:
        this.getScenicSpotDetail();
        break;

      case TourismType.ACTIVITY:
        this.getActivityDetail();
        break;

      case TourismType.RESTAURANT:
        this.getRestaurantDetail();
        break;
    }
  }
  ngOnInit(): void {
    this.getDetail();
    (
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ) as Observable<NavigationEnd>
    ).subscribe(() => {
      this.detailData = null;
      this.nearbyDataList = null;
      this.getDetail();
    });
  }
}
