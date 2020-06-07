import { Component, OnInit } from '@angular/core';

export enum EAuth {
  manager = 200,
  employee = 300,
  guest = 400
}

export type TLight = 'on' | 'off' | 'warmming';
export type TStatus = 'active' | 'not-active';
export interface IProduct {
  catalogId: string;
  name: string;
  price: number;
  experationDate: Date;
  status: TStatus;
  img?: string;
}
const PATH = 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800918/prod/product_images/products_medium/';
const PRODUCTS: IProduct[] = [
  {
    catalogId: 'p0001',
    name: 'מסיכת קורונה',
    price: 100,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: PATH + 'TEV50_M_P_7296073381112_1.png'
  },
  {
    catalogId: 'p0002',
    name: 'אלקו ג\'ל',
    price: 19,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: PATH + 'SYN66_M_P_7296073380948_1.png'
  },
  {
    catalogId: 'p0002',
    name: 'דליפקאן',
    price: 24,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: PATH + 'TXY60_M_P_7290107647809_1.png'
  },
  {
    catalogId: 'p0003',
    name: 'שוגי',
    price: 100,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: PATH + 'ZQN49_M_P_9992360704_1.png'
  },
  {
    catalogId: 'p0004',
    name: 'לואקר',
    price: 54,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: PATH + 'DWI61_M_P_9992345983_1.png'
  },
  {
    catalogId: 'p0005',
    name: 'אלקו ג\'ל',
    price: 16,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: PATH + 'SYN66_M_P_7296073380948_1.png'
  },
  {
    catalogId: 'p0006',
    name: 'דליפקאן',
    price: 24,
    status: 'not-active',
    experationDate: new Date('01/01/25'),
    img: PATH + 'TXY60_M_P_7290107647809_1.png'
  },
];

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  title = {
    title: 'בחר מוצרים:',
    search: 'אנא הקלד שם מוצר',
  };
  label = {

    search: 'אנא הקלד שם מוצר',
  }
  light: TLight;
  btn = {

    search: 'חפש',
    switch: 'כיבוי\\הדלקה'
  }
  filter = 'אוריה';
  products = PRODUCTS;

  user;
  constructor() {
    console.log(this.user);

  }

  ngOnInit() {
    // this.light = 'on';
  }
  onClick() {
    console.log(this.filter);

    if (!this.filter) {
      this.filter = 'יהונתן';
    } else {
      this.filter += ' אורי';
    }

  }
  onBlur() {
    this.onClick();
  }
  changeLightState() {
    switch (this.light) {
      case 'off':
        this.light = 'warmming';
        break;
      case 'warmming':
        this.light = 'on';
        break;
      case 'on':
        this.light = undefined;
        break;

      default:
        this.light = 'warmming';
        break;
    }
  }
}
