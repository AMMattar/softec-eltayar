import { Component } from '@angular/core';
import { SideMenu } from 'src/app/enums/side-menu';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.scss']
})
export class VehiclesDetailsComponent {
  sideMenu = SideMenu;
  selected: number = 0;
}
