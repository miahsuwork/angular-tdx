import { TourismResponsePicture } from './tourism-response-picture.model';

export interface TourismActivity {
  ActivityID: string;
  ActivityName: string;
  Address: string;
  City: string;
  Class1?: string;
  Class2?: string;
  Class3?: string;
  Description: string;
  EndTime: string;
  Location: string;
  Organizer: string;
  Phone: string;
  Picture: TourismResponsePicture;
  Position: { PositionLon: number; PositionLat: number; GeoHash: string };
  SrcUpdateTime: string;
  StartTime: string;
  UpdateTime: string;
}
