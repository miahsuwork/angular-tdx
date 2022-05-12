import { TourismResponsePicture } from './tourism-response-picture.model';

export interface TourismScenicSpot {
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  Phone: string;
  Address: string;
  ZipCode: string;
  TravelInfo: string;
  OpenTime: string;
  Picture: TourismResponsePicture;
  Position: { PositionLon: number; PositionLat: number; GeoHash: string };
  ParkingPosition: object;
  TicketInfo: string;
  SrcUpdateTime: string;
  UpdateTime: string;
  City: string;
  Class1?: 'string';
  Class2?: 'string';
  Class3?: 'string';
}
