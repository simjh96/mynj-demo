import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  @Input() title = '안녕하세요 V 님,';
  @Input() subTitle = '오늘의 소식입니다!';
  constructor() {}

  ngOnInit() {}
}
