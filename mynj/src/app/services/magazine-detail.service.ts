import { Injectable } from '@angular/core';
import { MagazineDetail } from '../interface/magazine-detail';
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root',
})
export class MagazineDetailService {
  public magazineDetail: {
    magazineDetails: MagazineDetail[];
  };

  constructor() {
    this.magazineDetail = {
      magazineDetails: [
        {
          id: 1,
          title: '동글동글한 콜리플라워 500g',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer01.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-01.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 2,
          title: '신선한 친환경 오이 1+1',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer02.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-02.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 3,
          title: '싱싱한 당일재배 상추',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer03.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-03.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 4,
          title: '영양만점 브더콜리',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer04.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-04.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 5,
          title: '향긋한 무청 1박스',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer05.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-05.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 6,
          title: '녹차용 녹차잎파리 1박스 [당일재배]',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer06.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-06.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 7,
          title: '영양만점 미니 양상추',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer07.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-07.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 8,
          title: '강원도 햇 양파 1박스',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer08.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-08.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 9,
          title: '제천 명물 달콤 양파',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer09.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-09.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 10,
          title: '산나물명가 케일',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer10.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-10.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 11,
          title: '채소나라 채소왕자 상추',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer11.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-11.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
        {
          id: 12,
          title: '햇 호고박구마',
          writer: '김농부씨',
          writerImage: 'assets/images/contents/farmer/farmer12.jpg',
          image: 'assets/images/contents/magazine/fruit-cutting-12.jpg',
          regDate: '15',
          dDay: 2,
          description:
            '이번 사과 깎기 대회에 참여하고 싶어서 주문한 사과를 멋지게 깎아 보았습니다! 이렇게도 할 수 있네요',
          comments: '정말 맛있어 보여요 꼭 사먹을게요',
          likes: 233,
        },
      ],
    };
  }

  getMagazineDetail(magazineId: number): MagazineDetail {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    const result = $(this.magazineDetail.magazineDetails).filter(function (_i, n) {
      return n['id'] === magazineId;
    });
    return result[0] as unknown as MagazineDetail;
  }

  getAllMagazineDetail() {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions

    return this.magazineDetail.magazineDetails;
  }
}
