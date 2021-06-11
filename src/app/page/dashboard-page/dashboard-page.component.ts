import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Response } from 'src/app/model/response-model';
import { AttendanceApiService } from 'src/app/service/attendance-api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  isCheckinLoading = false;

  constructor(
    private message: NzMessageService,
    private attendanceApiService: AttendanceApiService
  ) {}

  ngOnInit(): void {}

  initialize() {
    //TODO: implement apis necessary for startup
  }

  checkin() {
    this.isCheckinLoading = true;
    this.attendanceApiService.checkIn().subscribe(
      (response: Response) => {
        if (response.success) {
          this.message.create('success', response.message);
        } else {
          this.message.create('error', response.message);
        }
        this.isCheckinLoading = false;
      },
      (err) => {
        this.message.create(
          'error',
          err.message ? err.message : err.toString()
        );
        this.isCheckinLoading = false;
      }
    );
  }

  checkout() {}
}
