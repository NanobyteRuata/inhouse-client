import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee-model';
import { ApiConstants } from 'src/app/constants/api-constants';

@Component({
  selector: 'app-employee-card-component',
  templateUrl: './employee-card-component.component.html',
  styleUrls: ['./employee-card-component.component.scss'],
})
export class EmployeeCardComponentComponent implements OnInit {
  @Input() employee: Employee;
  @Input() isSelected: boolean = false;
  @Input() showDetails: boolean = false;
  ApiConstants = ApiConstants;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onDetailsClicked() {
    // to reload if on same page
    this.router.navigate(['']).then(() => {
      this.router.navigate(['/employee', { employee_id: this.employee.id }], {
        replaceUrl: true,
      });
    });
  }

  getImageUrl(url: string) {
    if (url.startsWith('http') || url.includes(ApiConstants.HOST_URL)) {
      return url;
    } else {
      return ApiConstants.HOST_URL + url;
    }
  }
}
