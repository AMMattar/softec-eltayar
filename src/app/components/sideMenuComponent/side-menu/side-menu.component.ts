import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  imgSrcOne: string = '../../../../assets/images/menu.svg';
  altOne: string = 'menu';
  imgSrcTwo: string = '../../../../assets/images/white-dashboard-0.svg';
  altTwo: string = 'dashboard';
  imgSrcThree: string = '../../../../assets/images/white-accelrate-2.svg';
  altThree: string = 'accelrate';
  imgSrcFour: string = '../../../../assets/images/white-gps-1.svg';
  altFour: string = 'gps';
  imgSrcFive: string = '../../../../assets/images/white-operation-3.svg';
  altFive: string = 'operation';
  imgSrcSix: string = '../../../../assets/images/white-maintenance-4.svg';
  altSix: string = 'maintenance';
  imgSrcSeven: string = '../../../../assets/images/white-report-5.svg';
  altSeven: string = 'report';
  imgSrcEight: string = '../../../../assets/images/control-panel.svg';
  altEight: string = 'panel';
  imgSrcNine: string = '../../../../assets/images/white-school-7.svg';
  altNine: string = 'school';
  imgSrcTen: string = '../../../../assets/images/ic_add.svg';
  altTen: string = 'add';
}
