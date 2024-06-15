export type Brand = {
  brandId: string;
  name: string;
  description: string;
  logoUrl: string;
  homepageUrl: string;
  instagramUrl: string;
}

export type Coordinates = {
  latitude: number;
  longitude: number;
}

export type PhotoBooth = {
  photoBoothId: string;
  brand: Brand;
  name: string;
  description: string;
  address: string;
  coordinates: Coordinates;
}

export type Pagination = {
  hasNext: boolean;
  totalCount: number;
  page: number;
  size: number;
}

export type PhotoBoothResponse = {
  code: string;
  message: string;
  data: PhotoBooth[];
  pagination: Pagination;
}

export type PhotoBoothRequest = {
    brandIds?: number[];
    distance?: number;
    latitude?: number;
    longitude?: number;
    page?: number;
    size?: number;
    sort?: 'asc' | 'desc';
}
