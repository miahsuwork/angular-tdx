"use strict";(self.webpackChunkangular_tdx=self.webpackChunkangular_tdx||[]).push([[524],{5524:(lt,P,s)=>{s.r(P),s.d(P,{TourismModule:()=>ut});var L=s(253),m=s(8583),u=s(618);const y="assets/images/empty-picture.png";var c=(()=>{return(r=c||(c={})).SCENIC_SPOT="scenic-spot",r.ACTIVITY="activity",r.RESTAURANT="restaurant",c;var r})();const g={taiwan:{label:"\u5168\u90e8\u7e23\u5e02",value:"",region:"All"},taipei:{label:"\u53f0\u5317\u5e02",value:"Taipei",region:"North"},newTaipei:{label:"\u65b0\u5317\u5e02",value:"NewTaipei",region:"North"},keelung:{label:"\u57fa\u9686\u5e02",value:"Keelung",region:"North"},taoyuan:{label:"\u6843\u5712\u5e02",value:"Taoyuan",region:"North"},hsinchu:{label:"\u65b0\u7af9\u5e02",value:"Hsinchu",region:"North"},hsinchuCounty:{label:"\u65b0\u7af9\u7e23",value:"HsinchuCounty",region:"North"},yilanCounty:{label:"\u5b9c\u862d\u7e23",value:"YilanCounty",region:"North"},miaoliCounty:{label:"\u82d7\u6817\u7e23",value:"MiaoliCounty",region:"Central"},taichung:{label:"\u53f0\u4e2d\u5e02",value:"Taichung",region:"Central"},changhuaCounty:{label:"\u5f70\u5316\u7e23",value:"ChanghuaCounty",region:"Central"},nantouCounty:{label:"\u5357\u6295\u7e23",value:"NantouCounty",region:"Central"},yunlinCounty:{label:"\u96f2\u6797\u7e23",value:"YunlinCounty",region:"Central"},chiayi:{label:"\u5609\u7fa9\u5e02",value:"Chiayi",region:"South"},chiayiCounty:{label:"\u5609\u7fa9\u7e23",value:"ChiayiCounty",region:"South"},tainan:{label:"\u53f0\u5357\u5e02",value:"Tainan",region:"South"},kaohsiung:{label:"\u9ad8\u96c4\u5e02",value:"Kaohsiung",region:"South"},pingtungCounty:{label:"\u5c4f\u6771\u7e23",value:"PingtungCounty",region:"South"},penghuCounty:{label:"\u6f8e\u6e56\u7e23",value:"PenghuCounty",region:"South"},hualienCounty:{label:"\u82b1\u84ee\u7e23",value:"HualienCounty",region:"East"},taitungCounty:{label:"\u81fa\u6771\u7e23",value:"TaitungCounty",region:"East"},kinmenCounty:{label:"\u91d1\u9580\u7e23",value:"KinmenCounty",region:"Outer"},lienchiangCounty:{label:"\u9023\u6c5f\u7e23",value:"LienchiangCounty",region:"Outer"}};function p(r){let a="";for(const[e,i]of Object.entries(g))r.includes(i.label)&&(a=i.label);return a}const v=r=>!r||0===Object.keys(r).length;var I=s(6215),N=s(5435),l=(()=>{return(r=l||(l={})).SCENIC_SPOT="ScenicSpot",r.ACTIVITY="Activity",r.RESTAURANT="Restaurant",l;var r})(),t=s(3018),w=s(5870),S=s(1841),F=s(2340);let A=(()=>{class r extends w.K{constructor(e,i){super(F.N.tdxApiUrl,e),this.http=e,this.route=i}getScenicSpot(e,i=""){const o=this.getHttpParams(e);return this.get(`/api/basic/v2/Tourism/ScenicSpot/${i}`,o)}getRestaurant(e,i=""){const o=this.getHttpParams(e);return this.get(`/api/basic/v2/Tourism/Restaurant/${i}`,o)}getActivity(e,i=""){const o=this.getHttpParams(e);return this.get(`/api/basic/v2/Tourism/Activity/${i}`,o)}getHttpParams(e){let i=new S.LE;if(Object.keys(e).length>0)for(const[o,T]of Object.entries(e))i=i.set(`$${o}`,T);return i}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(S.eN),t.LFG(u.gz))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var d=s(4929),h=s(3738),$=s(9075);let R=(()=>{class r{constructor(e){this.sanitizer=e}transform(e,i){return this.sanitizer.bypassSecurityTrustResourceUrl(e)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36($.H7,16))},r.\u0275pipe=t.Yjl({name:"safe",type:r,pure:!0}),r})();var f=s(1062);function Y(r,a){if(1&r&&t._UZ(0,"img",24),2&r){const e=t.oxw(2);t.Q6J("src",e.detailData.pictures[0].pictureUrl,t.LSH)("alt",e.detailData.pictures[0].pictureDescription)}}function J(r,a){if(1&r&&(t.TgZ(0,"span",25),t._uU(1),t.qZA()),2&r){const e=a.$implicit;t.xp6(1),t.Oqu(e)}}function k(r,a){if(1&r&&(t.TgZ(0,"div",12),t.TgZ(1,"div",7),t._uU(2,"\u6d3b\u52d5\u6642\u9593"),t.qZA(),t.TgZ(3,"div",14),t._uU(4),t.ALo(5,"date"),t.ALo(6,"date"),t.qZA(),t.qZA()),2&r){const e=t.oxw(2);t.xp6(4),t.AsE(" ",t.xi3(5,2,e.detailData.startTime,"yyyy/MM/dd")," - ",t.xi3(6,5,e.detailData.endTime,"yyyy/MM/dd")," ")}}function E(r,a){if(1&r&&(t.TgZ(0,"div",12),t.TgZ(1,"div",7),t._uU(2,"\u71df\u696d\u6642\u9593"),t.qZA(),t.TgZ(3,"div",14),t._uU(4),t.qZA(),t.qZA()),2&r){const e=t.oxw(2);t.xp6(4),t.Oqu(e.detailData.openTime)}}function Q(r,a){if(1&r&&(t.TgZ(0,"div",12),t.TgZ(1,"div",7),t._uU(2,"\u4e3b\u8fa6\u55ae\u4f4d"),t.qZA(),t.TgZ(3,"div",14),t._uU(4),t.qZA(),t.qZA()),2&r){const e=t.oxw(2);t.xp6(4),t.Oqu(e.detailData.organizer)}}function H(r,a){if(1&r&&(t.TgZ(0,"div",12),t.TgZ(1,"div",7),t._uU(2,"\u7db2\u7ad9"),t.qZA(),t.TgZ(3,"a",26),t._uU(4),t.qZA(),t.qZA()),2&r){const e=t.oxw(2);t.xp6(4),t.AsE("",e.detailData.phone,">",e.detailData.websiteUrl,"")}}function j(r,a){if(1&r&&(t.TgZ(0,"div",12),t.TgZ(1,"div",7),t._uU(2,"\u65c5\u904a\u8cc7\u8a0a"),t.qZA(),t.TgZ(3,"div",14),t._uU(4),t.qZA(),t.qZA()),2&r){const e=t.oxw(2);t.xp6(4),t.Oqu(e.detailData.travelInfo)}}function M(r,a){if(1&r&&(t.TgZ(0,"div",12),t.TgZ(1,"div",7),t._uU(2,"\u7968\u50f9\u8cc7\u8a0a"),t.qZA(),t.TgZ(3,"div",14),t._uU(4),t.qZA(),t.qZA()),2&r){const e=t.oxw(2);t.xp6(4),t.Oqu(e.detailData.ticketInfo)}}const z=function(r,a){return["/search",r,a]};function B(r,a){if(1&r&&(t.TgZ(0,"mat-grid-tile",29),t.TgZ(1,"a",30),t.TgZ(2,"div",31),t._UZ(3,"img",32),t.qZA(),t.TgZ(4,"div",33),t.TgZ(5,"div",34),t._uU(6),t.qZA(),t.TgZ(7,"div",35),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const e=a.$implicit,i=t.oxw(3);t.xp6(1),t.Q6J("routerLink",t.WLB(5,z,i.searchType,e.id)),t.xp6(2),t.Q6J("src",e.picture?e.picture.pictureUrl:i.emptyPictureUrl,t.LSH)("alt",e.picture?e.picture.pictureDescription:e.name),t.xp6(3),t.Oqu(e.city),t.xp6(2),t.Oqu(e.name)}}function V(r,a){if(1&r&&(t.TgZ(0,"div"),t.TgZ(1,"div",4),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-grid-list",27),t.YNc(5,B,9,8,"mat-grid-tile",28),t.qZA(),t.qZA()),2&r){const e=t.oxw(2);t.xp6(2),t.hij(" \u9084\u6709\u9019\u4e9b\u4e0d\u80fd\u932f\u904e\u7684",t.lcZ(3,2,"recommended-items."+e.searchType)," "),t.xp6(3),t.Q6J("ngForOf",e.nearbyDataList)}}function G(r,a){if(1&r&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.YNc(2,Y,1,2,"img",3),t.qZA(),t.TgZ(3,"div",4),t._uU(4),t.qZA(),t.TgZ(5,"div",5),t.YNc(6,J,2,1,"span",6),t.qZA(),t.TgZ(7,"div",7),t._uU(8,"\u4ecb\u7d39\u8aaa\u660e"),t.qZA(),t.TgZ(9,"div",8),t._uU(10),t.qZA(),t.TgZ(11,"mat-grid-list",9),t.TgZ(12,"mat-grid-tile"),t.TgZ(13,"div",10),t.YNc(14,k,7,8,"div",11),t.YNc(15,E,5,1,"div",11),t.TgZ(16,"div",12),t.TgZ(17,"div",7),t._uU(18,"\u806f\u7d61\u96fb\u8a71"),t.qZA(),t.TgZ(19,"a",13),t._uU(20),t.qZA(),t.qZA(),t.YNc(21,Q,5,1,"div",11),t.TgZ(22,"div",12),t.TgZ(23,"div",7),t._uU(24,"\u5730\u5740"),t.qZA(),t.TgZ(25,"div",14),t._uU(26),t.qZA(),t.qZA(),t.YNc(27,H,5,2,"div",11),t.YNc(28,j,5,1,"div",11),t.YNc(29,M,5,1,"div",11),t.qZA(),t.qZA(),t.TgZ(30,"mat-grid-tile"),t.TgZ(31,"div",15),t.TgZ(32,"div",16),t._UZ(33,"iframe",17),t.ALo(34,"safe"),t.qZA(),t.TgZ(35,"div",7),t._uU(36,"\u5468\u908a\u8cc7\u8a0a"),t.qZA(),t.TgZ(37,"div",18),t.TgZ(38,"div",19),t.TgZ(39,"div"),t._UZ(40,"i",20),t._uU(41," \u9644\u8fd1\u666f\u9ede "),t.qZA(),t.qZA(),t.TgZ(42,"div",19),t.TgZ(43,"div"),t._UZ(44,"i",21),t._uU(45," \u9644\u8fd1\u6d3b\u52d5 "),t.qZA(),t.qZA(),t.TgZ(46,"div",19),t.TgZ(47,"div"),t._UZ(48,"i",22),t._uU(49," \u9644\u8fd1\u7f8e\u98df "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(50,V,6,4,"div",23),t.qZA()),2&r){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.detailData.pictures.length>0),t.xp6(2),t.Oqu(e.detailData.name),t.xp6(2),t.Q6J("ngForOf",e.detailData.classList),t.xp6(4),t.Oqu(e.detailData.description),t.xp6(4),t.Q6J("ngIf",e.detailData.startTime),t.xp6(1),t.Q6J("ngIf",e.detailData.openTime),t.xp6(5),t.Oqu(e.detailData.phone),t.xp6(1),t.Q6J("ngIf",e.detailData.organizer),t.xp6(5),t.Oqu(e.detailData.address),t.xp6(1),t.Q6J("ngIf",e.detailData.websiteUrl),t.xp6(1),t.Q6J("ngIf",e.detailData.travelInfo),t.xp6(1),t.Q6J("ngIf",e.detailData.ticketInfo),t.xp6(4),t.Q6J("src",t.lcZ(34,14,e.mapUrl),t.uOi),t.xp6(17),t.Q6J("ngIf",!!e.nearbyDataList)}}let X=(()=>{class r{constructor(e,i,o){this.router=e,this.route=i,this.tourismService=o,this.tourismType=c,this.id$=new I.X(""),this.nearbyCount=4,this.emptyPictureUrl=y}getRandom(e,i){return Math.floor(Math.random()*(i-e+1))+e}getMapUrl(){return this.searchType===c.ACTIVITY?`https://maps.google.com/maps?q=${this.detailData.position.positionLat},${this.detailData.position.positionLon}&hl=zh-TW&t=&z=16&ie=UTF8&iwloc=&output=embed`:`https://maps.google.com/maps?q=${this.detailData.name}+${this.detailData.name.split("").join("+")}&hl=zh-TW&t=&z=16&ie=UTF8&iwloc=&output=embed\n        `}getPictureList(e){const i=[];return i.push({pictureDescription:e.PictureDescription1,pictureUrl:e.PictureUrl1}),e.hasOwnProperty("PictureUrl2")&&i.push({pictureDescription:e.PictureDescription2,pictureUrl:e.PictureUrl2}),e.hasOwnProperty("PictureUrl3")&&i.push({pictureDescription:e.PictureDescription3,pictureUrl:e.PictureUrl3}),i}getScenicSpotDetail(){this.tourismService.getScenicSpot({filter:`${l.SCENIC_SPOT}ID eq '${this.id}'`}).subscribe(e=>{const i=e[0],o=[];i.hasOwnProperty("Class1")&&o.push(i.Class1),i.hasOwnProperty("Class2")&&o.push(i.Class2),i.hasOwnProperty("Class3")&&o.push(i.Class3),this.detailData={id:i.ScenicSpotID,name:i.ScenicSpotName,description:i.DescriptionDetail,address:i.Address,city:i.City?i.City:p(i.Address),phone:i.Phone,srcUpdateTime:i.SrcUpdateTime,updateTime:i.UpdateTime,pictures:v(i.Picture)?[]:this.getPictureList(i.Picture),position:{positionLat:i.Position.PositionLat,positionLon:i.Position.PositionLon,geoHash:i.Position.GeoHash},zipCode:i.ZipCode,travelInfo:i.TravelInfo,ticketInfo:i.TicketInfo,openTime:i.OpenTime,classList:o,endTime:"",startTime:"",organizer:"",websiteUrl:""},this.mapUrl=this.getMapUrl(),this.getScenicSpotNearbyData()})}getActivityDetail(){this.tourismService.getActivity({filter:`${l.ACTIVITY}ID eq '${this.id}'`}).subscribe(e=>{const i=e[0],o=[];i.hasOwnProperty("Class1")&&o.push(i.Class1),i.hasOwnProperty("Class2")&&o.push(i.Class2),i.hasOwnProperty("Class3")&&o.push(i.Class3),this.detailData={id:i.ActivityID,name:i.ActivityName,description:i.Description,address:i.Address,city:i.City?i.City:p(i.Address),phone:i.Phone,srcUpdateTime:i.SrcUpdateTime,updateTime:i.UpdateTime,pictures:v(i.Picture)?[]:this.getPictureList(i.Picture),position:{positionLat:i.Position.PositionLat,positionLon:i.Position.PositionLon,geoHash:i.Position.GeoHash},endTime:i.EndTime,startTime:i.StartTime,organizer:i.Organizer,zipCode:"",travelInfo:"",ticketInfo:"",openTime:"",classList:o,websiteUrl:""},this.mapUrl=this.getMapUrl(),this.getActivityNearbyData()})}getRestaurantDetail(){this.tourismService.getRestaurant({filter:`${l.RESTAURANT}ID eq '${this.id}'`}).subscribe(e=>{const i=e[0],o=[];i.hasOwnProperty("Class")&&o.push(i.Class),this.detailData={id:i.RestaurantID,name:i.RestaurantName,description:i.Description,address:i.Address,city:i.City?i.City:p(i.Address),phone:i.Phone,srcUpdateTime:i.SrcUpdateTime,updateTime:i.UpdateTime,pictures:v(i.Picture)?[]:this.getPictureList(i.Picture),position:{positionLat:i.Position.PositionLat,positionLon:i.Position.PositionLon,geoHash:i.Position.GeoHash},zipCode:i.ZipCode,openTime:i.OpenTime,websiteUrl:i.WebsiteUrl,classList:o,endTime:"",startTime:"",organizer:"",travelInfo:"",ticketInfo:""},this.mapUrl=this.getMapUrl(),this.getRestaurantNearbyData()})}getScenicSpotNearbyData(){this.tourismService.getScenicSpot({top:this.nearbyCount,filter:`${l.SCENIC_SPOT}ID ne '${this.id}'`,spatialFilter:`nearby(${this.detailData.position.positionLat},${this.detailData.position.positionLon},${this.getRandom(4e3,5e3)})`}).subscribe(e=>{this.nearbyDataList=e.map(i=>{let o;return i.Picture.hasOwnProperty("PictureUrl1")&&(o={pictureUrl:i.Picture.PictureUrl1,pictureDescription:i.Picture.PictureDescription1}),{picture:o,id:i.ScenicSpotID,name:i.ScenicSpotName,city:i.City?i.City:p(i.Address)}})})}getActivityNearbyData(){this.tourismService.getActivity({top:this.nearbyCount,filter:`${l.ACTIVITY}ID ne '${this.id}'`,spatialFilter:`nearby(${this.detailData.position.positionLat},${this.detailData.position.positionLon},${this.getRandom(9e3,1e4)})`}).subscribe(e=>{this.nearbyDataList=e.map(i=>{let o;return i.Picture.hasOwnProperty("PictureUrl1")&&(o={pictureUrl:i.Picture.PictureUrl1,pictureDescription:i.Picture.PictureDescription1}),{picture:o,id:i.ActivityID,name:i.ActivityName,city:i.City?i.City:p(i.Address)}})})}getRestaurantNearbyData(){this.tourismService.getRestaurant({top:this.nearbyCount,filter:`${l.RESTAURANT}ID ne '${this.id}'`,spatialFilter:`nearby(${this.detailData.position.positionLat},${this.detailData.position.positionLon},${this.getRandom(4e3,5e3)})`}).subscribe(e=>{this.nearbyDataList=e.map(i=>{let o;return i.Picture.hasOwnProperty("PictureUrl1")&&(o={pictureUrl:i.Picture.PictureUrl1,pictureDescription:i.Picture.PictureDescription1}),{picture:o,id:i.RestaurantID,name:i.RestaurantName,city:i.City?i.City:p(i.Address)}})})}getDetail(){switch(this.route.paramMap.subscribe(e=>{this.searchType=e.get("tourismType"),this.id=e.get("id")}),this.searchType){case c.SCENIC_SPOT:this.getScenicSpotDetail();break;case c.ACTIVITY:this.getActivityDetail();break;case c.RESTAURANT:this.getRestaurantDetail()}}ngOnInit(){this.getDetail(),this.router.events.pipe((0,N.h)(e=>e instanceof u.m2)).subscribe(()=>{this.detailData=null,this.nearbyDataList=null,this.getDetail()})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(A))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-tourism-detail"]],decls:1,vars:1,consts:[["class","detail",4,"ngIf"],[1,"detail"],[1,"detail-img"],[3,"src","alt",4,"ngIf"],[1,"detail-title"],[1,"detail-tag-group"],["class","detail-tag-item",4,"ngFor","ngForOf"],[1,"detail-subtitle"],[1,"detail-description"],["cols","2","rowHeight","","gutterSize","30px"],[1,"detail-info"],["class","detail-item",4,"ngIf"],[1,"detail-item"],["href","tel:detailData.phone",1,"detail-text"],[1,"detail-text"],[1,"w-100"],[1,"detail-map"],["width","100%","height","250","loading","lazy","allowfullscreen","","referrerpolicy","no-referrer-when-downgrade",2,"border","0",3,"src"],[1,"detail-nearby-group"],[1,"detail-nearby-item"],[1,"ic","ic-nearby-scenic-spot"],[1,"ic","ic-nearby-activity"],[1,"ic","ic-nearby-restaurant"],[4,"ngIf"],[3,"src","alt"],[1,"detail-tag-item"],["href","websiteUrl",1,"detail-text"],["cols","4","rowHeight","270px","gutterSize","15px"],["class","common-card",4,"ngFor","ngForOf"],[1,"common-card"],[1,"card-content",3,"routerLink"],[1,"card-img-outer"],["mat-card-image","",3,"src","alt"],[1,""],[1,"card-city","ic-address"],[1,"card-title"]],template:function(e,i){1&e&&t.YNc(0,G,51,16,"div",0),2&e&&t.Q6J("ngIf",i.detailData)},directives:[m.O5,m.sg,d.Il,d.DX,u.yS,h.G2],pipes:[R,m.uU,f.X$],styles:[""]}),r})();var n=s(3679),q=s(8145),W=s(6529),Z=s(8295),b=s(7441),_=s(9983),x=s(1095),O=s(2458);function K(r,a){if(1&r&&(t.TgZ(0,"mat-option",24),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const e=a.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",t.lcZ(2,2,"navbar."+e.label)," ")}}const C=function(r,a){return["/search",r,a]};function tt(r,a){if(1&r&&(t.TgZ(0,"mat-grid-tile",25),t.TgZ(1,"mat-card"),t.TgZ(2,"div",26),t._UZ(3,"img",27),t.qZA(),t.TgZ(4,"mat-card-title-group"),t.TgZ(5,"div",28),t.TgZ(6,"div",29),t._uU(7),t.ALo(8,"date"),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"div",30),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",31),t.TgZ(13,"div",32),t._uU(14),t.qZA(),t.TgZ(15,"a",33),t._uU(16),t.ALo(17,"translate"),t._UZ(18,"i",34),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const e=a.$implicit,i=t.oxw();t.xp6(3),t.Q6J("src",e.Picture.PictureUrl1?e.Picture.PictureUrl1:i.emptyPictureUrl,t.LSH)("alt",e.Picture.PictureUrl1?e.Picture.PictureDescription1:e.ActivityName),t.xp6(4),t.AsE(" ",t.xi3(8,8,e.StartTime,"yyyy/MM/dd")," - ",t.xi3(9,11,e.EndTime,"yyyy/MM/dd")," "),t.xp6(4),t.Oqu(e.ActivityName),t.xp6(3),t.Oqu(e.City),t.xp6(1),t.Q6J("routerLink",t.WLB(16,C,i.searchType.ACTIVITY,e.ActivityID)),t.xp6(1),t.Oqu(t.lcZ(17,14,"common.detailed"))}}function it(r,a){if(1&r&&(t.TgZ(0,"mat-grid-tile",35),t.TgZ(1,"a",36),t.TgZ(2,"div",26),t._UZ(3,"img",27),t.qZA(),t.TgZ(4,"div",37),t.TgZ(5,"div",38),t._uU(6),t.qZA(),t.TgZ(7,"div",30),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const e=a.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.WLB(5,C,i.searchType.SCENIC_SPOT,e.ScenicSpotID)),t.xp6(2),t.Q6J("src",e.Picture.PictureUrl1?e.Picture.PictureUrl1:i.emptyPictureUrl,t.LSH)("alt",e.Picture.PictureUrl1?e.Picture.PictureDescription1:e.ScenicSpotName),t.xp6(3),t.Oqu(e.City),t.xp6(2),t.Oqu(e.ScenicSpotName)}}function et(r,a){if(1&r&&(t.TgZ(0,"mat-grid-tile",35),t.TgZ(1,"a",36),t.TgZ(2,"div",26),t._UZ(3,"img",27),t.qZA(),t.TgZ(4,"div",37),t.TgZ(5,"div",38),t._uU(6),t.qZA(),t.TgZ(7,"div",30),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const e=a.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.WLB(5,C,i.searchType.RESTAURANT,e.RestaurantID)),t.xp6(2),t.Q6J("src",e.Picture.PictureUrl1?e.Picture.PictureUrl1:i.emptyPictureUrl,t.LSH)("alt",e.Picture.PictureUrl1?e.Picture.PictureDescription1:e.RestaurantName),t.xp6(3),t.Oqu(e.City),t.xp6(2),t.Oqu(e.RestaurantName)}}const U=function(r){return["/search",r]};function at(r,a){if(1&r&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&r){const e=a.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.label," ")}}const ot=function(r,a){return["/search",r,a]};function st(r,a){if(1&r&&(t.TgZ(0,"mat-grid-tile",12),t.TgZ(1,"a",13),t.TgZ(2,"div",14),t._UZ(3,"img",15),t.qZA(),t.TgZ(4,"div",16),t.TgZ(5,"div",17),t._uU(6),t.qZA(),t.TgZ(7,"div",18),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const e=a.$implicit,i=t.oxw();t.xp6(1),t.Q6J("routerLink",t.WLB(5,ot,i.searchType,e.id)),t.xp6(2),t.Q6J("src",e.picture?e.picture.pictureUrl:i.emptyPictureUrl,t.LSH)("alt",e.picture?e.picture.pictureDescription:e.name),t.xp6(3),t.Oqu(e.city),t.xp6(2),t.Oqu(e.name)}}const nt=[{path:"",component:(()=>{class r{constructor(e,i,o,T,D){this.menuService=e,this.tourismService=i,this.fb=o,this.formService=T,this.router=D,this.displayCount=4,this.emptyPictureUrl=y,this.searchType=c}get searchOperation(){return this.searchForm.get(["searchOperation"])}get keyword(){return this.searchForm.get(["keyword"])}ngOnInit(){this.searchForm=this.fb.group({searchOperation:["",[n.kI.required]],keyword:["",[n.kI.required]]}),this.searchOptions=this.menuService.getNavbar().map(e=>({label:e.label,value:e.label})),this.searchForm.patchValue({searchType:this.searchOptions[0].value}),this.tourismService.getActivity({top:this.displayCount,orderby:"StartTime asc",filter:`StartTime ge ${(new Date).toISOString()}`}).subscribe(e=>{this.activityData=e&&e.length>0?e:[]}),this.tourismService.getScenicSpot({top:this.displayCount}).subscribe(e=>{this.scenicSpotData=e.map(i=>{const o=p(i.Address);return Object.assign(Object.assign({},i),{City:o})})}),this.tourismService.getRestaurant({top:this.displayCount}).subscribe(e=>{this.restaurantData=e.map(i=>Object.assign(Object.assign({},i),{City:i.City?i.City:p(i.Address)}))})}search(){this.searchForm.invalid?this.formService.validateAllFormFields(this.searchForm):this.router.navigate([`search/${this.searchOperation.value}`],{queryParams:{keyword:this.keyword.value}})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(q.h),t.Y36(A),t.Y36(n.qu),t.Y36(W.o),t.Y36(u.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-tourism-home"]],decls:58,vars:47,consts:[[1,"layout-content"],[1,"home-section"],[1,"home-description"],[3,"innerHTML"],[1,"home-sub-description"],[1,"ic","ic-address-yellow"],[1,"home-form","form",3,"formGroup"],["appearance","outline"],["formControlName","searchOperation"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","keyword"],["mat-flat-button","","color","primary",1,"w-100",3,"click"],[1,"home-section","carousel"],[1,"home-section","event"],[1,"home-title"],[1,"home-title-text"],[1,"home-title-more",3,"routerLink"],[1,"ic","ic-arrow-orange-right"],["cols","2","rowHeight","160px","gutterSize","15px"],["class","media-card",4,"ngFor","ngForOf"],[1,"home-section","attraction"],["cols","4","rowHeight","270px","gutterSize","15px"],["class","common-card",4,"ngFor","ngForOf"],[1,"home-section","restaurant"],[3,"value"],[1,"media-card"],[1,"card-img-outer"],["mat-card-image","",3,"src","alt"],[1,"card-content"],[1,"card-date"],[1,"card-title"],[1,"card-footer"],[1,"card-city","ic","ic-address"],[1,"card-more",3,"routerLink"],[1,"ic","ic-arrow-green-right"],[1,"common-card"],[1,"card-content",3,"routerLink"],[1,""],[1,"card-city","ic-address"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.ALo(4,"translate"),t.TgZ(5,"div",4),t._UZ(6,"i",5),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.qZA(),t.TgZ(9,"form",6),t.TgZ(10,"mat-form-field",7),t.TgZ(11,"mat-label"),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"mat-select",8),t.YNc(15,K,3,4,"mat-option",9),t.qZA(),t.qZA(),t.TgZ(16,"mat-form-field",7),t.TgZ(17,"mat-label"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t._UZ(20,"input",10),t.qZA(),t.TgZ(21,"button",11),t.NdJ("click",function(){return i.search()}),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.qZA(),t.qZA(),t._UZ(24,"div",12),t.TgZ(25,"div",13),t.TgZ(26,"div",14),t.TgZ(27,"div",15),t._uU(28),t.ALo(29,"translate"),t.qZA(),t.TgZ(30,"a",16),t._uU(31),t.ALo(32,"translate"),t._UZ(33,"i",17),t.qZA(),t.qZA(),t.TgZ(34,"mat-grid-list",18),t.YNc(35,tt,19,19,"mat-grid-tile",19),t.qZA(),t.qZA(),t.TgZ(36,"div",20),t.TgZ(37,"div",14),t.TgZ(38,"div",15),t._uU(39),t.ALo(40,"translate"),t.qZA(),t.TgZ(41,"a",16),t._uU(42),t.ALo(43,"translate"),t._UZ(44,"i",17),t.qZA(),t.qZA(),t.TgZ(45,"mat-grid-list",21),t.YNc(46,it,9,8,"mat-grid-tile",22),t.qZA(),t.qZA(),t.TgZ(47,"div",23),t.TgZ(48,"div",14),t.TgZ(49,"div",15),t._uU(50),t.ALo(51,"translate"),t.qZA(),t.TgZ(52,"a",16),t._uU(53),t.ALo(54,"translate"),t._UZ(55,"i",17),t.qZA(),t.qZA(),t.TgZ(56,"mat-grid-list",21),t.YNc(57,et,9,8,"mat-grid-tile",22),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("innerHTML",t.lcZ(4,19,"home.title"),t.oJD),t.xp6(4),t.hij("",t.lcZ(8,21,"taiwan-travel-guide")," "),t.xp6(2),t.Q6J("formGroup",i.searchForm),t.xp6(3),t.Oqu(t.lcZ(13,23,"common.type")),t.xp6(3),t.Q6J("ngForOf",i.searchOptions),t.xp6(3),t.Oqu(t.lcZ(19,25,"common.keyword-placeholder")),t.xp6(4),t.hij(" ",t.lcZ(23,27,"common.search")," "),t.xp6(6),t.hij(" ",t.lcZ(29,29,"home.recent-activity")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(41,U,i.searchType.ACTIVITY)),t.xp6(1),t.hij(" ",t.lcZ(32,31,"common.more"),""),t.xp6(4),t.Q6J("ngForOf",i.activityData),t.xp6(4),t.hij(" ",t.lcZ(40,33,"home.popular-scenic-spot")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(43,U,i.searchType.SCENIC_SPOT)),t.xp6(1),t.hij(" ",t.lcZ(43,35,"common.more"),""),t.xp6(4),t.Q6J("ngForOf",i.scenicSpotData),t.xp6(4),t.hij(" ",t.lcZ(51,37,"home.popular-restaurant")," "),t.xp6(2),t.Q6J("routerLink",t.VKq(45,U,i.searchType.RESTAURANT)),t.xp6(1),t.hij(" ",t.lcZ(54,39,"common.more"),""),t.xp6(4),t.Q6J("ngForOf",i.restaurantData))},directives:[n._Y,n.JL,n.sg,Z.KE,Z.hX,b.gD,n.JJ,n.u,m.sg,_.Nt,n.Fj,x.lW,u.yS,d.Il,O.ey,d.DX,h.a8,h.G2,h.C1],pipes:[f.X$,m.uU],styles:[""]}),r})()},{path:"search",redirectTo:"search/scenic-spot",pathMatch:"full"},{path:"search/:tourismType",component:(()=>{class r{constructor(e,i,o,T,D){this.route=e,this.menuService=i,this.fb=o,this.tourismService=T,this.router=D,this.tourismType=c,this.emptyPictureUrl=y}get city(){return this.searchForm.get(["city"])}get keyword(){return this.searchForm.get(["keyword"])}setQueryParams(){this.router.navigate([`search/${this.searchType}`],{queryParams:{keyword:this.keyword.value}})}getScenicSpot(){this.setQueryParams(),this.tourismService.getScenicSpot({filter:`contains(${l.SCENIC_SPOT}Name, '${this.keyword.value}')`}).subscribe(e=>{this.resultData=e.map(i=>{let o;return i.Picture.hasOwnProperty("PictureUrl1")&&(o={pictureUrl:i.Picture.PictureUrl1,pictureDescription:i.Picture.PictureDescription1}),{picture:o,id:i.ScenicSpotID,name:i.ScenicSpotName,city:i.City?i.City:p(i.Address)}})})}getActivity(){this.setQueryParams(),this.tourismService.getActivity({filter:`contains(${l.ACTIVITY}Name, '${this.keyword.value}')`,orderby:"StartTime asc"},this.city.value).subscribe(e=>{this.resultData=e.map(i=>{let o;return i.Picture.hasOwnProperty("PictureUrl1")&&(o={pictureUrl:i.Picture.PictureUrl1,pictureDescription:i.Picture.PictureDescription1}),{picture:o,id:i.ActivityID,name:i.ActivityName,city:i.City?i.City:p(i.Address)}})})}getRestaurant(){this.setQueryParams(),this.tourismService.getRestaurant({filter:`contains(${l.RESTAURANT}Name, '${this.keyword.value}')`}).subscribe(e=>{this.resultData=e.map(i=>{let o;return i.Picture.hasOwnProperty("PictureUrl1")&&(o={pictureUrl:i.Picture.PictureUrl1,pictureDescription:i.Picture.PictureDescription1}),{picture:o,id:i.RestaurantID,name:i.RestaurantName,city:i.City?i.City:p(i.Address)}})})}search(){switch(this.searchType){case c.SCENIC_SPOT:this.getScenicSpot();break;case c.ACTIVITY:this.getActivity();break;case c.RESTAURANT:this.getRestaurant()}}ngOnInit(){this.searchForm=this.fb.group({city:[g.taiwan.value],keyword:[this.route.snapshot.queryParamMap.get("keyword")||"",[n.kI.required]]}),this.route.paramMap.subscribe(e=>{this.searchType=e.get("tourismType")}),this.searchOptions=this.menuService.getNavbar().map(e=>({label:e.label,value:e.label})),this.cityOptions=Object.keys(g).map(e=>({label:g[e].label,value:g[e].value})),this.searchForm.patchValue({searchType:this.searchOptions[0].value}),this.keyword.value&&this.search()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u.gz),t.Y36(q.h),t.Y36(n.qu),t.Y36(A),t.Y36(u.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-tourism-search"]],decls:22,vars:15,consts:[[1,"page-search"],[1,"title"],[1,"form",3,"formGroup"],["appearance","outline"],["formControlName","city"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"keyword"],["matInput","","formControlName","keyword"],["mat-flat-button","","color","primary",3,"click"],["cols","4","rowHeight","300px","gutterSize","15px"],["class","common-card",4,"ngFor","ngForOf"],[3,"value"],[1,"common-card"],[1,"card-content",3,"routerLink"],[1,"card-img-outer"],["mat-card-image","",3,"src","alt"],[1,""],[1,"card-city","ic-address"],[1,"card-title"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"form"),t.TgZ(5,"form",2),t.TgZ(6,"mat-form-field",3),t.TgZ(7,"mat-label"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"mat-select",4),t.YNc(11,at,2,2,"mat-option",5),t.qZA(),t.qZA(),t.TgZ(12,"mat-form-field",6),t.TgZ(13,"mat-label"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t._UZ(16,"input",7),t.qZA(),t.TgZ(17,"button",8),t.NdJ("click",function(){return i.search()}),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"mat-grid-list",9),t.YNc(21,st,9,8,"mat-grid-tile",10),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,7,"navbar."+i.searchType)),t.xp6(3),t.Q6J("formGroup",i.searchForm),t.xp6(3),t.Oqu(t.lcZ(9,9,"common.city")),t.xp6(3),t.Q6J("ngForOf",i.cityOptions),t.xp6(3),t.Oqu(t.lcZ(15,11,"common.keyword-placeholder")),t.xp6(4),t.hij(" ",t.lcZ(19,13,"common.search")," "),t.xp6(3),t.Q6J("ngForOf",i.resultData))},directives:[n._Y,n.JL,n.F,n.sg,Z.KE,Z.hX,b.gD,n.JJ,n.u,m.sg,_.Nt,n.Fj,x.lW,d.Il,O.ey,d.DX,u.yS,h.G2],pipes:[f.X$],styles:[""]}),r})()},{path:"search/:tourismType/:id",component:X}];let ct=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[u.Bz.forChild(nt)],u.Bz]}),r})(),ut=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[m.ez,ct,L.m]]}),r})()}}]);