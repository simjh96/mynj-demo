/* eslint-disable no-underscore-dangle */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Platform } from '@ionic/angular';
import gsap from 'gsap';

@Component({
  selector: 'app-seed-fall',
  templateUrl: './seed-fall.component.html',
  styleUrls: ['./seed-fall.component.scss'],
})
export class SeedFallComponent implements AfterViewInit, OnInit {
  public balls = [];
  public _balls = [];
  public ballCount = 22;
  public ballRm = 15;
  public delta = 0.1;

  public newBall;
  public _newBall;
  public featureBackground;
  public content;
  public vw;
  public vh;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private platform: Platform
  ) {
    this.vw = this.platform.width();
    this.vh = this.platform.height();
  }
  ngOnInit(): void {
    // set canvas
    this.setFeatureBackground();
    let imgUrls = this.mkImgUrls(this.ballCount);

    // generage balls and _balls
    for (let i = 0; i < this.ballCount; i++) {
      // meta data of balls
      const r = this.vw * 0.01 * this.ballRm * this.random(0.7, 1);
      this._newBall = {
        x: r,
        y: 0,
        r,
        imgUrl: this.getRandomFromBucket(imgUrls),
      };
      this._balls.push(this._newBall);

      // render balls
      this.newBall = this.genNewBall(r, i);
      this.renderer.appendChild(this.featureBackground, this.newBall);
      this.balls.push(this.newBall);
    }
  }

  ngAfterViewInit(): void {
    // set initital landing position
    console.log(`calc begin`);
    this.calcInitPos();
    console.log(`calc fin`);

    // render with gsap
    this.balls.forEach((e, i) => {
      gsap.set(e, {
        x: this._balls[i]['x'],
        y: '-50vw',
        xPercent: -50,
        yPercent: -50,
        rotate: -50,
        scale: 0.3,
      });
      gsap.to(e, {
        xPercent: -50,
        yPercent: -50,
        delay: 0.5 + 0.05 * i,
        y: this._balls[i]['y'],
        scale: 1,
        rotate: 0,
      });
    });
  }

  random(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  calcInitPos() {
    for (let i = 0; i < this._balls.length; i++) {
      const element = this._balls[i];
      this.setPos(i);
    }
  }

  /**
   *
   * @param upto current targeted circle idx
   *
   * set final position of circle
   * directly manipulate instance variable's meta data
   * _balls[upto]['x'], _balls[upto]['y']
   */
  setPos(upto: number) {
    // set pos upto i
    if (upto === 0) {
      this._balls[0]['y'] = this.vh * 0.7 - this._balls[0]['r'];
    } else {
      // find inittouch idx
      let initTouch: number = this.getInitTouch(upto);
      // roll
      // pile up
      let d = this.getD(initTouch, upto);
      this._balls[upto]['y'] =
        this._balls[initTouch]['y'] -
        Math.sqrt(
          d ** 2 - (this._balls[initTouch]['x'] - this._balls[upto]['x']) ** 2
        );

      if (this._balls[upto]['x'] < this._balls[initTouch]['x']) {
        // not rollable
      } else {
        let theta = this.getTheta(upto, initTouch);
        // roll
        let banList = [initTouch];
        let roll = this.rollTilTouch(upto, initTouch, theta, banList);
        let safeCount = 0;
        while (roll['ctn'] === true && safeCount < 10) {
          roll = this.rollTilTouch(
            upto,
            roll['tIdx'],
            this.getTheta(upto, roll['tIdx']),
            banList
          );
          safeCount += 1;
        }
      }
    }
  }

  /**
   *
   * @param upto current target to set initial position
   * @returns initail position of first contact at fall
   */
  getInitTouch(upto) {
    let candidates = [];
    for (let i = 0; i < upto; i++) {
      let y =
        -Math.sqrt(
          (this._balls[upto]['r'] + this._balls[i]['r']) ** 2 -
            (this._balls[upto]['r'] - this._balls[i]['x']) ** 2
        ) + this._balls[i]['y'];
      candidates.push({ i, y: isNaN(y) ? this.vh : y });
    }
    return candidates.reduce(
      (past: { i: number; y: number }, curr: { i: number; y: number }) =>
        curr['y'] <= past['y'] ? curr : past,
      { i: -1, y: this.vh }
    )['i'];
  }

  /**
   *
   * @param upto orbiting circle
   * @param initTouch sun circle
   * @param theta sun, orbit degree in radian
   * @param banList visited suns
   * @returns ctn until all possible travel to right is finnished
   *
   * orbit until next contact
   * try finding another circle to touch until hitting wall
   * look only around orbit to lessen complexity
   */
  rollTilTouch(
    upto,
    initTouch,
    theta,
    banList: Array<number>
  ): { tIdx: number; ctn: boolean; theta: number } {
    let d = this.getD(upto, initTouch);
    let touched = false;
    let safeCount = 0;
    let farList = [];

    // loop until touch a wall or other pre placed circle
    while (
      this._balls[upto]['x'] + this._balls[upto]['r'] < this.vw * 1.5 &&
      this._balls[upto]['y'] + this._balls[upto]['r'] < this.vh * 0.7 &&
      !touched &&
      safeCount < 100
    ) {
      // update with delta movement of theta (clockwise)
      theta -= this.delta;
      this._balls[upto]['x'] =
        this._balls[initTouch]['x'] + d * Math.cos(theta);
      this._balls[upto]['y'] =
        this._balls[initTouch]['y'] - d * Math.sin(theta);

      for (let i = 0; i < upto; i++) {
        // only look through coverage
        if (!farList.includes(i)) {
          let distance = Math.hypot(
            this._balls[upto]['x'] - this._balls[i]['x'],
            this._balls[upto]['y'] - this._balls[i]['y']
          );
          // memo far ones
          if (
            distance >
            2 * (this._balls[upto]['r'] + this._balls[initTouch]['r']) +
              this._balls[i]['r']
          ) {
            farList.push(i);
          }
          // check touch
          if (
            !banList.includes(i) &&
            distance <= this._balls[upto]['r'] + this._balls[i]['r']
          ) {
            touched = true;
            banList.push(i);
            return {
              tIdx: i,
              ctn: this._balls[upto]['x'] >= this._balls[i]['x'],
              theta,
            };
          }
        }
      }
      safeCount += 1;
    }
    return { tIdx: 0, ctn: false, theta };
  }
  /**
   *
   * @param i i
   * @param j j
   * @returns arg tan of two ball_i, ball_j
   *
   * not commutative as y always have heading -
   */
  getTheta(i, j) {
    // get theta
    return Math.atan(
      -(this._balls[i]['y'] - this._balls[j]['y']) /
        (this._balls[i]['x'] - this._balls[j]['x'])
    );
  }
  /**
   *
   * @param i i
   * @param j j
   * @returns r_i + r_j
   *
   * commutative
   */
  getD(i, j) {
    return this._balls[i]['r'] + this._balls[j]['r'];
  }

  /**
   *
   * sets background in ionic default el
   */
  setFeatureBackground() {
    this.featureBackground = this.renderer.createElement('ion-grid');
    this.content = this.el.nativeElement;
    this.renderer.setProperty(
      this.featureBackground,
      'id',
      'featureBackground'
    );
    this.renderer.appendChild(this.content, this.featureBackground);
  }

  /**
   *
   * @param r radius
   * @param i to link with _balls[i]
   * @returns newBall
   *
   * sets img newBall to have class, width, height, src
   */
  genNewBall(r, i) {
    let newBall = this.renderer.createElement('img');
    this.renderer.setAttribute(newBall, 'src', this._balls[i]['imgUrl']);
    this.renderer.setAttribute(newBall, 'alt', 'fruit circle');
    this.renderer.addClass(newBall, 'ball');
    this.renderer.setStyle(newBall, 'width', `${2 * r}px`);
    this.renderer.setStyle(newBall, 'height', `${2 * r}px`);
    return newBall;
  }

  /**
   *
   * @param bucket any array
   * @returns idx without replacement
   *
   * pop a random idx
   */
  getRandomFromBucket(bucket) {
    let randomIndex = Math.floor(Math.random() * bucket.length);
    return bucket.splice(randomIndex, 1)[0];
  }
  /**
   *
   * @param mx max idx (if asset is plenty)
   * @returns imgUrls bucket
   *
   * generate imgUrl bucket from fruit1.jpg ~ fruitmx.jpg
   */
  mkImgUrls(mx) {
    let imgUrls = [];
    for (let i = 1; i <= mx; i++) {
      imgUrls.push(`assets/images/contents/fruits/fruit${i}.jpg`);
    }
    return imgUrls;
  }
}
