import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-addor-update',
  templateUrl: './addor-update.component.html',
  styleUrls: ['./addor-update.component.css']
})
export class AddorUpdateComponent implements OnInit {
  @Output() busCreated = new EventEmitter<any>();
  @Input() busInfo: any;
  public buttonText = 'Save';

  constructor() {
    this.clearBusInfo();
    console.log(this.busInfo.busNumber);
  }

  ngOnInit() {}

  private clearBusInfo = function() {
    // Create an empty jogging object
    this.busInfo = {
      id: undefined,
      busNumber: '',
      busType: '',
      capacity: 0,
      registrationYear: '',
      driverName: '',
      maintenance: 0
    };
  };

  public addOrUpdateBusRecord = function(event) {
    this.busCreated.emit(this.busInfo);
    this.clearBusInfo();
  };
}
