import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-tab',
  templateUrl: './search-tab.component.html',
  styleUrls: ['./search-tab.component.scss'],
})
export class SearchTabComponent implements OnInit {
  @Input() title = '어느 토지를 거래하시겠어요?';
  @Input() textBox =
    '토지에 따라 거래할 수 있는 농작물이 달라져요. 마음에 드는 마을과 토지를 찾아보세요.';
  @Input() placeholder = '딸기';
  @Input() isChip = true;

  constructor() {}

  ngOnInit() {}
  onSearchChange(e) {}
}
