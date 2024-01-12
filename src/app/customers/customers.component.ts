// customers.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers',
  template: `
    <input type="text" [(ngModel)]="filterText" placeholder="Filter customers" />
    
    <div *ngFor="let customer of customers | customerFilter: filterText">
      {{ customer.name }}
      <button (click)="showOrders(customer.id)">Show Orders</button>
    </div>

    <div *ngIf="showOrdersFlag">
      <app-orders [customerId]="selectedCustomerId"></app-orders>
    </div>
  `
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  selectedCustomerId: number | null = null;
  showOrdersFlag = false;
  filterText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.customers = this.dataService.getData().customers;
  }

  showOrders(customerId: number) {
    this.selectedCustomerId = customerId;
    this.showOrdersFlag = true;
  }
}
