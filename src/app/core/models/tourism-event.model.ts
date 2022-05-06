export interface TourismEvent {
  ActivityID: string;
  ActivityName: string;
  Address: string;
  City: string;
  Class1?: string;
  Class2?: string;
  Description: string;
  EndTime: string;
  Location: string;
  Organizer: string;
  Phone: string;
  Picture: {
    PictureDescription1?: string;
    PictureDescription2?: string;
    PictureDescription3?: string;
    PictureUrl1?: string;
    PictureUrl2?: string;
    PictureUrl3?: string;
  };
  Position: { PositionLon: number; PositionLat: number; GeoHash: string };
  SrcUpdateTime: string;
  StartTime: string;
  UpdateTime: string;
}
