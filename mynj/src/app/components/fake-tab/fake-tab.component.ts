import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
import {
  FakeTabInput
} from 'src/app/interface/fake-tab-input';

@Component({
  selector: 'app-fake-tab',
  templateUrl: './fake-tab.component.html',
  styleUrls: ['./fake-tab.component.scss'],
})
export class FakeTabComponent implements OnInit {
  @Output() tabChange = new EventEmitter();
  @Input() tabInput: FakeTabInput;
  constructor(private navController: NavController) {}

  ngOnInit() {}

  onTabChange(tabTitle: string) {
    this.tabChange.emit(tabTitle);
  }
  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
}
