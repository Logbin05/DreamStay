export interface Review {
  id: number;
  hotelId: number;
  userId: number;
  rating: number;
  comment?: string;
  reviewDate: string;
}
