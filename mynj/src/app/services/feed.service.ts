import { Injectable } from '@angular/core';
import { Feed } from '../interface/feed';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  feedData: Feed[] = [
    {
      id: 'f1',
      nickname: 'yoojung',
      title: '문의',
      content: '겨울이 오고 커피나무 잎사귀가 이상해졌어요 ㅠㅠ 문제가 뭘까요?',
      imgUrl: 'assets/images/winter.jpeg',
      profileImgUrl: 'assets/images/profile/mask1.png',
      date: '2022-04-12',
      comments: 3,
      likes: 4,
    },
    {
      id: 'f2',
      nickname: 'jaehoon',
      title: '문의',
      content: '방에 해가 안 드는데 바질 잘 자랄 수 있나요?',
      imgUrl: null,
      profileImgUrl: 'assets/images/profile/mask2.png',
      date: '2022-04-12',
      comments: 7,
      likes: 2,
    },
    {
      id: 'f3',
      nickname: 'sungkyung',
      title: '자랑',
      content: '토...토마토가 보이기 시작했다! 축하해주세요 ㅎㅎㅎ',
      imgUrl: 'assets/images/tomato.jpeg',
      profileImgUrl: 'assets/images/profile/mask3.png',
      date: '2022-04-12',
      comments: 6,
      likes: 12,
    },
    {
      id: 'f4',
      nickname: 'eastman',
      title: '',
      content: '이것만 개발하면 나도 햇빛을 볼 수 있어 힘내자...',
      imgUrl: null,
      profileImgUrl: 'assets/images/profile/mask4.png',
      date: '2022-04-12',
      comments: 0,
      likes: -10,
    },
    {
      id: 'f5',
      nickname: 'joshua',
      title: '',
      content: 'life is gold, and it is rising up',
      imgUrl: 'assets/images/watermelon.jpg',
      profileImgUrl: 'assets/images/profile/mask1.png',
      date: '2022-06-26',
      comments: 45,
      likes: 77,
    },
  ];

  constructor() {}

  getAllFeeds() {
    return [...this.feedData];
  }

  getFeed(id: string) {
    return { ...this.feedData.find((p) => p.id === id) };
  }
}
