export interface Room {
  id: number;
  hotelId: number;
  roomTypeId: number;
  roomNumber: number;
  price: number;
}


export interface RoomAmenityMap {
  roomId: number;
  amenityId: number;
}
