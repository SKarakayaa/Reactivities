export interface IProfile {
  displayName: string;
  username: string;
  bio: string;
  images: string;
  photos: IPhoto[];
}

export interface IPhoto {
  id: string;
  url: string;
  isMain: boolean;
}
