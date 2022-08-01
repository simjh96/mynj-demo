import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FakeTabInput } from 'src/app/interface/fake-tab-input';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public initialTab = true;
  public currentTab: Subject<string> = new Subject();
  public tabInput: FakeTabInput;

  constructor() {}
  ngOnInit() {
    this.currentTab.next('default-home');
    this.tabInput = {
      tabs: [
        { url: 'default-home', icon: 'home', label: '농장' },
        { url: 'market', icon: 'egg', label: '시장' },
        { url: 'town', icon: 'leaf', label: '마을' },
      ],
    };
  }

  tabChange(newTab: string) {
    this.currentTab.next(newTab);
    this.initialTab = false;
  }
}
