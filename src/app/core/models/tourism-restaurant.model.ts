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
  Picture: {
    PictureDescription1?: string;
    PictureDescription2?: string;
    PictureDescription3?: string;
    PictureUrl1?: string;
    PictureUrl2?: string;
    PictureUrl3?: string;
  };
  Position: { PositionLon: number; PositionLat: number; GeoHash: string };
  Class: string;
  Class2?: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}
