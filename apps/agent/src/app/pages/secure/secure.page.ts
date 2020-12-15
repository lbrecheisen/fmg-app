import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './secure.page.html',
  styleUrls: ['./secure.page.scss'],
})
export class SecurePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => this.router.navigate(['/']), 1000);
  }
}
