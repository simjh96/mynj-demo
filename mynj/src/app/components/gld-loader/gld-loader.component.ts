import { Component } from '@angular/core';

@Component({
  selector: 'app-gld-loader',
  templateUrl: './gld-loader.component.html',
  styleUrls: ['./gld-loader.component.scss'],
})
export class GldLoaderComponent {
  public assetPath1 = `assets/village-head/source/village-head.glb`;
  public rotation: [x: number, y: number, z: number] = [0, 0, 0];
  public onBeforeRender(): void {
    this.rotation = [0, this.rotation[1] + 0.003, 0];
  }
}
