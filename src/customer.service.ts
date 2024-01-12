// customer.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: any[] = [];

  getCustomers(): any[] {
    return this.customers;
  }

  addCustomer(customer: any): void {
    // Add customer logic, e.g., push to the array
    this.customers.push(customer);
  }

  updateCustomer(customer: any): void {
    // Update customer logic, e.g., find and update in the array
    const index = this.customers.findIndex((c) => c.id === customer.id);
    if (index !== -1) {
      this.customers[index] = customer;
    }
  }

  deleteCustomer(customerId: number): void {
    // Delete customer logic, e.g., find and remove from the array
    this.customers = this.customers.filter((c) => c.id !== customerId);
  }
}
