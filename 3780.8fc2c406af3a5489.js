"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3780],{3780:(w,l,r)=>{r.r(l),r.d(l,{GrowthDiaryPageModule:()=>h});var c=r(6895),d=r(433),a=r(877),s=r(6492),e=r(8256);let g=(()=>{class t{constructor(){this.feedData=[{id:"f1",nickname:"\uc774\ub807\uac8c \uc790\ub77c\uace0 \uc788\uc5b4\uc694",title:"\ubb38\uc758",content:"",imgUrl:"assets/images/diary/diary1.jpg",profileImgUrl:"assets/images/profile/mask1.jpg",date:"2022-04-12",comments:3,likes:4},{id:"f2",nickname:"\uc7ac\ubc30\uc77c\uc9c0",title:"\ubb38\uc758",content:"\uc815\uc2dd\ud558\uace0 \uc5f4\ud758 \uc815\ub3c4\uac00 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4. \ub2e4\ud589\ud788 \ub2e4\ub4e4 \ubfcc\ub9ac\ub97c \ub0b4\ub9ac\uace0 \uc18d\uc78e\ub3c4 \uc798 \uc62c\ub77c\uc624\ub294 \uc911\uc785\ub2c8\ub2e4. \uc791\uc740 \uc18d\uc78e\uc774  ...\ub354\ubcf4\uae30",imgUrl:"assets/images/diary/diary2.jpg",profileImgUrl:"assets/images/profile/mask2.jpg",date:"2022-04-12",comments:7,likes:2},{id:"f3",nickname:"\uc7ac\ubc30\uc77c\uc9c0",title:"\uc790\ub791",content:"\uc798 \ud0a4\uc6b4 \uc124\ud5a5 \ub538\uae30 \ubaa8\uc885\uc744 \uc62e\uaca8\uc2ec\uc744 \uc2dc\uae30\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubfcc\ub9ac\uac00 \uc81c\ubc95 \ub0b4\ub824\uc11c \uc815\uc2dd \ud6c4\uc5d0\ub3c4 \uc798 \uc790\ub784 \uac83 \uac19\ub124\uc694! ",imgUrl:"assets/images/diary/diary3.jpg",profileImgUrl:"assets/images/profile/mask3.jpg",date:"2022-04-12",comments:6,likes:12},{id:"f4",nickname:"\uc7ac\ubc30\uc77c\uc9c0",title:"",content:"\ubb34\ub354\uc704\uac00 \ub9c9 \uc2dc\uc791\ub418\uc5c8\uc9c0\ub9cc, \ub17c\uc0b0\ub18d\uc7a5\uc5d0\uc11c\ub294 \ubc8c\uc368 \uaca8\uc6b8\uc5d0 \ub0a0\uc124\ud5a5 \ub538\uae30 \ubaa8\uc885 \ud0a4\uc6b0\uae30\uc5d0 \ud55c\ucc3d\uc785\ub2c8\ub2e4. \uc798 \uae30\ub978  ...\ub354\ubcf4\uae30",imgUrl:"assets/images/diary/diary4.jpg",profileImgUrl:"assets/images/profile/mask4.jpg",date:"2022-04-12",comments:0,likes:-10}]}getAllFeeds(){return[...this.feedData]}getFeed(n){return{...this.feedData.find(i=>i.id===n)}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=r(8917);function m(t,o){if(1&t&&(e.TgZ(0,"ion-card",9)(1,"ion-card-content",10),e._UZ(2,"app-feed-card",11),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.Q6J("f",n)("interactive",!1)}}const p=[{path:"",component:(()=>{class t{constructor(n,i,v){this.feedService=n,this.router=i,this.navController=v,this.type="myTown"}ngOnInit(){this.feeds=this.feedService.getAllFeeds()}segmentChanged(n){this.router.navigateByUrl("/tabs/town/magazine")}onFeedClick(){console.log("working")}openPage(n){this.navController.navigateForward(n,{})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g),e.Y36(s.F0),e.Y36(a.SH))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-growth-diary"]],decls:12,vars:2,consts:[["slot","start"],["defaultHref","/","text",""],[1,"header-title"],["scrollEvents","true",3,"fullscreen"],[1,"feed-container"],["class","feed-wrapper",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary"],["name","add"],[1,"feed-wrapper"],[1,"ion-no-padding"],[3,"f","interactive"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title",2),e._uU(5," \ub17c\uc0b0\ub18d\uc7a5 "),e.qZA()()(),e.TgZ(6,"ion-content",3)(7,"ion-grid",4),e.YNc(8,m,3,2,"ion-card",5),e.qZA(),e.TgZ(9,"ion-fab",6)(10,"ion-fab-button",7),e._UZ(11,"ion-icon",8),e.qZA()()()),2&n&&(e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("ngForOf",i.feeds))},dependencies:[c.sg,a.oU,a.Sm,a.PM,a.FN,a.W2,a.IJ,a.W4,a.jY,a.Gu,a.gu,a.sr,a.wd,a.cs,f.x],styles:[".header-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px;text-align:left;padding:20px;margin-left:5px}ion-card[_ngcontent-%COMP%]{margin:5px 0 5px 5px}.feed-container[_ngcontent-%COMP%]{margin:0;padding:0}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(p),s.Bz]}),t})();var y=r(5642);let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,d.u5,a.Pc,u,y.K]}),t})()}}]);