// orders.component.ts
import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-orders',
  template: `
    <div *ngFor="let order of orders">
      {{ order.product }}
    </div>
    <div *appPagination="currentPage; maxItems: 5; totalItems: orders.length"></div>
  `
})
export class OrdersComponent {
  @Input() customerId: number | null = null;
  orders: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnChanges() {
    if (this.customerId !== null) {
      this.orders = this.dataService.getData().orders.filter(
        (order: any) => order.customerId === this.customerId
      );
    }
  }
}

