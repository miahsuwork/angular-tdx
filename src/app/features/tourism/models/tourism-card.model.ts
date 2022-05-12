import { TourismPicture } from './tourism-picture.model';

export interface TourismCard {
  id: string;
  name: string;
  city: string;
  picture: TourismPicture;
}
