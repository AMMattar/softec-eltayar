import { Component } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/ivehicle';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.scss']
})
export class VehiclesTableComponent {
  vehiclesList: IVehicle[] = [
    {
      carImage: 'carImage',
      id: 1,
      plateNumber: 'plateNumber',
      group: 'group',
      allocation: 'allocation',
      statusImage: 'statusImage',
      deviceCode: 'deviceCode',
      vendor: 'vendor',
      version: 'version'
    }
  ];
}
