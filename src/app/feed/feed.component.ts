import { Component, OnInit } from '@angular/core';

export enum EAuth {
  manager = 200,
  employee = 300,
  guest = 400
}
export type TStatus = 'active' | 'not-active';
export interface IProduct {
  catalogId: string;
  name: string;
  price: number;
  experationDate: Date;
  status: TStatus;
  img?: string;
}


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
  filter: string;
  product: IProduct = {
    catalogId: 'p0001',
    name: 'מסיכת קורונה',
    price: 100,
    status: 'active',
    experationDate: new Date('01/01/25'),
    img: 'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800918/prod/product_images/products_medium/TEV50_M_P_7296073381112_1.png'
  };

  user;
  constructor() {
    console.log(this.user);

  }

  ngOnInit() {
  }

}
