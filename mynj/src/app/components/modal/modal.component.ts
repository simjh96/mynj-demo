import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  isModalOpen = false;
  constructor(private navController: NavController) {}
  setOpen() {
    this.isModalOpen = !this.isModalOpen;
  }

  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
  myLogin(modal: any) {
    modal.dismiss();
    this.openPage('home');
  }

  kakaoLogin() {}
  onSubmit(f) {}
}
