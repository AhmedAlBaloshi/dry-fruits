import { Injectable } from '@angular/core';

export interface IProductListItem {
  id: number;
  image: string;
  name: string;
  qty:number;
  price: number;
  category: string;
}

export interface IProductDetail extends IProductListItem {
  description: string;
  nutritionChart: string;
}


const PRODUCT_LIST: IProductDetail[] = [
  {
    id: 1,
    category: 'almond',
    description: 'bla bla',
    image: '../../../assets/img/almods.webp',
    name: 'Almond',
    nutritionChart: '',
    qty: 1,
    price: 1100.00,
  },
  {
    id: 2,
    category: 'almond',
    description: 'bla bla',
    image: '../../../assets/img/almod-past.jpg',
    name: 'Almond Past',
    nutritionChart: '',
    qty: 1,
    price: 1999.00,
  },
  {
    id: 3,
    category: 'almond',
    description: 'bla bla',
    image: '../../../assets/img/alomd-butter.webp',
    name: 'Almond Butter',
    nutritionChart: '',
    qty: 1,
    price: 2099.00,
  },
  {
    id: 4,
    category: 'almond',
    description: 'bla bla',
    image: '../../../assets/img/alomod-milk.jpg',
    name: 'Almond Milk',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 5,
    category: 'anjeer',
    description: 'bla bla',
    image: '../../../assets/img/angeer-butter.jpg',
    name: 'Anjeer Butter',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 6,
    category: 'anjeer',
    description: 'bla bla',
    image: '../../../assets/img/angeer-cream.jpg',
    name: 'Anjeer Cream',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 7,
    category: 'anjeer',
    description: 'bla bla',
    image: '../../../assets/img/angeer-juicy.jpg',
    name: 'Anjeer Juicy',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 8,
    category: 'anjeer',
    description: 'bla bla',
    image: '../../../assets/img/anjeer.jpg',
    name: 'Anjeer',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 9,
    category: 'cashew',
    description: 'bla bla',
    image: '../../../assets/img/cashews.webp',
    name: 'Cashew',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 10,
    category: 'cashew',
    description: 'bla bla',
    image: '../../../assets/img/Cashew-past.jpg',
    name: 'Cashew Past',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 11,
    category: 'cashew',
    description: 'bla bla',
    image: '../../../assets/img/cashew-milk.jpg',
    name: 'Cashew Milk',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
  {
    id: 12,
    category: 'cashew',
    description: 'bla bla',
    image: '../../../assets/img/Cashew-Butter.jpg',
    name: 'Cashew Butter',
    nutritionChart: '',
    qty: 1,
    price: 900.00,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  async getList(category?: string): Promise<IProductListItem[]> {
    if (category) {
      return PRODUCT_LIST.filter((p) => p.category == category);
    }
    return PRODUCT_LIST;
  }
  async getProduct(id: number): Promise<IProductDetail | null> {
    const filteredProduct = PRODUCT_LIST.filter((p) => p.id == id);
    if (filteredProduct.length === 1) return filteredProduct[0];
    return null;
  }


}
