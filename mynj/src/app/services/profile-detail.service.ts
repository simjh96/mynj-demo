import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailService {
  public magazineDetail: any;

  constructor() {
    this.magazineDetail = {
      magazineDetails: [
        {
          id: 1,
          title: '동글동글한 콜리플라워 500g',
          writer: '김농부씨',
          writerImage: 'assets/images/profile/mask1.jpg',
          imgUrl: 'assets/images/profile/mask1.jpg',
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
          writerImage: 'assets/images/profile/mask2.jpg',
          imgUrl: 'assets/images/profile/mask2.jpg',
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
          writerImage: 'assets/images/profile/mask3.jpg',
          imgUrl: 'assets/images/profile/mask3.jpg',
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
          writerImage: 'assets/images/profile/mask4.jpg',
          imgUrl: 'assets/images/profile/mask4.jpg',
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
          writerImage: 'assets/images/profile/mask5.jpg',
          imgUrl: 'assets/images/profile/mask5.jpg',
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
          writerImage: 'assets/images/profile/mask6.jpg',
          imgUrl: 'assets/images/profile/mask6.jpg',
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
          writerImage: 'assets/images/profile/mask7.jpg',
          imgUrl: 'assets/images/profile/mask7.jpg',
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
          writerImage: 'assets/images/profile/mask8.jpg',
          imgUrl: 'assets/images/profile/mask8.jpg',
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
          writerImage: 'assets/images/profile/mask9.jpg',
          imgUrl: 'assets/images/profile/mask9.jpg',
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
          writerImage: 'assets/images/profile/mask10.jpg',
          imgUrl: 'assets/images/profile/mask10.jpg',
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
          writerImage: 'assets/images/profile/mask11.jpg',
          imgUrl: 'assets/images/profile/mask11.jpg',
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
          writerImage: 'assets/images/profile/mask12.jpg',
          imgUrl: 'assets/images/profile/mask12.jpg',
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
