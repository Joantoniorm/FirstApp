import {Provider} from "./provider";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  provider: {
    id: number;
    name: string;
  };
}

export const products = [
  {
    id: 1,
    name: 'Iphone 1',
    price: 701,
    description: 'Description 1',
    provider: {
      id: 1,
      name: 'Vodafone'
    }
  },
  {
    id: 2,
    name: 'Iphone 2',
    price: 699,
    description: 'Description 2',
    provider: {
      id: 2,
      name: 'Movistar'
    }
  },
  {
    id: 3,
    name: 'Iphone 3',
    price: 299,
    description: 'Description 3',
    provider: {
      id: 3,
      name: 'Lowi'
    }
  },
  {
    id: 4,
    name: "Iphone 4",
    price: 500,
    description: 'Description 4',
    provider: {
      id: 4,
      name: 'Orange'
    }
  },
  {
    id: 5,
    name: 'Iphone 5',
    price: 700,
    description: 'Description 5',
    provider: {
      id: 5,
      name: 'Digi'
    }
  }
];