import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  isModalOpen = false;

  setOpen() {
    this.isModalOpen = !this.isModalOpen;
  }

  kakaoLogin() {}
  onSubmit(f) {}
}
