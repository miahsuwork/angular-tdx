import { TourismResponsePicture } from './tourism-response-picture.model';

export interface TourismRestaurant {
  RestaurantID: string;
  RestaurantName: string;
  Address: string;
  Description: string;
  ZipCode: string;
  Phone: string;
  City: string;
  OpenTime: string;
  WebsiteUrl: string;
  Picture: TourismResponsePicture;
  Position: { PositionLon: number; PositionLat: number; GeoHash: string };
  Class: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}
