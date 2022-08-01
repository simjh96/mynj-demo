import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class LandscapeDetailService {
  public magazineDetail: any;

  constructor() {
    this.magazineDetail = {
      magazineDetails: [
        {
          imgUrl: 'assets/images/landscape/landscape1.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape2.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape3.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape4.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape5.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape6.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape7.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape8.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape9.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape10.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape11.jpg',
        },
        {
          imgUrl: 'assets/images/landscape/landscape12.jpg',
        },
      ],
    };
  }

  getMagazineDetail(magazineId: number): any {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    const result = $(this.magazineDetail.magazineDetails).filter(function (
      _i,
      n
    ) {
      return n['id'] === magazineId;
    });
    return result[0] as unknown as any;
  }

  getAllMagazineDetail() {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions

    return this.magazineDetail.magazineDetails;
  }
}
