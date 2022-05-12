import { TourismPicture } from './tourism-picture.model';

export interface TourismDetail {
  id: string;
  name: string;
  address: string;
  description: string;
  city: string;
  phone: string;
  srcUpdateTime: string;
  updateTime: string;
  pictures: TourismPicture[];
  position: { positionLon: number; positionLat: number; geoHash: string };
  zipCode: string;
  websiteUrl: string;
  openTime: string;
  classList: string[];
  endTime: string;
  startTime: string;
  organizer: string;
  travelInfo: string;
  ticketInfo: string;
}
