export interface Hotel {
  id: number;
  cityId: number;
  categoryId: number;
  name: string;
  address: string;
  description?: string;
  rating?: number;
}

export interface HotelService {
  hotelId: number;
  serviceId: number;
}
