export interface Hotel {
  id: number;
  cityId: number;
  categoryId: number;
  name: string;
  address: string;
  image?: string;
  description?: string;
  rating?: number;
  price: number;
}

export interface HotelService {
  hotelId: number;
  serviceId: number;
}
