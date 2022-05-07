import { Picture } from './picture.model';

export interface Detail {
  id: string;
  name: string;
  address: string;
  description: string;
  city: string;
  phone: string;
  srcUpdateTime: string;
  updateTime: string;
  pictures: Picture[];
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
