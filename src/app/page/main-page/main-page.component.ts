import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.isLoading = true;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_employee');
    this.router.navigateByUrl('/login');
    this.isLoading = false;
  }
}
