import { Component, OnInit } from '@angular/core';
import { GetBussesService } from '../get-busses.service';
import * as _ from 'lodash';
// import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public BusData: Array<any>;
  public currentBus: any;
  public isAuthenticated: boolean;

  constructor(
    // public oktaAuth: OktaAuthService,
    private getbusService: GetBussesService
  ) {
    //  get authentication state for immediate use
    // this.oktaAuth.isAuthenticated().then(result => {
    //   this.isAuthenticated = result;
    // });
    //  subscribe to authentication state changes
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated)
    // );
    getbusService.get().subscribe((data: any) => (this.BusData = data));
    this.currentBus = this.setInitialValuesForBusData();
  }

  private setInitialValuesForBusData() {
    return {
      id: 0,
      busNumber: '',
      busType: '',
      capacity: 0,
      registrationYear: '',
      driverName: '',
      maintenance: 0
    };
  }

  public createOrUpdateBus = function(bus: any) {
    // if jogging is present in joggingData, we can assume this is an update
    // otherwise it is adding a new element
    let busWithId;
    busWithId = _.find(this.busData, el => el.id === bus.id);

    if (busWithId) {
      const updateIndex = _.findIndex(this.busData, { id: busWithId.id });
      this.workoutService
        .update(bus)
        .subscribe(busRecord => this.busData.splice(updateIndex, 1, bus));
    } else {
      this.workoutService
        .add(bus)
        .subscribe(busRecord => this.busData.push(bus));
    }

    this.currentBus = this.setInitialValuesForBusData();
  };

  public editClicked = function(record) {
    this.currentBus = record;
  };

  public newClicked = function() {
    this.currentBus = this.setInitialValuesForBusData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.BusData, { id: record.id });
    this.getbusService
      .remove(record)
      .subscribe(result => this.BusData.splice(deleteIndex, 1));
  }

  ngOnInit() {}
}
