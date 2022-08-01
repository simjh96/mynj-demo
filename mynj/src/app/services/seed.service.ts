import { Injectable } from '@angular/core';
import { Seed } from '../interface/seed';

@Injectable({
  providedIn: 'root',
})
export class SeedService {
  seeds: Seed[] = [
    {
      id: 's1',
      type: '사과',
      subtype: '부사',
      farmerTitle: '동쪽농부',
      farmerSubtitle: '사과 농사 10년차',
      location: '충북 충주',
      imgUrl: 'assets/images/unripe-apple.jpg',
    },
    {
      id: 's2',
      type: '복숭아',
      subtype: '유명',
      farmerTitle: '털복숭이',
      farmerSubtitle: '복숭아처럼 달콤한 인생을 살고 싶어요',
      location: '경남 진주',
      imgUrl: 'assets/images/peach.jpg',
    },
    {
      id: 's3',
      type: '딸기',
      subtype: '설향',
      farmerTitle: '딸기는하우스',
      farmerSubtitle: '딸기왜이렇게비싸냐',
      location: '충남 논산',
      imgUrl: 'assets/images/strawberry2.jpg',
    },
    {
      id: 's4',
      type: '한라봉',
      subtype: '제주',
      farmerTitle: '할라버지',
      farmerSubtitle: '먹고싶다',
      location: '제주 성산',
      imgUrl: 'assets/images/hallabong.jpg',
    },
  ];

  constructor() {}

  getAllSeeds() {
    return [...this.seeds];
  }

  getOrderableSeed(seedId: string) {
    return { ...this.seeds.find((s) => s.id === seedId) };
  }
}
