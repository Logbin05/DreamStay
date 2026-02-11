import type { Hotel } from "@type/hotel";
import image from "@assets/image/hotels/test.jpeg";

export const hotels: Hotel[] = [
  {
    id: 1,
    cityId: 1,
    categoryId: 1,
    name: "Hotel Moscow Center",
    address: "ул. Тверская, 1",
    description: "Отель в центре Москвы",
    rating: 4.5,
    image: image,
    price: 3550.99,
  },
  {
    id: 2,
    cityId: 2,
    categoryId: 5,
    name: "Neva Business Hotel",
    address: "Невский пр., 10",
    description: "Бизнес-отель",
    rating: 3.0,
    image: image,
    price: 4550.99,
  },
  {
    id: 3,
    cityId: 3,
    categoryId: 2,
    name: "Kazan Apartments",
    address: "ул. Баумана, 5",
    description: "Современные апартаменты",
    rating: 5.0,
    image: image,
    price: 6550.99,
  },
];
