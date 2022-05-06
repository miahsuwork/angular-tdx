export interface TourismAttraction {
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  Phone: string;
  Address: string;
  ZipCode: string;
  TravelInfo: string;
  OpenTime: string;
  Picture: {
    PictureDescription1?: string;
    PictureDescription2?: string;
    PictureDescription3?: string;
    PictureUrl1?: string;
    PictureUrl2?: string;
    PictureUrl3?: string;
  };
  Position: { PositionLon: number; PositionLat: number; GeoHash: string };
  ParkingPosition: object;
  TicketInfo: string;
  SrcUpdateTime: string;
  UpdateTime: string;
  City: string;
}
